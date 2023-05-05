/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import { Button } from "react-bootstrap";

const PdfGenerator = () => {
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      fontSize: 12,
      paddingTop: 35,
      paddingLeft: 35,
      paddingRight: 35,
      paddingBottom: 40,
    },
    heading: {
      fontSize: 16,
      marginBottom: 10,
      fontWeight: "bold",
    },
    content: {
      fontSize: 8,
      marginBottom: 6,
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>
          Differences Between Uncontrolled and Controlled Components
        </Text>
        <Text style={styles.content}>
          The main difference between controlled and uncontrolled components is
          the way they handle state management and updates. Controlled
          components have their state managed by React and require explicit
          handling of user input through event handlers, while uncontrolled
          components allow the form data to be handled by the DOM itself.
        </Text>
        <Text style={styles.heading}>
          How to validate React props using PropTypes
        </Text>
        <Text style={styles.content}>
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
        </Text>
        <Text style={styles.heading}>
          Difference between nodejs and express js
        </Text>
        <Text style={styles.content}>
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
        </Text>
        <Text style={styles.heading}>
          What is a custom hook, and why will you create a custom hook?
        </Text>
        <Text style={styles.content}>
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
        </Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
        {({ loading }) =>
          loading ? "Loading document..." : <Button className="btn-danger">Download Pdf</Button>
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PdfGenerator;
