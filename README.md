### Cliff Crafts

Tech Stack: React, Typescript, SaSS, Sanity.io (CMS), GROQ, GitHub, Stripe, Express, Firebase Cloud Functions, Firebase Deployment,

### Installation

Node v18.13.0
npm install

### Infomation

Airbnb eslint configuration
Vite, SaSS, Firebase, Sanity, Typescript

### Libaries

npm i react-router-dom
npm install --save-dev sass

### Run project

npm run dev

### Deploy Project

npm run build
firebase deploy

### Firebase Cloud Functions & Stripe

Express API that handles Stripe Payments
Needs CORS, EXPRESS & STRIPE

Also option to use Docker and host API off cloud functions on a cloud service like "gcloud"

### ENV Files - These are not real keys

Root of Directory {
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51MU...UQuG
STRIPE_SECRET_KEY=sk_test_25AB...FEa
STRIPE_WEBHOOK_SECRET=whsec_123456
Set this environment variable to support webhooks — https://stripe.com/docs/webhooks/signatures
}

Root of Functions Folder {
STRIPE_SECRET=sk_test_25AB...FEa
WEBAPP_URL="https://www.cliffcrafts.com"
}
