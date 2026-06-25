import { useFetcher } from "react-router";
import { safeParse, flatten } from "valibot";
import type { Route } from "./+types/kontakt";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { JsonLd } from "~/components/JsonLd";
import { buildMeta } from "~/lib/seo";
import { ContactSchema } from "~/lib/contact-schema";

const SITE_URL = "https://define-smart.dk";
const PAGE_URL = `${SITE_URL}/kontakt`;

export function meta(_: Route.MetaArgs) {
  return [
    ...buildMeta({
      title: "Book en demo | define waters A/S",
      description:
        "Se jeres vand, live. Book en 20-minutters gennemgang med rigtige data. Ring +45 21 22 16 06 eller skriv til info@define-waters.dk.",
      url: PAGE_URL,
      siteName: "define waters A/S",
      type: "website",
      locale: "da_DK",
    }),
    { tagName: "link", rel: "canonical", href: PAGE_URL },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  // Honeypot — a hidden field real users never see/fill. Bots that fill every
  // input get a silent success and we store/send nothing.
  if (String(form.get("company_url") ?? "").trim() !== "") {
    return { success: true as const };
  }

  const raw = {
    navn: String(form.get("navn") ?? "").trim(),
    virksomhed: String(form.get("virksomhed") ?? "").trim() || undefined,
    email: String(form.get("email") ?? "").trim(),
    tlf: String(form.get("tlf") ?? "").trim(),
    type: String(form.get("type") ?? "").trim() || undefined,
    besked: String(form.get("besked") ?? "").trim() || undefined,
  };

  const result = safeParse(ContactSchema, raw);

  if (!result.success) {
    return {
      success: false as const,
      errors: flatten<typeof ContactSchema>(result.issues).nested,
    };
  }

  const data = result.output;
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    undefined;

  try {
    const [{ getDb }, { sendContactMail }, { contactSubmissions }] = await Promise.all([
      import("~/lib/db.server"),
      import("~/lib/mail.server"),
      import("~/db/schema"),
    ]);

    // Dual-write: keep a local copy in the site's own DB as a backup, and forward
    // to the CRM (the source of truth for viewing + resending submissions).
    await getDb()!.insert(contactSubmissions).values({ ...data, ip });
    await sendContactMail(data, { sourceUrl: PAGE_URL, ip });
  } catch (err) {
    console.error("[kontakt] submission failed:", err);
    return {
      success: false as const,
      serverError: true,
      errors: {} as Record<string, [string, ...string[]]>,
    };
  }

  return { success: true as const };
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book en demo — Define Smart",
  description: "Book en gennemgang af Define Smart med live vanddata.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Kontakt", item: PAGE_URL },
    ],
  },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #D7E4EF",
  borderRadius: 10,
  fontSize: 15,
  fontFamily: "inherit",
  color: "#0B2740",
  background: "#FBFDFF",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#3C566B",
  marginBottom: 7,
};

const errStyle: React.CSSProperties = { fontSize: 13, color: "#E0556B", marginTop: 5, minHeight: 16 };

type FieldErrors = Record<string, [string, ...string[]] | undefined>;

function ContactForm() {
  const fetcher = useFetcher<typeof action>();
  const sent = fetcher.data?.success === true;
  const serverError = fetcher.data && "serverError" in fetcher.data && fetcher.data.serverError;
  const errors: FieldErrors = (fetcher.data && !fetcher.data.success ? fetcher.data.errors : {}) ?? {};
  const submitting = fetcher.state !== "idle";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const raw = {
      navn: (form.elements.namedItem("navn") as HTMLInputElement).value,
      virksomhed: (form.elements.namedItem("virksomhed") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      tlf: (form.elements.namedItem("tlf") as HTMLInputElement).value,
    };
    const result = safeParse(ContactSchema, raw);
    if (!result.success) {
      e.preventDefault();
      const nested = flatten<typeof ContactSchema>(result.issues).nested ?? {};
      const firstKey = (["navn", "email", "tlf"] as const).find((k) => nested[k]);
      if (firstKey) (form.elements.namedItem(firstKey) as HTMLInputElement)?.focus();
    }
  };

  const card: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #E2ECF4",
    borderRadius: 20,
    padding: 34,
    boxShadow: "0 18px 44px rgba(11,39,64,0.06)",
  };

  if (sent) {
    return (
      <div style={card}>
        <div style={{ textAlign: "center", padding: "40px 10px" }}>
          <div style={{ width: 58, height: 58, borderRadius: "50%", background: "#E4F6EF", color: "#0A8F5E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 20px" }}>✓</div>
          <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 10px" }}>Anmodning modtaget.</h3>
          <p style={{ color: "#58728A", fontSize: 15, margin: "0 0 24px" }}>
            Tak. Vores team kontakter dig snart for at aftale jeres gennemgang.
          </p>
          <a href="/" style={{ display: "inline-block", background: "#EAF2FA", color: "#0E63C7", padding: "12px 22px", borderRadius: 11, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>Tilbage til forsiden</a>
        </div>
      </div>
    );
  }

  return (
    <div style={card}>
      <fetcher.Form method="post" onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from real users; bots that fill it are silently dropped. */}
        <input type="text" name="company_url" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

        {serverError && (
          <p style={{ color: "#E0556B", fontSize: 14, margin: "0 0 18px" }}>
            Der opstod en fejl — prøv igen eller ring til os direkte.
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label htmlFor="navn" style={labelStyle}>Fulde navn</label>
            <input type="text" id="navn" name="navn" autoComplete="name" placeholder="Jonas Rasmussen" style={inputStyle} />
            <div style={errStyle}>{errors.navn?.[0] ?? ""}</div>
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>Arbejdsmail</label>
            <input type="email" id="email" name="email" autoComplete="email" placeholder="jonas@virksomhed.dk" style={inputStyle} />
            <div style={errStyle}>{errors.email?.[0] ?? ""}</div>
          </div>
          <div>
            <label htmlFor="tlf" style={labelStyle}>Telefon</label>
            <input type="tel" id="tlf" name="tlf" autoComplete="tel" placeholder="+45 .." style={inputStyle} />
            <div style={errStyle}>{errors.tlf?.[0] ?? ""}</div>
          </div>
          <div>
            <label htmlFor="virksomhed" style={labelStyle}>Virksomhed</label>
            <input type="text" id="virksomhed" name="virksomhed" autoComplete="organization" placeholder="Vantage Ejendomme" style={inputStyle} />
            <div style={errStyle}>{errors.virksomhed?.[0] ?? ""}</div>
          </div>
          <div>
            <label htmlFor="besked" style={labelStyle}>Hvor mange lokationer? <span style={{ fontWeight: 400, color: "#94A8B8" }}>(valgfrit)</span></label>
            <textarea id="besked" name="besked" placeholder="fx 12 erhvervsejendomme i to byer" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          <button type="submit" disabled={submitting} style={{ width: "100%", background: "#0E63C7", color: "#fff", border: "none", padding: 15, borderRadius: 11, fontWeight: 600, fontSize: 16, cursor: submitting ? "default" : "pointer", fontFamily: "inherit", boxShadow: "0 10px 24px rgba(14,99,199,0.26)", opacity: submitting ? 0.7 : 1 }}>
            {submitting ? "Sender …" : "Anmod om min demo"}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}

const CONTACT_ITEMS = [
  { icon: "@", title: "info@define-waters.dk", sub: "Svar inden for én hverdag", href: "mailto:info@define-waters.dk" },
  { icon: "⌖", title: "Boeslunde Byvej 76, 4242 Boeslunde", sub: "Udruller i hele Danmark", href: undefined },
  { icon: "☎", title: "+45 21 22 16 06", sub: "Hverdage 8–17", href: "tel:+4521221606" },
];

export default function Kontakt(_: Route.ComponentProps) {
  return (
    <div className="page">
      <Header />
      <JsonLd data={pageSchema} />

      <main>
        <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 32px 100px" }}>
          <div className="ds-split" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#15B6CF", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 }}>Book en demo</div>
              <h1 className="ds-h1" style={{ fontSize: 44, lineHeight: 1.08, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 18px" }}>Se jeres vand, live.</h1>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: "#3C566B", margin: "0 0 34px" }}>Fortæl os lidt om jeres lokationer, så sætter vi en 20-minutters gennemgang op med rigtige data.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {CONTACT_ITEMS.map((c) => {
                  const body = (
                    <>
                      <div style={{ flex: "none", width: 40, height: 40, borderRadius: 11, background: "#EAF3FB", display: "flex", alignItems: "center", justifyContent: "center", color: "#0E63C7", fontWeight: 700 }}>{c.icon}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15 }}>{c.title}</div>
                        <div style={{ fontSize: 14, color: "#58728A" }}>{c.sub}</div>
                      </div>
                    </>
                  );
                  return c.href ? (
                    <a key={c.title} href={c.href} style={{ display: "flex", gap: 14, alignItems: "flex-start", textDecoration: "none", color: "#0B2740" }}>{body}</a>
                  ) : (
                    <div key={c.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>{body}</div>
                  );
                })}
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
