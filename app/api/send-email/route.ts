import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, city } = await req.json();

    if (!name || !email || !phone || !city) {
      return Response.json({ error: "Campos obrigatórios" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Insider Flag" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email, // 👈 responder direto pro cliente
      subject: "Novo lead - Insider Flag",
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Cidade:</strong> ${city}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}