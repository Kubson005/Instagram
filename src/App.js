import React, { Component } from 'react';
import './App.css';

const User = props => (
  <div className="user">
    <img className="user-photo" src={props.link}alt={props.alt}/>
    <p className="userName">{props.userName}</p>
    </div>
)

const Gallery = props => (
  <div>
    {props.gallery.map( 
      el => <img key={el.id} 
      src={el.link}
      alt={el.alt}
      /> )}
  </div>
)

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userName : "Kubson",
      profilPhoto : "https://bit.ly/2waS9Gj",
      gallery : [
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
    }
  }
  render(){
    return(
      <main>
        <User link={this.state.profilPhoto}
              alt= "Profilowe"
              userName={this.state.userName}/>
        <Gallery gallery={this.state.gallery}/>
      </main>
    )
    }
  }



