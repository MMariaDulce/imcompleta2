import styled from "styled-components";

const Button = styled.button`
padding: 7px;
border-radius:10px;
background-color:#267263;
color:aliceblue;`

const P = styled.p`
padding-bottom: 10px;`

const H1 = styled.h1`
padding-bottom:20px;
`
const LinkButton = styled.a`
  text-decoration: none;
  color: #fff;
`;
const Home = () => {
    return(
        <>
        <H1>Bridgerton</H1>
        <P>Seja bem-vindo ao universo Bridgerton</P>
        <P>Assista ao trailer da 3ª temporada de Bridgerton</P>
        <Button>
            <LinkButton href="https://www.youtube.com/watch?v=sA6xIbcaZsw">CLIQUE AQUI!</LinkButton>
        </Button>
        </>
    )

}

export default Home;