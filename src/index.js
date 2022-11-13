import React from "react";
import ReactDom from 'react-dom';

//CSS
import './index.css'

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

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>

  );
}
const Image = () => <img src="https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" alt="" srcset="" />
const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>By Amelia Hepworth</h4>;


// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "Helllo World"));
// }

ReactDom.render(<BookList />, document.getElementById('root'));

