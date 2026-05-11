# שלב 1: התקנת תלויות
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# שלב 2: בניית האפליקציה
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


# הגדרת ה-Arguments שמתקבלים מה-CI
ARG NEXT_PUBLIC_API_URL
ARG NEXT_GOOGLE_CLIENT_ID

# הפיכתם למשתני סביבה שזמינים בזמן ה-build של Next.js
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_GOOGLE_CLIENT_ID=$NEXT_GOOGLE_CLIENT_ID


# Next.js דורש בנייה לפני הרצה
RUN npm run build

# שלב 3: הרצה (Production)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# העתקת רק מה שצריך כדי להריץ את השרת
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Next.js רץ כברירת מחדל על פורט 3000
EXPOSE 3000

CMD ["npm", "start"]