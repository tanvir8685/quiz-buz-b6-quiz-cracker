import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the purpose of react router? </Accordion.Header>
        <Accordion.Body>
        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does context api work?</Accordion.Header>
        <Accordion.Body>
        The previous version of Context Api was experimental whereas the new version in React 16+ is more stable and efficient. Context API is used to pass global variables anywhere in the code. It helps when there is a need for sharing state between a lot of nested components. It is light in weight and easier to use, to create a context just need to call React.createContext(). No need to install other dependencies or third-party libraries like redux for state management.

It has two properties Provider and Consumer. The Provider acts as a parent it passes the state to its children whereas the Consumer uses the state that has been passed.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is useRef?</Accordion.Header>
        <Accordion.Body>
        The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 

Syntax:

const refContainer = useRef(initialValue);
The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;