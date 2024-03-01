## The Bookish Retreat

You can find deplyed project on this link. [The Bookish Retreat](bookstore-app-tau.vercel.app)

[Github Repo for Frontend App.](https://github.com/MajkoDev/bookstore-client)
- vite as react option
- designed with tailwind css, shadcn 

[Github Repo for Deployed Backend.](https://github.com/MajkoDev/bookstore-server)
- strapi as headless cms
- deployed on render
- supabase as databate

I am still writing documentation and also collecting my notes from developing this project. I am going to publish it in couple of days, with main links and resources that I have eihter used or were useful during my work.


## Project Description.

**Desing and Styling**
- *in process of writing*

**Shopping Cart**
- for shopping cart i am using react [context](frontend/src/context/index.jsx) 
- i also added [custom hook](frontend/src/hooks/useLocalStorage.jsx) that stores local data, so data persist even after the page is refreshed
- in hindsight, i could have use zustand or redux toolkit

**Headless Cms**
- *in process of writing*



## Resources.

### Documentations.

[Strapi Rest Api](https://docs.strapi.io/dev-docs/api/rest)
- REST API: Population & Field Selection
- REST API: Filtering, Locale, and Publication State
- REST API: Sort & Pagination

[Stripe-hosted Checkout](https://docs.stripe.com/checkout/quickstart)

### Youtube Links.

[Complete E-Commerce App with React, Strapi, Stripe](https://www.youtube.com/watch?v=BCkWFblNLKU&t=267s)
- quite good tutorial for showing how to integrate stripe checkout session in strapi backend server

[How to Deploy Strapi With Supabase To Render and Netlify?](https://www.youtube.com/watch?v=yYumQlLZ8mM)
- important tutorial showing how to connect strapi with supabase for database and render for deployment
- making it possible to host strapi application for free