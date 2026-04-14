# AI Chat App

Bu dastur kompyuteringizda AI bilan suhbatlashish imkoniyatini beradi.

## Nima uchun kerak?

- Frontend: oddiy HTML, CSS va JavaScript
- Backend: Node.js va Express
- AI: Groq API

## Kerakli fayllar

- `server.js`
- `package.json`
- `.env.example`
- `public/index.html`
- `public/app.js`
- `public/styles.css`

## O‘rnatish

1. Loyihani kompyuteringizga yuklab oling yoki papkani oching.
2. Terminalni oching va loyiha papkasiga kiring:

```bash
cd ai-chat-app
```

3. Paketlarni o‘rnating:

```bash
npm install
```

4. `.env` faylini yarating:

```bash
copy .env.example .env
```

5. `.env` faylini matn muharririda oching va Groq API kalitini qo‘shing:

```text
GROQ_API_KEY=gsk_sizning_kalitingiz
```

## Serverni ishga tushirish

Terminalda quyidagilarni yozing:

```bash
node server.js
```

Agar hammasi to‘g‘ri bo‘lsa, quyidagi xabar chiqadi:

```text
Server ishga tushdi: http://localhost:3000
```

## Frontendni ochish

Brauzeringizda quyidagi manzilni oching:

```text
http://localhost:3000
```

Endi matn yozib, AI javobini olishingiz mumkin.

## Muammolar

- Agar server ishlamasa, chat ham ishlamaydi.
- `GROQ_API_KEY` topilmasa, `.env` fayli to‘g‘ri joyda ekanini va kalit to‘g‘ri yozilganini tekshiring.
- Agar `Port 3000` band bo‘lsa, `server.js` dagi portni `3001` ga o‘zgartiring.

## Eslatma

API kaliti maxfiy bo‘lib, GitHub yoki boshqa omma uchun ochiq joyda bo‘lmasligi kerak.
