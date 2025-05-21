import { messageElement } from "./elements.js";

const setMessage = (message) => {
  messageElement.textContent = message ? `* ${message}` : "";
};

export default setMessage;
