import React from "react";
import { useDispatch, useSelector } from "react-redux";

export  default function Profile() {
    const dispatch = useDispatch()

    const username = useSelector((state)=> state.username)

    const usernameHandler = (e) => {
        const usernameAction = {type: "CHANGE_USERNAME", payload: e.target.value}
        dispatch(usernameAction)
    }
return(
    <section className="container">
        <h1>Profil</h1>
        <h3>Moj nick to: {username}</h3>
        <label>Podaj swój nick:</label>
        <input value={username} onChange={usernameHandler}/>
    </section>
)
}