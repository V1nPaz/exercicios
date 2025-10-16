import react, {Component} from "react";
import Imagem from "./Imagem.js";


class App extends Component{
  constructor(props){
    super(props);
    this.states = {
      message: "Hello World",
      imgReferences: {

      },
      currentImg: "./imgs/hk1.jpg"
    };
  }

  mudarImagem(){
    
  }

  render(){
    console.log(this.states.currentImg);
    return(
      <div>
      <h3>GERADOR DE IMAGENS</h3>
      
      <img src = {this.currentImg} alt = "alt"></img> <br></br>
      <button onClick={this.mudarImagem} >Clique</button>
      </div>
    );
  }
}

export default App;


