import React, { useState } from 'react';
import './App.css';


function User(props){
  return(
    <div className="user">
    <img className="user-photo" src={props.link}alt={props.alt}/>
    <p className="userName">{props.userName}</p>
    </div>
  )
}

function Gallery(props){

  const bigImage = event => event.target.classList.toggle('big-image')

  return(
    <div className="grid-image">
    {props.gallery.map( 
      el => <img className="grid-item" onClick={bigImage} key={el.id} 
      src={el.link}
      alt={el.alt}
      /> )}
  </div>
  )
}

function App(){
  let  [user, setUser] = useState({
  userName : "Kubson",
  profilPhoto : "https://bit.ly/2waS9Gj",
 })

  let  [gallery, setGallery] = useState(
  [
    {
      id: 0,
      link: "https://bit.ly/2O3PQvr",
      alt: "Pies",
    },
    {
      id: 1,
      link: "https://bit.ly/2YCP1iP",
      alt: "Piesek",
    },
    {
      id: 2,
      link: "https://bit.ly/30zqcWU",
      alt: "Pieseł",
    },
  ]
 )
 return(
  <main>
        <User link={user.profilPhoto}
              alt= "Profilowe"
              userName={user.userName}/>
        <Gallery gallery={gallery}/>
      </main>
 )
 
}

export default App 



