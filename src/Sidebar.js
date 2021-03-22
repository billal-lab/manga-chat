import React, {useState ,useRef , useEffect} from 'react';

import db from './firebase'
function Sidebar(props){
    const [newRoom, setnewRoom]=useState("")
    const [rooms, setRooms]=useState([])
    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
        db.collection('rooms').onSnapshot((snapshot) => {
            setRooms(snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
      },[]);

    const Sidebar = useRef(null);
    const btnToggle = useRef(null);
    const onSwipHandler = ()=>{
        Sidebar.current.classList.toggle("sidebarToggle")
        btnToggle.current.classList.toggle("rotate")
    }
    const onClickHandler = (event)=>{
        if(newRoom!==""){
            db.collection("rooms").add({
                name:newRoom
            })
        }
    }

    const onSelectHandler = function(id,name){
        props.select(id,name);
    }
    const displayRooms=()=>{
        return rooms.map((room)=>
                            <div key={room.id} onClick={(event)=>onSelectHandler(room.id,room.data.name)} className="row">
                                <div className="logo-container">
                                    <img className="logo" alt="avatar" src="https://directemployers.org/wp-content/uploads/2018/08/avatar-JohnDoe.jpg"/>
                                </div>
                                <div>
                                    <h2>{room.data.name}</h2>
                                    <p>John Doe : Salut les gens, je suis...</p>
                                </div>
                            </div>
                        )
    }
    return(
        <div className="Sidebar"  ref={Sidebar}>
            <div className="swip">
                <div className="header">
                    <div className="add-button">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClickHandler} width="30" height="30" fill="wite"  viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        <div className="add-room">
                            <input type="text" value={newRoom} placeholder="Add new room" onChange={(event)=>(setnewRoom(event.target.value))}></input>
                        </div>
                    </div>
                    <div  onClick={onSwipHandler} className="toggle-button">
                        <svg  ref={btnToggle} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
                <div className="body">
                    {displayRooms()}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;