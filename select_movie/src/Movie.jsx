import React, { useState } from 'react';



// Je l'ai fait en hooks admirer le travail ! 

const Movie = () => {

  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");

  function submitForm(e) {

    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "	application/json; charset=utf-8 ",
      },
      body: JSON.stringify({ title, comment, poster }),
    };


    const url = "https://post-a-form.herokuapp.com/api/movies/"

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie add is ${res.title}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert('Error on select movie');
      })
  };



  return (
    <div >
      <h1>Saisi d'un film </h1>

      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Selection</legend>
          <div>
            <label htmlFor="Name-movie">Name movie's</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="poster">URL poster</label>
            <input
              type="text"
              id="poster"
              name="poster"
              value={poster}
              onChange={e => setPoster(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Comments">Comments</label>
            <textarea
              type="text"
              id="comment"
              name="comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
              
          </div>
          <hr />
          <div >
            <input type="submit" value="Envoyer" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}


export default Movie;