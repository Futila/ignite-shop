import { styled } from "../styles";



const Button = styled("button", {
  backgroundColor:'$rocketseat', 
  borderRadius: 4,
  width: 400
})


export default function Home() {
  return (
    <div>
      <Button>Enviar</Button>
    </div>
  );
}
