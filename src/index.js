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

//Object 

const books = [
  {id: 1,
    img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ducimus quibusdam labore quasi tenet"
  }
  ,
  {id: 2,
    img: "https://m.media-amazon.com/images/I/61aCVDVZPzL._SX484_BO1,204,203,200_.jpg",
    title: "How to Catch a Turkey",
    author: "Adam Wallace",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ducimus quibusdam labore quasi tenet"
  },
  {id: 3,
    img: "https://m.media-amazon.com/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg",
    title: "It Starts with Us",
    author: "Colleen Hoover",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ducimus quibusdam labore quasi tenet"
  }
  ,
  {id: 4,
    img: "https://m.media-amazon.com/images/I/51ECRZXoGyL._SX327_BO1,204,203,200_.jpg",
    title: "Fairy Tale",
    author: "Stephen King",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ducimus quibusdam labore quasi tenet"
  },
  {id: 5,
    img: "https://m.media-amazon.com/images/I/41mBCtaJ1XL._SX320_BO1,204,203,200_.jpg",
    title: "Ugly Love",
    author: "Colleen Hoover",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ducimus quibusdam labore quasi tenet"
  },
  {id: 6,
    img: "https://m.media-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg",
    title: "Reminders of Him",
    author: "Colleen Hoover",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ducimus quibusdam labore quasi tenet"
  }
]
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

const Book = ({ img, title, author, description }) => {
  //attribute, event handler 
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello");
  }
  return (
    <article className="book">
      <img style={{ width: "45%", height: "160px" }}
        src={img}
        alt="" />
      <h1 onClick={clickHandler}>{title}</h1>
      <h4>{author}</h4>
      <p>{description}</p>
      {/* {children} */}
    </article>

  );
}



// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "Helllo World"));
// }

ReactDom.render(<BookList />, document.getElementById('root'));

