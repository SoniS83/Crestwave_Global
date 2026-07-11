import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend dev server
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  }),
);

app.use(express.json());

// Log directory setup
const logDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const inquiryLogPath = path.join(logDir, "inquiries.log");

// Setup mock/real nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ethereal.email",
  port: parseInt(process.env.SMTP_PORT) || 587,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

// API endpoint for Contact Form
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Please fill in all required fields (Name, Email, Message).",
    });
  }

  const logEntry = `[${new Date().toISOString()}] CONTACT INQUIRY\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nSubject: ${subject || "N/A"}\nMessage: ${message}\n----------------------------------------\n`;

  // Write to local inquiries log
  fs.appendFileSync(inquiryLogPath, logEntry);
  console.log("New Contact Inquiry Received:\n", logEntry);

  // Email setup
  const mailOptions = {
    from: `"Crestwave Contact Form" <${email}>`,
    to: "contact@crestwaveglobal.com",
    subject: `Crestwave Contact: ${subject || "General Inquiry"}`,
    text: `You received a contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
  };

  try {
    // If SMTP credentials are provided, attempt to send
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    }
    return res.status(200).json({
      success: true,
      message: "Inquiry received and logged successfully.",
    });
  } catch (error) {
    console.error("Error sending mail:", error);
    // Still return true because we logged it locally in inquiries.log
    return res.status(200).json({
      success: true,
      message: "Inquiry received and saved locally (Mail queue delayed).",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend Working",
  });
});

// API endpoint for Request Quote Form
app.post("/api/quote", async (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    products,
    quantity,
    country,
    specifications,
  } = req.body;

  if (!name || !email || !products || !quantity || !country) {
    return res.status(400).json({
      success: false,
      error:
        "Please fill in all required fields (Name, Email, Products, Quantity, Country).",
    });
  }

  const logEntry = `[${new Date().toISOString()}] QUOTE REQUEST\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nProducts: ${products}\nQuantity: ${quantity}\nCountry: ${country}\nSpecs: ${specifications || "N/A"}\n----------------------------------------\n`;

  // Write to local inquiries log
  fs.appendFileSync(inquiryLogPath, logEntry);
  console.log("New Quote Request:\n", logEntry);

  const mailOptions = {
    from: `"Crestwave Quote Request" <${email}>`,
    to: "contact@crestwaveglobal.com",
    subject: `Crestwave B2B Quote Request: ${products}`,
    text: `New B2B Quote Request:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nProducts Interest: ${products}\nQuantity Required: ${quantity}\nDestination Country: ${country}\n\nSpecifications:\n${specifications || "None provided"}`,
  };

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    }
    return res.status(200).json({
      success: true,
      message: "Quote request submitted and logged successfully.",
    });
  } catch (error) {
    console.error("Error sending mail:", error);
    return res.status(200).json({
      success: true,
      message: "Quote request received and saved locally (Mail queue delayed).",
    });
  }
});

// Serve frontend in production (after build)
// const frontendBuildPath = path.join(__dirname, "../dist");
// if (fs.existsSync(frontendBuildPath)) {
//   app.use(express.static(frontendBuildPath));
//   app.get(/.*/, (req, res) => {
//     res.sendFile(path.join(frontendBuildPath, "index.html"));
//   });
// }

if (process.env.NODE_ENV === "production") {
  const frontendBuildPath = path.join(__dirname, "../dist");

  app.use(express.static(frontendBuildPath));

  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(frontendBuildPath, "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Crestwave Global Server is running on port ${PORT}`);
});
