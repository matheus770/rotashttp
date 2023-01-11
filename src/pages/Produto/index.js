import { useParams } from "react-router-dom";

function Produto(){

  const { id } = useParams();

  return(
    <div>
      <h2>Produto !</h2>
      <span>
        Meu Produto é {id}
      </span>
    </div>
  )
}

export default Produto;