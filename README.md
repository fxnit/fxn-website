# FXN IT Website

A modern, professional website for FXN IT showcasing the WeGot service packages and brand identity.

## About

FXN IT (fxnit) is a technology consulting company that delivers Infrastructure, DevOps, Cloud, and AI-ready systems with productized service packages called **WeGot**.

**Tagline:** *Fix IT Right. Build IT Bright.*

## Features

- **Modern Design**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Brand Identity**: Reflects FXN IT's professional and innovative positioning
- **WeGot Services**: Showcases all 6 service packages with detailed descriptions
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Built with accessibility best practices
- **Docker Ready**: Simple containerization for development

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)
- **Containerization**: Docker for development
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized development)

### Local Development

1. Clone the repository:
```bash
git clone git@github.com:fxnit/fxn-website.git
cd fxn-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Development

### Quick Start with Docker

```bash
# Build and run the development container
docker build -t fxn-website .
docker run -p 3000:3000 -v $(pwd):/app fxn-website
```

### Docker Commands

```bash
# Build the image
docker build -t fxn-website .

# Run the container
docker run -p 3000:3000 fxn-website

# Run with volume mounting for live reload
docker run -p 3000:3000 -v $(pwd):/app fxn-website
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata and fonts
│   ├── page.tsx        # Homepage with WeGot services
│   ├── globals.css     # Global styles and brand colors
│   ├── favicon.ico     # FXN IT favicon
│   └── components/     # Reusable components
│       └── EnvBanner.tsx # Environment indicator banner
├── components/         # Additional components (future)
└── lib/               # Utility functions (future)

# Docker files
├── Dockerfile          # Development container
└── .dockerignore      # Docker build optimization
```

## WeGot Services

The website showcases all 6 WeGot service packages:

1. **InfraFix** - Kubernetes, Monitoring, DevOps Pipelines
2. **AI-Ready Infra** - GPU Clusters, MLOps, Data Pipelines
3. **CloudFix** - Azure, AWS, GCP Infrastructure Consulting
4. **System Design** - Enterprise Architecture, Microservices, Cloud-native patterns
5. **Infrastructure Analysis** - Health Checks, Performance Tuning, Cost Optimization
6. **DevOps & Monitoring** - CI/CD Automation, Observability, Incident Response

## Brand Colors

- **Primary**: Blue (#2563eb) - Trust, Technology
- **Secondary**: Green (#10b981) - Growth, Success
- **Accent**: Orange (#f59e0b) - Innovation, Energy
- **Dark**: Dark Blue (#0f172a) - Professional
- **Light**: Light Gray (#f8fafc) - Clean

## Development Workflow

### 🌿 **Branch Strategy:**

- **`main`** - Production ready code (stable)
- **`dev`** - Development and testing (triggers GitHub Pages)

### 🚀 **Dev Branch Workflow:**

```bash
# 1. Create and switch to dev branch
git checkout -b dev

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push to dev branch (triggers GitHub Pages)
git push origin dev

# 4. Test on GitHub Pages
# → https://username.github.io/fxnit-test
```

### 🧪 **Test Environment:**

- **URL**: `https://username.github.io/fxnit-test`
- **Trigger**: `dev` branch'e push
- **Purpose**: Development testing and team collaboration
- **Auto-deploy**: GitHub Actions ile otomatik

### 📍 **Environment URLs:**

- **Development**: `http://localhost:3000`
- **Test**: `https://username.github.io/fxnit-test` (dev branch)
- **Production**: `https://fxnit.com` (main branch, fxn-setup ile)

## Deployment

### 🧪 **GitHub Pages = Dev/Test Environment**

Bu proje GitHub Pages'de **dev/test ortamı** olarak kullanılıyor:

- ✅ **Hızlı testing** - Dev branch'e push'ta otomatik deploy
- ✅ **Team collaboration** - Herkes aynı test ortamını görebilir
- ✅ **SEO test** - Gerçek web ortamında test
- ✅ **Cost-effective** - Ücretsiz hosting
- 🚫 **Production değil** - Sadece test için

#### Dev/Test Deploy:

```bash
# Dev branch'e push (otomatik deploy)
git push origin dev

# Test URL: https://username.github.io/fxnit-test
```

#### Production:

Production deployment `fxn-setup` projesi ile ayrıca yapılacak.

### Diğer Platformlar

- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **Docker**: Development environment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2024 FXN IT. All rights reserved.

---

**Born in Dubai, built for global reach.**
