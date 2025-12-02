import axios from "axios";
import logger from "../utils/logger.js";

export async function sendMessage(to: string, text: string) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.PHONE_NUMBER_ID;

  if (!token || !phoneId) {
    logger.error("WHATSAPP_TOKEN ou PHONE_NUMBER_ID não configurados");
    return;
  }

  try {
    await axios.post(
      `https://graph.facebook.com/v16.0/${phoneId}/messages`,
      { messaging_product: "whatsapp", to, text: { body: text } },
      { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
    );
    logger.info(`Mensagem enviada para ${to}`);
  } catch (err: any) {
    logger.error(`Erro ao enviar mensagem: ${err.response?.data || err.message}`);
  }
}
