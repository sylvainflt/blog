import { useState } from "react";
import api from "./utils/AxiosInstance";
import Link from "next/link";

function CreateArticleForm() {
  const [title, setTitle] = useState("");
  const [subHead, setSubHead] = useState("");
  const [contents, setContents] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [background, setBackground] = useState("");
  const [comments, setComments] = useState("");
  const [map, setMap] = useState("");
  const [category_id, setCategory_id] = useState(4);
  const [authorId, setAuthorId] = useState(26);

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      subHead,
      contents,
      text,
      image,
      background,
      comments,
      map,
      category_id,
      authorId,
    };
    console.log(postData);
    api
      .post("/article", postData)
      .then((res) => {
        console.log(res);
        setMessage("article ajouté");
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err.toJSON());
        setMessage("un problème est survenu");
        setSubmitted(true);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="lineForm">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className="lineForm">
          <label htmlFor="subHead">forme</label>
          <input
            type="text"
            id="subHead"
            value={subHead}
            onChange={(e) => {
              setSubHead(e.target.value);
            }}
          ></input>
        </div>
        <div className="lineForm">
          <label htmlFor="text">Texte</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <div className="lineForm">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          ></input>
        </div>
        <div className="lineForm">
          <label htmlFor="background">Fond</label>
          <input
            type="text"
            id="background"
            value={background}
            onChange={(e) => {
              setBackground(e.target.value);
            }}
          ></input>
        </div>
        <div className="lineForm">
          <button type="submit">Ajouter</button>
        </div>
        <div hidden={submitted}>
          <Link href="/articles/articles">Retour</Link>
        </div>
        <div hidden={!submitted}>
          {message}
          <Link href="../articles/articles">Voir les articles</Link>
        </div>
      </form>
    </>
  );
}

export default CreateArticleForm;
