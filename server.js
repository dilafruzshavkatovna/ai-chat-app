// ========================================
// AI Chat App - Backend Server
// ========================================

// 1. Kerakli kutubxonalarni yuklash
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // .env faylidan o'zgaruvchilarni yuklaydi

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Middleware - so'rovlarni qayta ishlash uchun
app.use(cors()); // Frontend boshqa portdan kelgani uchun ruxsat beramiz
app.use(express.json()); // JSON formatdagi so'rovlarni o'qish uchun

// 3. Asosiy route - frontend shu manzilga so'rov yuboradi
app.post("/api/chat", async (req, res) => {
  try {
    // Frontenddan kelgan xabarni olish
    const { message } = req.body;

    // Xabar borligini tekshirish
    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Xabar bo'sh bo'lmasligi kerak" });
    }

    // API key borligini tekshirish
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "API kalit topilmadi. .env faylini tekshiring.",
      });
    }

    // 4. Groq API ga so'rov yuborish
    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`, // API key shu yerda ishlatiladi
        },
        body: JSON.stringify({
          model: "moonshotai/kimi-k2-instruct-0905", // 
          messages: [
            {
              role: "system",
              content:
                "Siz foydali AI yordamchisisiz. Foydalanuvchilarga qisqa va aniq javoblar bering.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          max_tokens: 1024,
          temperature: 0.7,
        }),
      }
    );

    // 5. Groq javobini tekshirish
    if (!groqResponse.ok) {
      const errorData = await groqResponse.json();
      console.error("Groq API xatosi:", errorData);
      return res.status(groqResponse.status).json({
        error: "AI xizmati bilan bog'liq xato yuz berdi",
      });
    }

    const data = await groqResponse.json();

    // 6. AI javobini frontendga qaytarish
    const aiMessage = data.choices[0].message.content;
    res.json({ reply: aiMessage });
  } catch (error) {
    // Kutilmagan xatolarni ushlash
    console.error("Server xatosi:", error.message);
    res.status(500).json({ error: "Server xatosi: " + error.message });
  }
});

// 7. Server ishga tushirish
app.listen(PORT, () => {
  console.log(`✅ Server ishga tushdi: http://localhost:${PORT}`);
  console.log(`📡 Chat endpoint: http://localhost:${PORT}/api/chat`);
});
