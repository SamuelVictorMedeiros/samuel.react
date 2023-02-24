import React from "react";
import "./style.css";

function App() {




    const [comentario, setComentario] = React.useState()
    const [todosOsComentarios, setTodosOsComentarios] = React.useState([])



    function digiteiNoTextArea(eventoDoTextArea){
      setComentario(eventoDoTextArea.target.value)
    }
    
    function cliqueiNoBotao(){
      const todosOsComentariosAnteriores = [...todosOsComentarios,comentario]
      setTodosOsComentarios(comentario)
    }



    return(

    <div>
      <h2>Começando no React.js</h2> 
      <textarea onChange={digiteiNoTextArea}></textarea>
      <button onClick={cliqueiNoBotao}>Comentar</button>

      <ul>
        <li>{todosOsComentarios}</li>
      </ul>
    </div>
  );
}

export default App;
