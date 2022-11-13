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

const firstBook = {
  img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth"
}

const secondBook = {
  img: "https://m.media-amazon.com/images/I/61aCVDVZPzL._SX484_BO1,204,203,200_.jpg",
  title: "How to Catch a Turkey",
  author: "Adam Wallace"
}

const thirdBook = {
  img: "https://m.media-amazon.com/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg",
  title: "It Starts with Us",
  author: "Colleen Hoover"
}

const fourthBook = {
  img: "https://m.media-amazon.com/images/I/51ECRZXoGyL._SX327_BO1,204,203,200_.jpg",
  title: "Fairy Tale",
  author: "Stephen King"
}

const fifthBook = {
  img: "https://m.media-amazon.com/images/I/41mBCtaJ1XL._SX320_BO1,204,203,200_.jpg",
  title: "Ugly Love",
  author: "Colleen Hoover"
}

const sixthBook = {
  img: "https://m.media-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg",
  title: "Reminders of Him",
  author: "Colleen Hoover"
}

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />

      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />

      <Book
        img={fourthBook.img}
        title={fourthBook.title}
        author={fourthBook.author}
      />

      <Book
        img={fifthBook.img}
        title={fifthBook.title}
        author={fifthBook.author}
      />

      <Book
        img={sixthBook.img}
        title={sixthBook.title}
        author={sixthBook.author}
      />
    </section>
  );
}


const Book = (madrid) => {
  return (
    <article className="book">
      <img style={{ width: "45%", height:"160px" }}
        src={madrid.img}
        alt="" />
      <h1>{madrid.title}</h1>
      <h4>{madrid.author}</h4>
    </article>

  );
}



// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "Helllo World"));
// }

ReactDom.render(<BookList />, document.getElementById('root'));

