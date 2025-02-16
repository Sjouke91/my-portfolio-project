# Original Assignment

Your assignment is to create a portfolio website with an admin panel for content management using Next.js. This project will focus on showcasing your work in a visually pleasing way while allowing you to easily update and manage your portfolio content.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sjouke91/my-portfolio-project.git
cd my-portfolio-project
```

## 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

## 3️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The development server will start at **[http://localhost:3000](http://localhost:3000)**.

## 🧪 Run Tests

```bash
npm run test
# or
yarn test
```

---

# Development Workflow

## 📌 What Was the Plan?

Before I began, I created a project overview and a to-do list with a rough scope:

- **Create design in Figma (Mobile first)** – 0.5 hrs
- **Decide how to utilize Next.js rendering strategies** (SSR, CSR, SSG) – 0.5 hrs
- **Set up Next.js 15 repo with basic routing** – 1 hr
- **Research authentication + best practices** – 1 hr
- **Implement authentication** – 1 hr
- **Implement Styled Components** – 1 hr
- **Create page layouts and component structure** – 1.5 hrs
- **Add testing** – 1 hr
- **Refactor & cleanup** – 0.5 hrs

Now, a project is not a project if it does not go sideways. I had some difficulty setting up Emotion with the SSR strategy of Next.js. I feel like Next.js 15 and Emotion/Styled Components are not a happy marriage. I would rather use something like Sass and BEM class names, but that might be personal preference.

Since I overspent time getting Next.js working with Styled Components, I did not have enough time to implement extensive testing. Thorough testing is not something I have done a lot in my career, so in order to do it right, I would have needed to spend more time.

---

## ⏭️ What’s Next?

Since this had to be done in 8 hours, I left some rough edges in the codebase. If I had 8 more hours, I would do the following:

- Spend more time designing the website (mobile + desktop).
- Implement the design in Styled Components, properly structuring components for reusability.
- Find a proper mock API service and set up REST routes for data handling.
- Finalize the CRUD actions with proper error handling.
- Research authentication further and possibly use an alternative like NextAuth.
- Improve testing—I was planning on implementing Cypress, as it feels like a more holistic way to test the full user flow of the app.

---

## ⚡ Next.js Features

This project leverages Next.js rendering strategies for better performance. My rule with the latest versions of Next.js is to stick with SSR when possible. However, when components need to become interactive or use hooks, switching to CSR is a valid approach. Since Styled Components also use hooks, it is important to move component styling outside of server-side components.

For my project detail pages, I utilized the `getStaticParams` method, allowing pages to be built at build time (SSG). Since the content does not change often, this is the most performance-efficient solution. However, it is important to revalidate routes whenever changes occur.

---

## 📬 Contact

Have any questions or suggestions? Reach out!

**GitHub**: [Sjouke91](https://github.com/Sjouke91)  
**Email**: s.bosma1991@gmail.com
