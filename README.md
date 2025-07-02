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


react fibre, virtual DOM, diff algo, reconscilation, why we use keys, we dont use index key , react.fragment,map function

why local/state variable is needed in react?
microservices architecture, 
 shimmer effect
conditional render
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


 -->


