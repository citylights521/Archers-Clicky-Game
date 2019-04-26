import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import barry from "./img/Barry.jpg";
import cheryl from "./img/Cheryl.jpg";
import figgis from "./img/Figgis.jpg";
import krieger from "./img/Krieger.jpg";
import lana from "./img/Lana.jpg";
import malory from "./img/Malory.jpg";
import nikolaiJakov from "./img/Nikolai.Jakov.png";
import pam from "./img/Pam.jpg";
import ray from "./img/Ray.jpg";
import ronCadillac from "./img/Ron.Cadillac.jpg";
import sterlingArcher from "./img/Sterling.Archer.png";
import trinette from "./img/Trinette.jpg";
import woodhouse from "./img/Woodhouse.png";

var images = [ cheryl, figgis, krieger, lana, malory, nikolaiJakov, pam, ray, ronCadillac, sterlingArcher, trinette, woodhouse];



var topScore = 0;
var userClicked = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clickState: Math.random()};
        this.imageClicked = this.imageClicked.bind(this);
    }
    
    imageClicked(e) {
        this.setState({clickState: Math.random()});
        var imgSrc = ReactDOM.findDOMNode(e.currentTarget).querySelector("img").src;

        if (userClicked.includes(imgSrc))
        {
            this.props.propRefs.guessMsgLi.current.innerHTML = "You Guessed Wrong";
            userClicked = [];
        }
        else if (userClicked.length === images.length - 1)
        {
            this.props.propRefs.guessMsgLi.current.innerHTML = "You Guessed All Correct";
            userClicked = [];
            topScore = images.length;
        }
        else
        {
            this.props.propRefs.guessMsgLi.current.innerHTML = "You Guessed Right";
            userClicked.push(imgSrc);
        }

        topScore = Math.max(userClicked.length, topScore);

        this.props.propRefs.topScoreLi.current.innerHTML = "Score: " + userClicked.length + " | Top Score: " + topScore;
    }

    render() {
    
    images = shuffle(images);

    return(
        
       <div className="container">
        {images.map((image, index) =>  {
            return <div data-id={index} className="clickImg" onClick={this.imageClicked}><img src={image}></img></div>
        })}    
       
       </div>
    );
    }
}