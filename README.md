# Aditya Surwase - Personal Developer Portfolio

A modern, responsive, white/light-themed personal portfolio built for **Aditya Ratnakar Surwase**, Computer Engineering student at Dr. D. Y. Patil College of Engineering and Innovation (Savitribai Phule Pune University).

---

## 🌟 Key Updates & Highlights

- **Crisp Modern White Theme**: Elegant white and cool slate design with high-contrast emerald green (`#059669`) accents and crisp borders. Includes an interactive Dark/Light mode switcher toggle.
- **Personal Photo Added**: Professional portrait integrated into the Hero section and About section.
- **Verified Certificates Added**:
  - 🐍 **Python for Data Science** – NPTEL Online Certification (IIT Madras & Swayam, Govt. of India). Score: **53%**, Roll No: `NPTEL26CS80S463800161`.
  - 💻 **C & C++ Programming** – Imarticus Learning (Skill India & NSDC). Final Grade: **A+**, Certificate ID: `H2MGLKHQ6A6M`.
  - 💼 **Business Communication** – Imarticus Learning (Skill India & NSDC). Final Grade: **A+**, Certificate ID: `NPSZ5U0AAH4W`.
  - 🎓 **Academic Honors** – 8.34 CGPA in B.E. Computer Engineering (SPPU).
- **Downloadable Bundle**: Includes the complete bundle archive `aditya-portfolio.zip` (with all HTML, CSS, JS, vector SVGs, and certificate PDFs).
- **Featured Projects**:
  - 🏎️ **Retro 2D Car Racing Game** (Python, Pygame, OOP)
  - ⌨️ **Typing Speed & Accuracy Tester** (Python, Tkinter GUI)
  - 🛒 **FreshKart Store & Inventory Manager** (Python Data Management)
  - 🤖 **AI Companion Robot & Sensor Prototype** (8051 / ARM / Embedded C)
  - 🍕 **Lovely Bites Food Ordering POS** (Python GUI & Billing)

---

## 📁 File Structure

```text
aditya-portfolio/
├── index.html                   # Main single-page portfolio (White Theme)
├── css/
│   └── style.css               # Clean white design system + dark mode tokens
├── js/
│   └── main.js                 # Theme switcher, typewriter, filters, copy email
├── assets/
│   ├── aditya-profile.jpg      # Your uploaded professional photo
│   ├── certificates/           # Verified PDF certificates
│   │   ├── nptel-python-for-data-science.pdf
│   │   ├── imarticus-c-and-cpp-programming.pdf
│   │   └── imarticus-business-communication.pdf
│   └── projects/               # Vector illustrations for projects
│       ├── retro-car-racing.svg
│       ├── typing-speed-tester.svg
│       ├── freshkart.svg
│       ├── ai-robot.svg
│       └── lovely-bites.svg
├── aditya-portfolio.zip        # Complete downloadable portfolio package
└── README.md                   # Setup, customization & deployment guide
```

---

## 🚀 How to Run & Preview Locally on macOS

### Option 1: Direct Browser Open
Double-click `index.html` in Finder or run:
```bash
open /Users/aditya/.gemini/antigravity/scratch/aditya-portfolio/index.html
```

### Option 2: Local Python Server
```bash
cd /Users/aditya/.gemini/antigravity/scratch/aditya-portfolio
python3 -m http.server 8000
```
Then visit **`http://localhost:8000`** in your browser.

---

## 🌐 Free Deployment to GitHub Pages

1. Create a repository on GitHub named **`AdityaSurwase.github.io`**.
2. Run these commands from your Mac terminal:
   ```bash
   cd /Users/aditya/.gemini/antigravity/scratch/aditya-portfolio
   git init
   git add .
   git commit -m "feat: launch white-theme portfolio with certificates"
   git branch -M main
   git remote add origin https://github.com/AdityaSurwase/AdityaSurwase.github.io.git
   git push -u origin main
   ```
3. Your portfolio will go live automatically at **`https://adityasurwase.github.io`**!
