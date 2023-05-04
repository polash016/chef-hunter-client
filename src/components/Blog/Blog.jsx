/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Blog = () => {
  return (
    <div className="text-center">
      <div>
        <h2>Differences Between Uncontrolled and Controlled components</h2>
        <p>
          The main difference between controlled and uncontrolled components is
          the way they handle state management and updates. Controlled
          components rely on React to manage their state, while uncontrolled
          components manage their own state internally through the browser DOM.
          Controlled components are typically used for more complex forms that
          require validation or dynamic updates, while uncontrolled components
          are useful for simpler forms or when integrating with non-React code.
          The value of controlled component is always controlled by the parent
          component and passed as props to the child component.
        </p>
      </div>
      <div>
        <h2>How to validate React props using PropTypes</h2>
        <p>
          In React, We can use PropTypes to validate the props passed to a
          component. PropTypes is a built-in feature of React that allows us to
          define the data types and other requirements for the props that a
          component should receive. This helps ensure that the component
          receives the correct props and makes it easier to debug errors when
          props are passed incorrectly. PropTypes are only checked in
          development mode, so it's important to test our components in
          development mode to catch any prop type errors. Also, PropTypes is not
          included in React 17 by default, so we will need to install and import
          it separately.
        </p>
      </div>
      <div>
        <h2>Difference between nodejs and express js</h2>
        <p>
          Node.js and Express.js are both server-side JavaScript frameworks that
          allow developers to build web applications using JavaScript. Node.js
          is a runtime environment for executing JavaScript code, while
          Express.js is a web application framework built on top of Node.js.
          Node.js provides low-level APIs for building applications, while
          Express.js provides higher-level abstractions and simplifies common
          web development tasks. Express.js is often used with Node.js to build
          web applications quickly and easily, while Node.js is ideal for
          building high-performance applications with minimal overhead. Node.js
          allows developers to use JavaScript to build server-side applications,
          such as web servers and command-line tools. Express.js provides a
          higher-level abstraction over Node.js, making it easier to build web
          applications with features such as routing, middleware, and templates.
        </p>
      </div>
      <div>
        <h2>What is a custom hook, and why will you create a custom hook?</h2>
        <p>
          A Custom Hook in React is function that allows us to extract and reuse
          component logic. It helps us to share function between components
          without repeating code. It makes our code more efficient and also
          easier to maintain. Custom hooks are created when you need to share
          logic that cannot be easily shared between components using
          traditional methods such as props or context. For example, if you have
          multiple components that need to access the same API endpoint and
          perform the same data fetching logic, you could create a custom hook
          to handle the API calls and data fetching logic. Then, you can use
          that custom hook in all the components that need to perform data
          fetching, without repeating the same code over and over again.
        </p>
      </div>
    </div>
  );
};

export default Blog;
