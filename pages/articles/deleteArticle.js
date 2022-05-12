import api from "../../components/utils/AxiosInstance";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function DeleteArticle() {
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function getArticles() {
    await api
      .get("http://localhost:5000/article")
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

  const deleteArticle = (id) => {
    //quel article supprimer

    api
      .delete("/article/" + id)
      .then((res) => {
        console.log(res);
        setMessage("article supprimé");
        setSubmitted(true);
        getArticles();
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
        {articles.map((article) => (
          <div key={article.id} className={article.subHead}>
            <p>{article.title}</p>
            <p>{article.text}</p>
            <button onClick={() => deleteArticle(article.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default DeleteArticle;
