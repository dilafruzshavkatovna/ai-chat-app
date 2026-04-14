# AI Chat App – Oddiy Chat Dasturi

Bu dastur sizga AI bilan suhbatlashish imkonini beradi. Siz matn yozasiz, AI javob beradi.

##Qanday qilib o‘z kompyuteringizda ishga tushirasiz?

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

## Endi .env faylini bloknot bilan oching va ichiga shuni yozing:

GROQ_API_KEY=gsk_sizning_kalitingiz
(gsk_sizning_kalitingiz o‘rniga o‘zingizning haqiqiy kalitingizni qo‘ying)

Keyin serverni ishga tushiring:

```bash
node server.js
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

