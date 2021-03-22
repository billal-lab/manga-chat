import React, { useState, useEffect, useRef} from 'react';
import db from './firebase'
import {displayPlaceholder} from './Placeholder';

function Main(props){
    const [newMessage, setnewMessage]=useState("");
    const [decussion, setdecussion]= useState([])
    const body = useRef(null);
    useEffect(()=>{
        body.current.scrollTop= body.current.scrollHeight;
        setdecussion([])
        console.log(props.selected, decussion)
        if(props.selected!=null){
        db.collection("messages").onSnapshot((snapshot)=>{
                var l=[]
                for (let i=0; i<snapshot.docs.length;i++){
                    if(snapshot.docs[i].data().roomId=== props.selected.id){
                        l.push(snapshot.docs[i])
                    }
                }

                l.sort(function (b, a) {
                    return Date.parse(a.data().createdAt) - Date.parse(b.data().createdAt)
                });

                setdecussion(l)
            })
        }
    },[props])

    const onSubmitHandler= ()=>{
        if(newMessage!==""){
            var d = new Date();
            var n = d.toString();
            db.collection("messages").add({
                content: newMessage,
                roomId: props.selected.id,
                email: props.user.email,
                userId: props.user.displayName,
                createdAt: n
            })
            setnewMessage("")
            body.current.scrollTop= body.current.scrollHeight;
        }
    }

    const displayDiscution = ()=>{
        return decussion.map((message)=>(
            <div key={message.id} className="row">
                <div className={props.user.email === message.data().email ? "user": "others"}>
                    <div className="message">
                        <small className="">{message.data().userId} : {(new Date(message.data().createdAt)).toLocaleString()}</small>
                        <div className="content">
                            <p>
                                {message.data().content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        ))
    }
    

    return(
        <div className="Main">
            <div className="header">
                <h1 className="room-name">
                    {props.selected === null ? "" : props.selected.name}
                </h1>
                <div className="logo-container">
                    <img className="logo" alt="avatar" src={props.user.photoURL}/>
                </div>
            </div>
            <div ref={body} className="body">
                {props.selected===null? displayPlaceholder: displayDiscution()} 
            </div>
             {props.selected===null ? "" : <div className="footer">
                <input type="text" placeholder=" message" onChange={(event)=>{setnewMessage(event.target.value)}} value={newMessage}></input>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={onSubmitHandler} width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </svg>
            </div> }
            
        </div>
    );
}

export default Main;