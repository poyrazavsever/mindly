# 🧠 Mindly - Kişisel Yapay Zeka Ajan Platformu

Mindly, bireylerin veya işletmelerin kendi yapay zeka ajanlarını kolayca oluşturabildiği, özelleştirebildiği ve günlük işlerinde kullanabildiği bir platformdur. Sürükle-bırak arayüz ile görev zincirleri tanımlayabilir, ajana isim/logo/ses gibi öğeler atayabilir ve gerçek zamanlı konuşmalar gerçekleştirebilirsiniz.

## 🚀 MVP Özellikleri

- Kullanıcı kayıt ve giriş sistemi
- Ajan oluşturma (isim, logo, görevler)
- Görev zinciri: E-posta özetleme, öneri alma vb.
- Basit sohbet arayüzü (GPT-4o bağlantılı)
- Kullanıcı paneli (dashboard)

---

## 🛠️ Teknolojiler

| Alan | Teknoloji |
|------|-----------|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Stil | [Tailwind CSS](https://tailwindcss.com/) |
| Auth | [NextAuth.js](https://next-auth.js.org/) |
| AI | [OpenAI GPT-4o](https://platform.openai.com/) + [LangChain](https://www.langchain.com/) |
| Veritabanı | [Supabase](https://supabase.io/) veya PostgreSQL |
| Backend | Next.js API Routes |
| Deployment | [Vercel](https://vercel.com/) |

---


## Proje Yapısı
/app                # Sayfalar (App Router)
/components         # UI bileşenleri
/api                # API route’lar (örneğin: chat, agents)
/lib                # Yardımcı fonksiyonlar, servis katmanı
/types              # TypeScript tipleri
/public             # Statik dosyalar (logo, ses vb.)
/styles             # Tailwind veya CSS modülleri
