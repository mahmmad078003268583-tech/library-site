# ملفات الرفع على GitHub

هذا المجلد جاهز للرفع إلى مستودع GitHub لنشر موقع مكتبة السبزواري على GitHub Pages.

## الملفات الموجودة

- `index.html` — صفحة الموقع.
- `manifest.json` — إعدادات PWA/التثبيت.
- `sw.js` — Service Worker للعمل كتطبيق وتخزين مؤقت.
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — أيقونات التطبيق.
- `qr.png`, `QR-المكتبة.png` — باركود واحد لرابط المشاركة.
- `الفهرس الشامل 2026.xlsx` — ملف بيانات الكتب (يستخدمه الموقع على GitHub Pages).
- `رابط-المشاركة.txt` — ضع فيه رابط GitHub Pages النهائي.
- `.github/workflows/pages.yml` — نشر تلقائي إلى GitHub Pages.
- `.gitignore` — تجاهل الملفات غير اللازمة.

## خطوات الرفع والنشر

1. أنشئ مستودع جديد على GitHub (مثلاً `library-site`).
2. ارفع **محتويات هذا المجلد** إلى فرع `main` (ليس المجلد نفسه فقط، بل الملفات داخله).
3. من GitHub: اذهب إلى **Settings > Pages**.
4. في **Build and deployment** اختر **Source: GitHub Actions**.
5. بعد أول رفع، افتح تبويب **Actions** وتأكد أن workflow اسمه "Deploy static site to GitHub Pages" اكتمل بنجاح.
6. سيظهر رابط الموقع، غالباً بهذا الشكل:
   `https://USERNAME.github.io/REPO/`

## ضبط الباركود الواحد بعد ظهور الرابط

1. افتح ملف `رابط-المشاركة.txt`.
2. استبدل الرابط المؤقت بالرابط الحقيقي، مثال:
   `https://USERNAME.github.io/library-site/`
3. ارفع التعديل إلى GitHub.
4. أعِد توليد الباركود لنفس الرابط (يمكن محلياً عبر تشغيل `server.py`، أو توليد QR لنفس الرابط واستبدال `qr.png` و`QR-المكتبة.png`).

## ملاحظات

- هذا المجلد للنشر الثابت على GitHub Pages. ميزات خادم Python مثل تحديث الإكسل من داخل الموقع تعمل عند تشغيل `server.py` محلياً/على سيرفر، وليس على GitHub Pages الثابت.
- زر/نافذة تثبيت التطبيق تعمل بشكل أفضل على HTTPS (GitHub Pages مناسب).
- إذا أردت اختبار التثبيت يدوياً افتح الموقع مع: `?install=1`
