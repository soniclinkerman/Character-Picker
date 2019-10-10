import React, {Component} from "react"
import "./CharacterPicker.css"
import Joker from "./Joker.jpg"
import Marth from "./Marth.jpg"


class  CharacterPicker extends Component{
    constructor(props){
        super(props);
        this.state = {num: 0}
        this.randomNumber = this.randomNumber.bind(this)
    }
    randomNumber() {
        let rand = Math.floor(Math.random() * 2 + 1)
        this.setState({num: rand})
    }

    render() {
        let msg;

        if (this.state.num === 1) {
            msg = 
            <div className="main">
            <h2>Joker</h2>
            <img src={Joker} className = "icon"/>  
            </div>  
        }
        else if (this.state.num === 2) {
            msg =
            <div className="main">
                <h2>Marth</h2>
                <img src={Marth} className= "icon" />
            </div>
        }
        return(
            <div >
                <h2>{msg}</h2>
                <button onClick={this.randomNumber}>Next Character</button>
                
            </div>
        )
    }


}

export default CharacterPicker