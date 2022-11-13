import React from "react";
import ReactDom from 'react-dom';

//statelss functional component
//always return JSX

/*
JSX Rules
return single element
div /section / article or fragment
usecamelCase for huml attribute
className instead of class
close every element
formatting

*/

//Nested Components Feature

function Greeting() {
  return (
    <section>
      <div>
        <Person />
        <Message />
        {/* <ul>
          <li>
            <a href="#">Hello Guys</a>
          </li>
          <input type="text" />
        </ul> */}
      </div>;
    </section>
  );
}

const Person = () => <h2>Seun Carta</h2>;
const Message = () => {
  return <p>This is my first component</p>
};


// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "Helllo World"));
// }

ReactDom.render(<Greeting />, document.getElementById('root'));

