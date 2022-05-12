import api from "../../components/utils/AxiosInstance";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function UpdateArticle() {
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState();
  const [title, setTitle] = useState();
  const [subHead, setSubHead] = useState();
  const [text, setText] = useState();

  async function getArticles() {
    await api
      .get("http://localhost:5000/article/")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  useEffect(() => {
    getArticles();
  }, []);

  function updateArticleId(id) {
    let articleData = {
      title: title,
      subHead: subHead,
      contents: "",
      text: text,
      image: "",
      background: "",
      comments: "",
      map: "",
      category_id: 1,
      authorId: 26,
    };
    console.log(articleData);
    api
      .put("/article/" + id, articleData)
      .then((res) => {
        console.log(res);
        setMessage("article modifié");
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err.toJSON());
        setMessage("une erreur s'est produite");
        setSubmitted(true);
      });
  };

  return (
    <>
      <Link href="/articles/articles">Retour</Link>
      <div hidden={!submitted}>{message}</div>
      <div className="articlesBox">
        <form>
          {articles.map((article) => (
            <div key={article.id} className="articleBox">
              
              <input
                type="text"
                defaultValue={article.title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              ></input>
              <input
                type="text"
                defaultValue={article.subHead}
                onChange={(e) => {
                  setSubHead(e.target.value);
                }}
              ></input>
              <textarea
                id="text"
                defaultValue={article.text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                required
              ></textarea>
              <button onClick={() => updateArticleId(article.id)}>
                modifier
              </button>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}

export default UpdateArticle;
