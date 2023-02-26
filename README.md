<div id="top"></div>
<div align="center">
<h3 align="center">Cliffcrafts</h3>

  <p align="center">
    Full Stack E-Commerce website built with React and Typescript. Firebase cloud functions using Express.js to provide API Requests with stripe.
    <br />
    <br />
    <a href="https://cliffcrafts.com/">View Live Site</a>
    ·
    <a href="https://github.com/Laurenz-Guevara/cliff-crafts/issues">Report Bug</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
[![Product Name Screen Shot][product-screenshot]](https://www.laurenzguevara.com/)

## Additional Images

<p align="center">
  <img src="https://user-images.githubusercontent.com/58118627/221344176-2f128f00-b9ed-4820-9a76-0f068e42560c.png" width="32%" /> 
  <img src="https://user-images.githubusercontent.com/58118627/221344157-566dfbda-302f-4a04-841a-c45c649f64c3.png" width="32%" />
  <img src="https://user-images.githubusercontent.com/58118627/221344204-f47df456-ac05-45be-9243-be113aaa1418.png" width="32%" />
</p>

## Stripe Payment

<p align="center">
  <img src="https://user-images.githubusercontent.com/58118627/221344292-ea156841-7e33-4229-b6d5-03897656d4e1.png" width="49%" /> 
  <img src="https://user-images.githubusercontent.com/58118627/221344333-101b6fb3-902c-4606-a62b-b92411355b1d.png" width="49%" />
</p>


<p align="right">(<a href="#top">back to top</a>)</p>

### Built Using

* [Vite](https://vitejs.dev/)
* [Sass](https://sass-lang.com/)
* [Redux](https://redux.js.org/)
* [Firebase / Cloud Functions](https://firebase.google.com/)
* [Stripe](https://stripe.com/docs)
* [Sanity CMS](https://www.sanity.io/)

<!-- GETTING STARTED -->
## Getting Started

If you would like to build this app locally for yourself just follow the instructions below.

### Node Version

v18.13.0

### Installation

1. Clone the repo

    ```bash
    git clone https://github.com/Laurenz-Guevara/cliff-crafts.git
    ```

2. Install Packages

    ```bash
    npm install
    ```
    
3. Run a Build

    ```bash
    npm run build
    ```

4. Start the App

    ```bash
    npm run dev
    ```

### Deployment

1. Clone the repo

    ```bash
    npm run build
    ```

2. Install Packages

    ```bash
    firebase deploy
    ```

<!-- CONTACT -->
## Contact

Laurenz Guevara - laurenzguevara@outlook.com
LinkedIn - https://www.linkedin.com/in/laurenzguevara/

<p align="right">(<a href="#top">back to top</a>)</p>

[product-screenshot]:https://user-images.githubusercontent.com/58118627/221344074-731bd10c-55d6-4bcd-b2b3-4e4c2a6e044d.png

### ENV Files - These are not real keys

## Root of Directory
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51MU...UQuG

STRIPE_SECRET_KEY=sk_test_25AB...FEa

STRIPE_WEBHOOK_SECRET=whsec_123456

Set this environment variable to support webhooks — https://stripe.com/docs/webhooks/signatures

Root of Functions Folder 

STRIPE_SECRET=sk_test_25AB...FEa

WEBAPP_URL="https://www.cliffcrafts.com"

