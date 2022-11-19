import React from "react";
import ReactDom from 'react-dom';

//CSS
import './index.css'
import {books} from "./books"
import Book from "./Book"

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

//Global Component

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        );

      })}

      {/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ducimus quibusdam labore quasi tenetur repellat
        </p>
      </Book> */}
    </section>
  );
}

// Props

// const Book = (props) => {
//   const { img, title, author, description } = props.book
//   return (
//     <article className="book">
//       <img style={{ width: "45%", height: "160px" }}
//         src={img}
//         alt="" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <p>{description}</p>
//       {/* {children} */}
//     </article>

//   );
// }





// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "Helllo World"));
// }

ReactDom.render(<BookList />, document.getElementById('root'));

