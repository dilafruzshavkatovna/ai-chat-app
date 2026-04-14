# AI Chat App

Bu dastur kompyuteringizda AI bilan suhbatlashish imkoniyatini beradi.

## Qanday qilib o‘z kompyuteringizda ishga tushirasiz?

### 1. Groq API kalitini oling
- Brauzeringizni ochib, bu erga kiring: https://console.groq.com/
- Ro‘yxatdan o‘ting (yangi hisob yarating).
- API kalit (maxfiy kod) yarating va uni ko‘chirib oling.

### 2. Backend qismini ishga tushiring (server)

Kompyuteringizda terminal (buyruq oynasi) oching va quyidagi buyruqlarni birin-ketin yozing:

```bash
cd backend                # backend papkasiga o‘tish
npm install               # kerakli qo‘shimcha dasturlarni o‘rnatish
cp .env.example .env      # .env faylini yaratish
```
## Endi .env faylini bloknot bilan oching va ichiga shuni yozing:

GROQ_API_KEY=gsk_sizning_kalitingiz
(gsk_sizning_kalitingiz o‘rniga o‘zingizning haqiqiy kalitingizni qo‘ying)

Keyin serverni ishga tushiring:

```bash
node server.js
```
Terminalda shunday xabar chiqishi kerak: 'Server ishga tushdi: http://localhost:3000'

### 3. Endi Frontend qismini oching
frontend papkasidagi index.html faylini ikki marta bosing. U brauzeringizda ochiladi.

Endi siz chat oynasiga matn yozib, AI dan javob olishingiz mumkin.

### Eslatma: Server ishlamay turib, chat ishlamaydi. Avval serverni ishga tushirishingiz shart.

## Dasturda nima ishlatilgan?
Frontend – oddiy HTML, CSS, JavaScript (hech qanday qo‘shimcha kerak emas)

Backend – Node.js va Express.js

AI – Groq API (model nomi: moonshotai/kimi-k2-instruct-0905) bu Apreldagi oxirgi model)

Xavfsizlik – API kaliti .env faylida saqlanadi va GitHub ga yuklanmaydi

## Agar muammo bo‘lsa?
Terminalda qizil rangli xatolarni o‘qing. Ular nima noto‘g‘ri ekanligini tushuntiradi.

Groq API kaliti to‘g‘riligini tekshiring.

Server ishlayotganiga ishonch hosil qiling (terminalda node server.js yozilgan bo‘lishi kerak).













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
