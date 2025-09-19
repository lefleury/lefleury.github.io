# Le Fleury — Website

Website for the **Le Fleury** restaurant.  
**Live:** https://lefleury.github.io/

[![CI/CD](https://github.com/lefleury/lefleury.github.io/actions/workflows/ci-cd.yml/badge.svg?branch=main)](https://github.com/lefleury/lefleury.github.io/actions/workflows/ci-cd.yml)

Tech stack: **Next.js 15**, **TypeScript**, **Tailwind CSS 4**, **ESLint 9 (flat)**, **Prettier 3**, **Husky + lint-staged**, **Playwright**.  
Deployment: **GitHub Pages** via GitHub Actions (CI/CD).

---

## 1) Prerequisites (install once)

You need **Node.js 22 LTS** via **nvm**.

### macOS (Apple Silicon / Intel)

```bash
# Homebrew (if you don't have it):
#/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install nvm
mkdir -p ~/.nvm
touch ~/.zshrc
grep -q 'NVM_DIR' ~/.zshrc || {
  echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
  echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
}
exec zsh -l

nvm install 22
nvm alias default 22
node -v && npm -v
```

### Ubuntu / Debian

```bash
sudo apt update
sudo apt install -y curl git build-essential

# Install nvm
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install 22
nvm alias default 22
node -v && npm -v
```

_(Recommended editor: VS Code with ESLint, Prettier, Tailwind CSS IntelliSense, Playwright extensions.)_

---

## 2) Project setup (per machine / per clone)

```bash
git clone https://github.com/lefleury/lefleury.github.io.git
cd lefleury.github.io

# Ensure Node 22 (using nvm from step 1)
nvm use 22

# Install dependencies (locked, reproducible)
npm ci

# Install Playwright browsers (first run on a machine)
npx playwright install

# Start dev server
npm run dev
# → http://localhost:3000
```

---

## Scripts

```bash
npm run dev            # start Next dev server
npm run build          # static export → ./out
npm run lint           # ESLint (max-warnings=0)
npm run lint:fix       # ESLint --fix
npm run format         # Prettier write
npm run format:check   # Prettier check
npm run test:e2e       # Playwright tests
npm run test:e2e:ui    # Playwright UI runner
```

### Preview static export (optional)

```bash
npm run build
# Option A (no extra dependencies)
python3 -m http.server -d out 3000
# Option B
# npx serve -s out -l 3000
```
