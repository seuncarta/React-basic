import React from 'react'

const Book = ({ img, title, author, description }) => {
    //attribute, event handler 
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert("Hello");
    }
    return (
        <article className="book">
            <img onMouseOver={() => {
                console.log(title)
            }} style={{ width: "45%", height: "160px" }}
                src={img}
                alt="" />
            <h1 onClick={clickHandler}>{title}</h1>
            <h4>{author}</h4>
            <p>{description}</p>
        </article>

    );
}

export default Book
