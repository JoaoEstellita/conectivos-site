import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      // Send via Resend
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "site@conectivos.net",
          to: ["joaoestellita@conectivos.net"],
          subject: `[conectivos.net] Novo contato: ${name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; color: #1a1a2e;">
              <h2 style="color: #8B5CF6;">Novo contato via site</h2>
              <table style="width:100%; border-collapse: collapse;">
                <tr><td style="padding:8px 0; color:#666; width:120px;"><b>Nome</b></td><td>${name}</td></tr>
                <tr><td style="padding:8px 0; color:#666;"><b>Email</b></td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0; color:#666;"><b>Empresa</b></td><td>${company || "—"}</td></tr>
              </table>
              <hr style="margin: 16px 0; border-color: #eee;" />
              <p style="color:#333; white-space: pre-wrap;">${message}</p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json({ error: "Falha ao enviar email." }, { status: 500 });
      }
    } else {
      // No Resend key — log to console (dev mode)
      console.log("📬 Novo contato (sem RESEND_API_KEY):", { name, email, company, message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
