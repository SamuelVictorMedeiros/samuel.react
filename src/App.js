import React from "react";

import { Button , Container , List} from "./styles"

function App() {
    const [comentario, setComentario] = React.useState()
    const [todosOsComentarios, setTodosOsComentarios] = React.useState([])

    function digiteiNoTextArea(eventoDoTextArea){
      setComentario(eventoDoTextArea.target.value)
    }
    
    function cliqueiNoBotao(){
      const todosOsComentariosAnteriores = [...todosOsComentarios,comentario]
      setTodosOsComentarios(todosOsComentariosAnteriores)
    }

    return(

      <Container>
      <h2>Começando no React.js</h2> 
      <textarea onChange={digiteiNoTextArea}> </textarea>
      <Button isOn={comentario} onClick={cliqueiNoBotao}>Comentar</Button>

      <List>
        {todosOsComentarios.map((coment) => (
          <li key={coment}> {coment}</li>
        ))}
      </List>
    </Container>
  );
}

export default App;
