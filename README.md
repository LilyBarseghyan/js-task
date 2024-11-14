# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

[./Screenshot.png]

### Links

- Solution URL: [https://github.com/LilyBarseghyan/js-task]
- Live Site URL: [http://127.0.0.1:5500/index.html]

## My process

### Built with

- Semantic HTML5 for structured content
- CSS custom properties for consistent theming
- Flexbox and CSS Grid for responsive layouts
- Mobile-first design approach
- CSS animations for hover effects and transitions
- Media queries to adapt styles for different screen sizes

### What I learned

This project helped reinforce several key development concepts and techniques, especially around building interactive, responsive interfaces and managing state with JavaScript. Below are some of my major learnings from working through this challenge:

Dynamic Filtering in JavaScript
I created a filtering system that updates job listings dynamically based on user selections. This required understanding JavaScript event handling and managing state. Here’s an example snippet of adding selected filters:

```js
const addFilter = (category) => {
  if (!selectedFilters.includes(category)) {
    selectedFilters.push(category);
    renderJobListings();
  }
};
```

CSS Flexbox Layout
Building a flexible layout with Flexbox allowed me to create a responsive design that works across desktop and mobile. Using CSS Flexbox simplified aligning items within each section.

```css
.details {
  display: flex;
  justify-content: space-between;
}
```

Hover Effects and Transformations
I added hover effects to give the UI a more interactive feel. Using transform: scale() for subtle zoom and shadow effects made the listings feel more responsive to user actions.

```css
.start:hover {
  background-color: #f4f4f4;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  transform: scale(1.02);
}
```

Responsive Design with Media Queries
Implementing a mobile-first approach, I added media queries to adjust layout and spacing for smaller screens. This helped ensure the design is visually appealing and functional across devices.

```css
@media (max-width: 800px) {
  .info {
    flex-direction: column;
    align-items: flex-start;
  }
}
```
### Continued development

For future projects, I’m excited to dive deeper into advanced HTML, CSS, and JavaScript.
Specifically, I aim to refine my skills in CSS animations and transitions to create more engaging interfaces, improve my understanding of JavaScript for dynamic content updates, and explore responsive design techniques to optimize user experience across devices.
I’m also interested in experimenting with CSS frameworks and JavaScript libraries to streamline my workflow and enhance functionality.

### Useful resources

- W3Schools - HTML and CSS - This site was helpful for understanding the fundamentals of HTML and CSS. It provided clear explanations and examples that I could refer to during development.
- JavaScript.info - An excellent resource for JavaScript, this site covers both basic and advanced topics with detailed explanations and examples. It’s a go-to for learning more about JavaScript features and techniques.
