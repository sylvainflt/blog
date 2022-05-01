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
          <div className="articlesBox">
            {articles.map((article) => (
              <div key={article.id} className={article.subHead}>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sidePannel">
          <Link href="./addArticle">Ajouter un article</Link>
          <Link href="./deleteArticle">Supprimer un article</Link>
          <Link href="./updateArticle">Modifier un article</Link>
        </div>
      </div>
    </>
  );
}

export default Articles;
