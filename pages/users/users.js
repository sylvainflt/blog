//our-domain.com/
import Link from "next/link";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios";
import { useEffect, useState } from "react";

function Users(){

    const [users, setUsers] = useState([]);

    async function getUsers(){
        await axios.get('http://localhost:5000/user')
            .then((res) => {
                
                setUsers(res.data);
                console.log(users);
            })
            .catch((err)=> {
                console.log(err);
                
            });  
    }
    useEffect(() => {
        getUsers();
    },[]);

    return (
      <>
        <Link href="/">Retour</Link>
        <main>
          <h1>Liste des utilisateurs</h1>

          {users.map((user) => (
            <div key={user.id}>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </main>
      </>
    );
}

export default Users;