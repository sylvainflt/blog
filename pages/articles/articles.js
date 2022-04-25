//our-domain.com/
import Link from "next/link";
import api from "../../components/utils/AxiosInstance";
import { useEffect, useState } from "react";
import CreateArticleForm from "../../components/CreateArticleForm";

function Articles() {
  const [articles, setArticles] = useState([]);

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

  return (
    <>
      <header>
        <Link href="/">Retour</Link>
        <h1 className="textStroke">Articles</h1>
      </header>
      <div className="pannels">
        <div className="mainPannel">
          <h2>Liste des articles</h2>
          <div className="articlesBox">
            {articles.map((article) => (
              <div key={article.id} className="articleBox">
                <p>{article.id}</p>
                <h3>{article.title}</h3>
                <h4>{article.subHead}</h4>
                <p>{article.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sidePannel">
          <h2>Ajout/Suppression/Modification</h2>
          <Link href="./addArticle">ajouter un article</Link>
          <Link href="./deleteArticle">supprimer un article</Link>
          <Link href="./updateArticle">modifier un article</Link>
        </div>
      </div>
    </>
  );
}

export default Articles;
