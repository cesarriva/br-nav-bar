# Using Navbar Component

You need to install a couple of dependencies first, run on your terminal

```
npm install tailwindcss @tailwindcss/postcss postcss clsx tailwind-merge @radix-ui/react-tooltip
```

Then:

- Copy the folders `icons` and `Navbar` with all its contents to your the source folder of your app.
- Import the `<Navbar />` component where you want to use it like this: `import Navbar from "./Navbar/Navbar";`
- Then just render it in your JSX.
- You may have to wrap the navbar with another div element and position the wrapper in a way it stays to the left of your main content (fixed at the left side of the screen).
- If you want to update any url links or tooltip texts, just open the `<Navbar />` component, find the proper menu item, as change its props accordingly.
