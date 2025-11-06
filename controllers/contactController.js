
import Contact from "../models/contactModel.js";
import { sendContactEmail } from "../services/emailservice.js";



export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 1️⃣ Store in MongoDB
    const newContact = await Contact.create({ name, email, phone, message });

    // 2️⃣ Send Email
    await sendContactEmail(newContact);

    res.status(200).json({ success: true, message: "Query submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
