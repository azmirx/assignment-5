# Dev Stack Builder
<img width="1904" height="909" alt="Screenshot_28" src="https://github.com/user-attachments/assets/ce9f2dbe-5397-4f86-8831-f05aedd838eb" />

Dev Stack Builder is a responsive React application that helps developers explore different technologies and build their preferred development stack. Users can browse technologies, add them to their stack, remove individual items, or clear the entire stack.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Toastify
- JSON
- Vite

## Features

1. **Explore Technologies**  
   Browse frontend, backend, database, language, styling, and DevOps technologies with useful information such as rating, difficulty, category, and badge.

2. **Build Your Own Stack**  
   Add technologies to the "Your Stack" section, prevent duplicate selections, remove individual technologies, or remove all selected technologies at once.

3. **Responsive and Interactive UI**  
   The website is fully responsive for mobile, tablet, and desktop devices and includes toast notifications and a loading state.

---

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to create and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and update data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores data that can change while the application is running. I used it to store the technologies, loading state, selected technologies, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch the technology data from the local JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and update the correct item efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. I used it in the "Your Stack" section to show an empty message when no technology is selected and selected items when technologies are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back by calling a function that was passed from the parent as a prop.


---

## 📦 Dependencies

This project uses the following main dependencies:

- React
- React DOM
- React Toastify
- Tailwind CSS
- Vite

---

## ⚙️ Run Locally

Follow these steps to run the project on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/azmirx/assignment-5.git

```

2. Go to the project directory:

```bash
cd assignment-5
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in your terminal.

---

## 🔗 Links

- **Live Site:** https://assignment-5-azmir1.vercel.app
- **GitHub Repository:** https://github.com/azmirx/assignment-5
