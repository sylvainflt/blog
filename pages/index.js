//our-domain.com/
import Link from "next/link";
import React, { useState, useContext } from "react";

function HomePage() {

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [logged, setLogged] = useState(false);

  

  return (
    <>
      <main>
        <h1 className="textStroke">Le blog de Sylvain</h1>
        <Link href="/loggin/logginForm">Se Logger</Link>

        <div hidden={!submitted}>{message}</div>
        <div hidden={!logged}>
          <Link href="/articles/articles">Voir les articles</Link>

          <Link href="/users/users">Voir les utilisateurs</Link>
        </div>
      </main>
    </>
  );
}

export default HomePage;
