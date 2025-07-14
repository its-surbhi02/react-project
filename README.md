<!-- /**
 *
 * benefits of parcel
 *
 * Creating a server
 * HMR - hot model replacement - it reload automatically
 * File Watcher Algorithm - which is written in C++ , Monitoring the file system for a given filepath
 * Bundling
 * Minify
 * Clearing our code- by removing console log.
 * Dev and Production Build
 * Super fast building algorithm
 * Image Optimization
 * Catching While Development - a built-in feature that stores and reuses data to improve performance
 * Compression
 * compatble with older version of browser
 * HTTPS on dev
 * Manage PORT Number
 * Consistent Hashing Algorithms
 * zero config
 * Tree Shaking- Removing un-wanted code
 * Transitive dependencies- a functional dependency pattern where the value of one attribute is determined by another attribute, which in turn is determined by a third attribute.
 */





<!-- const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1"
);
 React.createElement => Object => HTML(DOM) -->

 <!-- const heading2 = (
  <h1 id="title" key="h3">
    Namaste react from JSX
  </h1>
);
const Title = () => (
    <h1 id="title" key="h3">
      that's how we render functions
    </h1>
  ); -->

  <!-- JSX- jsx is a html like syntax but it is not html inside javascript
JSX => React.createElement => Object => HTML(DOM)
and babel is converting jsx into reactelement and so on.

React Component
types:-  Functional(new way of writing code) and class based component(old way of writing code)
any compoenent name start with capital letter- convention -->

<!-- const HeaderComponent = () => {
  return (
    <div>
        {heading} 
        <Title/>
      <h1>Namaste react Functional Component</h1>
      <h2>This is H2 tag</h2>
    </div>
  );
   root.render(<HeaderComponent />);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
 

 ****we are using config driven UI - Config-driven UI is a design pattern where the structure and behaviour of the user interface are defined using configuration files rather than hard-coded in the application. These configuration files are typically in formats like JSON or YAML. By separating the UI logic from the code, developers can easily modify the UI without changing the underlying codebase.

. React Fiber
React Fiber is the new architecture (introduced in React 16) for the React rendering engine.
React Fiber helps React do two major things: Break work into chunks and pause work in between (non-blocking rendering).Handle updates in priority order (like animations first, background updates later)

Diff Algorithm
It’s the process React uses to compare the old virtual DOM with the new virtual DOM.
It helps React know exactly what changed and where, so it only updates the minimum required parts of the real DOM.

Reconciliation
It’s the overall process React uses to update the UI when your component’s state or props change.
Creating a new virtual DOM, Using the diff algorithm, Updating the real DOM

Keys help React identify which items changed, added, or removed.
If you use the array index as a key, and the list changes (like adding/removing items), React may confuse the items, leading to bugs.

React.Fragment
It lets you return multiple elements from a component without adding extra divs.
It keeps your DOM clean, without unnecessary wrappers.
 
 What is a state variable?
A state variable is a piece of data that your component remembers between renders.
Because React components re-render when data (state) changes, and you need a way to store and manage dynamic data.
Without state, your component would be static.
You use state when something changes on user action, like: Typing in a form, Clicking a button

Microservices Architecture- Microservices architecture is a way of building an application by breaking it into small, independent services.
Each microservice:
Does one job (e.g., user service, product service)
Runs independently
Has its own database
Can be deployed separately
Scalability – You can scale only the needed service.
Flexibility – Different teams can use different languages.
Faster development – Teams can work independently.
Isolation – One service’s crash doesn’t crash the entire app.

** Conditional Rendering in React- Conditional rendering means showing different UI elements based on a condition (like an if statement for your JSX).

react router dom :- useRouteError, Link, routerprovider, children, path, errorElement, outlet, useparams, createBrowerRouter,

class based component :- lifecyce- first constructor is called then the render() method is called then the componentDidMount function is called , the best place to make an API call in class based component is in componentDidMount() bcoz first the component is rendered then we will update the page by making an api call. 
 we use useState hook in functional components but in class bades component we use constructor. and to set the function we use this.setState method   
 use of super(props)

class based component- not functional component
react life cycle:- two phase
                  1. render phase - it include constructor and render() -> this is fastest so, first constructor is called then render if they are having children then for all the children render phase will called then the commit phase is called in the sequence 
                  2. commit phase - it is that phase where react actually modifying(updates) the DOM
                  firstly, react done the render phase.

 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
      *  why we should unmount the function? 

- Custom Hooks
- Modularity in Code
- Modular Bundling
- Code Splitting/ Lazy Loading/ Chunking/ Dynamic Bundling / On Demand Loading / Dynamic Import 

Pros of using tailwind CSS:
Rapid Prototyping 
Consistent Design System 
Responsive Design
Reduced Context Switching
Customization
Performance
Developer Experience

Cons of using tailwind CSS:
Verbose HTML:
The extensive use of utility classes can lead to longer HTML files, potentially making them harder to read.
Learning Curve:
Beginners may find the utility-first approach overwhelming, and the need to learn Tailwind's class names can be a barrier to entry.
Tight Coupling:
Projects become heavily reliant on Tailwind, making it difficult to switch to another CSS framework later.
Code Duplication:
The ease of copying and pasting components can lead to code duplication if not managed properly through component extraction.
Initial Setup:
Setting up Tailwind can be more complex compared to simpler CSS frameworks.
 -->
 


