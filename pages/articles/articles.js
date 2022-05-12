//our-domain.com/
import Link from "next/link";
import api from "../../components/utils/AxiosInstance";
import { useEffect, useState, useRef } from "react";
import Draggable from 'react-draggable';
import Image from 'next/image';
import pic from '../../public/images/goOutside.jpg';

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

    const nodeRef = useRef(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    // enregistrer la position
    const handleEnd = (data) => {

    }

    return (
        <>
        <header>
            <Link href="/" > Retour </Link> 
                <Image src={pic} width="350px"
                    height="300px"></Image>
        </header>
        <div className="pannels">
            <div className="mainPannel">
                <div className="articlesBox">
                    {
                        articles.map((article) => (
                            <Draggable nodeRef={nodeRef}
                                onDrag={(e, data) => trackPos(data)}
                                onStop={handleEnd}>
                                <div key={article.id} className={article.subHead} ref={nodeRef}>
                                <h3 className={article.background}> {article.title} </h3>
                                <p> {article.text} </p>
                                <p>x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}</p>
                                <img alt={`img - ${article.id}`} src={`../public/images/${article.image}`} className="file-img" />
                            </div>
                            </Draggable>
                        ))
                    } 
                </div> 
            </div> 
            <div className="sidePannel">
                <Link href="./addArticle"> Ajouter un article </Link> 
                <Link href="./deleteArticle" > Supprimer un article </Link> 
                <Link href="./updateArticle" > Modifier un article </Link> 
            </div> 
        </div> 
        </>
    );
}

export default Articles;