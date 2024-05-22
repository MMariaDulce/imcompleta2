
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const Rodape = () => {
    return(
        <FooterContainer>
             &copy; Todos os direitos reservados
        </FooterContainer>         
    )
}

export default Rodape;