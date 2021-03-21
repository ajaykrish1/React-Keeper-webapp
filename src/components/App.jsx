import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, shownotes] = useState([]);

  function handlenotesubmit(event, note) {
    shownotes(function (prevValue) {
      return [...prevValue, note];
    });

    event.preventDefault();
  }
  function delet(id) {
    shownotes(function (prevValue) {
      return prevValue.filter(function (notes, index) {
        return index !== id;
      });
    });
  }

  function createnote(eachnote, index) {
    return (
      <Note
        key={index}
        id={index}
        title={eachnote.title}
        content={eachnote.content}
        ondel={delet}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onsubmit={handlenotesubmit} />
      {notes.map(createnote)}
      <Footer />
    </div>
  );
}

export default App;
