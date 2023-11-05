import React from "react";
import  Chat  from "../components/Chat"
import { useSelector } from "react-redux";

export  default function ChatContainer() {

    const username = useSelector((state)=> state.username)
return(
    <section className="container">
        <h1>Chat Container</h1>
        <h3>Twój nick to: {username}</h3>
        <Chat username={username}/>

    </section>
)
}