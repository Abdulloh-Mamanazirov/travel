import axios from "axios";

const sendMessage = async (chatId, text) => {
  const url = `https://api.telegram.org/bot6948352866:AAGD64ZMNKGktk9BkoZMF597c1787bStusc/sendMessage?chat_id=${chatId}&text=${text}`;

  const response = await axios.post(url);

  return response.data;
};

export default sendMessage;
