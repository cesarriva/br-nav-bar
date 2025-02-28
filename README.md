# Using Navbar Component

You need to install a couple of dependencies first, run on your terminal

```
npm install tailwindcss @tailwindcss/postcss postcss clsx tailwind-merge @radix-ui/react-tooltip
```

Then:

- Copy the folders `icons`, `Navbar` with all its contents to your src folder.
- Copy the `Tooltip.tsx` file to your src folder.
- Please keep the copied folders and files in the same relative positions they current are, otherwise you will have to change the imports.
- Import the `<Navbar />` component where you want to use it like this: `import Navbar from "./Navbar/Navbar";`
- Then just render it in your JSX.
- You may have to wrap the navbar with another div element and position the wrapper in a way it stays to the left of your main content (fixed at the left side of the screen).
- If you want to update any url links or tooltip texts, just open the `<Navbar />` component, find the proper menu item, as change its props accordingly.

## Setting up TailwindsCSS

In order to make the styles recognized by the browser, you will need to configure TailwindCSS in your project.

Follow the steps bellow:

1. Install Tailwind CSS and its dependencies (mentioned in the npm command above)
2. Create a postcss.config.mjs file in the root of your project (not inside the src folder, but as a sibling to the src folder). Add the following content on it:

```
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

3. Then, in your App.css file (or any css file you have being imported in your root component), paste exactly this.

````
@import "tailwindcss";

@theme {
  --color-navbar-default: #f2f4f8;
  --color-navbar-item: #dde1e6;
}

.menu-active {
  @apply bg-inherit [&>svg]:stroke-indigo-600;
}

.menu-active + a {
  @apply rounded-tr-2xl;
}

a:has(+ .menu-active) {
  @apply rounded-br-2xl;
}```
````
