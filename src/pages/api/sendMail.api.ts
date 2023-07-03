import { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "./email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: 'savioaraujo34@hotmail.com',
      to: 'svcarvalho38@gmail.com',
      subject: 'Contato via site',
      text: `nome: ${name}\nemail: ${email}\n mensagem: ${message}`,
    });
    console.log('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
}