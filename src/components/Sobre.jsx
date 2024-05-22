
import styled from "styled-components";

const Texto = styled.div`

width: 80%;

margin: 0 auto;




`
const H1 = styled.h1`
padding-bottom:20px;
text-align: center;
`

const P = styled.p`
padding-bottom: 20px;
text-align: justify;
`


const Sobre = () =>{
    return(
        <>
        <Texto>
        <H1>3 Temporada de Bridgerton </H1>
        <P>Segunda a sinopse já divulgada pela Netflix, Penelope sairá em busca de um marido, de preferência um que lhe ofereça independência suficiente para seguir sua vida dupla como a grande Lady Whistledown.</P>
        <P>Enquanto isso, Colin retorna de suas viagens de verão. Ele desanimado ao perceber que Penelope, a única pessoa que sempre gostou dele como ele era, agora está distante. O Bridgerton, então, fará de tudo para reconquistar a amizade da garota, enquanto questiona se seus sentimentos são somente de amizade.</P>
        <P>O que complica as coisas para Penelope é o rompimento com Eloise, que encontrou uma nova amiga, e luta com suas próprias questões de identidade.</P>
        </Texto>
        </>
    )
}

export default Sobre;