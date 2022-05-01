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
        <h1 className="textStroke index"><Link href="/loggin/logginForm">Stickers</Link></h1>

        
      </main>
    </>
  );
}

export default HomePage;
