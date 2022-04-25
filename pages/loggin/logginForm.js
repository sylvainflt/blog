import { Fragment } from "react";
import Link from "next/link";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import api from "../../components/utils/AxiosInstance";
import AuthContext from "../../context/AuthProvider";

function LogginForm() {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [logged, setLogged] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = { email, password };

    api
      .post("/login", postData)
      .then((res) => {
        router.push({
          pathname: "/",
        });
        setMessage("vous êtes loggé");
        setSubmitted(true);
        setLogged(true);
      })
      .catch((err) => {
        console.log(err.toJSON());
        setMessage("veuillez vérifier vos identifiants");
        setSubmitted(true);
        setLogged(false);
      });
  };

  return (
    <>
      <Link href="/">Retour</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="
      email"
          >
            Votre e-mail :{" "}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password">Votre mot de passe : </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </>
  );
}

export default LogginForm;
