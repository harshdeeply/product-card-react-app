# Product Card React App

This is a simple product card component built with React, Tailwind CSS, and an image preloading technique to ensure smooth hover transitions. The app showcases products with sale badges, color variants, and hover effects to show alternate product images.

## Live Demo

The site is deployed and accessible at:  
[https://harsh-domaine-product-card.netlify.app/](https://harsh-domaine-product-card.netlify.app/)

## Features

- **Sale Badge**: Displays a sale badge on the top-left of the product image when the product is on sale.
- **Hover Effect**: Shows a secondary image of the product when hovering over the product card, without changing the height of the card.
- **Color Variant Selection**: Users can click through color swatches to see the product in different colors.
- **Preloading Images**: The variant images are preloaded to avoid delays when hovering, ensuring smooth transitions.
- **Responsive Design**: The card is responsive and works well across different screen sizes.

## Approach

### **1. React and Tailwind CSS**

I used React for building the component-driven UI and Tailwind CSS for fast and flexible styling. The utility-first approach with Tailwind CSS allowed me to quickly adjust the layout, spacing, and responsive styles.

### **2. Hover Effects with Image Preloading**

The hover effect is implemented such that when the user hovers over the product image, an alternate image appears. To avoid delay during hover, I preload the image using JavaScript. The `Image` object in JavaScript allows me to preload the image before it is displayed, ensuring that the image is already available in the cache when the user hovers over the product.

### **3. State Management with React**

I used React's `useState` hook to manage the product variant and hover states. The `selectedVariant` state holds the currently selected variant, while the `isHovered` state tracks whether the user is hovering over the image. The `useEffect` hook handles image preloading when the hover state is active.

### **4. Conditional Rendering**

The component uses conditional rendering to show the appropriate image based on the hover state and selected variant. When the variant changes, the image is preloaded, and when the hover event occurs, the preloaded image is displayed immediately without fetching it again.

## How to Run Locally

To run this project locally on your machine, follow these steps:

### **1. Clone the Repository**

First, clone the repository to your local machine:

```bash
git clone https://github.com/harshdeeply/product-card-react-app.git
```

### **2. Install Dependencies**

Navigate into the project directory and install the dependencies:

```bash
cd product-card-react-app
npm ci
```

### **3. Start the Development Server**

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

This will start the app at [http://localhost:3000](http://localhost:3000). Open it in your browser to view the product card in action.

### **4. Build the Project**

To create a production-ready build, run:

```bash
npm run build
```

This will generate the `build` directory with optimized assets that you can deploy to a hosting provider.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **JavaScript**: Used for preloading images and handling hover transitions.
- **Netlify**: Deployed the app to Netlify for easy hosting.
