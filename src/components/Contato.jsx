import styled from "styled-components";

const Contatoo = styled.div`
width: 80%;
max-width: 600px;
margin: 0 auto;
padding: 30px;
border: 1px solid #ccc;
border-radius: 10px;
`
const H1 = styled.h1`
padding-bottom:10px;`

const P = styled.p`
padding-bottom: 10px;`

const Contato = () => {
    return(
        <>
        <Contatoo>
        <H1>Fale Conosco</H1>
        <P>faleconosco@gmail.com</P>
        <P>+558299999999999</P>
        </Contatoo>
        </> 
    )
}

export default Contato;