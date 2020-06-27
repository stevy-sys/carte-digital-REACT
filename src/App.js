import React, { Component } from 'react';
import './App.scss';
import Ecran from './Component/Ecran';
import Touche from './Component/Touche';

class App extends Component {
  state = {
    ligne1:[1,2,3,"+"],
    ligne2:[4,5,6,"-"],
    ligne3:[7,8,9,"*"],
    ligne4:[".",0,"=","/"],
    affichage:null,
    msg:"erreur"
  }

  reference = React.createRef();

  handleChange = (element) => {
    if(this.state.affichage){
      let aff = this.state.affichage.slice() ;
        aff.push(element);
      this.setState({
        affichage:aff
      })
    }
    else{
      console.log("veuillez allumez le machine")
    }
  }

  handleResult = () => {
    if(this.state.affichage){
      let resultat = this.state.affichage.slice();
      resultat = resultat.join("");
      try{
        eval(resultat);
        this.setState({
          affichage: [eval(resultat)]
        })
      }
      catch(e){
        console.log(e)
        this.setState({
          affichage:[this.state.msg]
        })
      }
    }
    else{
      return console.log("veuillez allumez le machine")
    }
  }

  handleOff = () => {
    if(this.state.affichage === null){
      this.reference.current.style = "background:yellow";
      this.setState({
        affichage:[]
      })
    }
    else{
      this.reference.current.style ="none";
      this.setState({
        affichage:null
      })
    }
  }

  handleC = () => {
    if(this.state.affichage){
      this.setState({
        affichage:[]
      })
    }
    else{
      console.log("veuillez allumez le machine")
    }

    
  }
  handleDelete = () => {

    if(this.state.affichage){
        let aff = this.state.affichage.slice() ;
        aff.pop();
        this.setState({
          affichage:aff
        })
    }
    else{
      console.log("veuillez allumez le machine")
    }
  }

  render(){
      return (
        <div className="App">
          <Ecran 
            affichage = {this.state.affichage}
          />
          <Touche
              reference = {this.reference}
              handleCalcul = {this.handleCalcul}
              handleDelete = {this.handleDelete}
              handleC = {this.handleC} 
              handleOff = {this.handleOff} 
              handleResult = {this.handleResult} 
              handleChange = {this.handleChange}
              boutton = {this.state}
            />
        </div>
      );
    }
  }

export default App;