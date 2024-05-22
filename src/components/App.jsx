import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Rodape from "./Rodape";
import styled from "styled-components";

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }

  li {
    margin-right: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus,
  &:visited {
    text-decoration: none;
  }
`;

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

const App = () => {
    return (
        <Router>
            <div className="App">
                <HeaderContainer>
                    <div className="logo">X</div>
                    <div></div>
                    <StyledNav>
                        <ul>
                            <li><StyledLink to="/">Home</StyledLink></li>
                            <li><StyledLink to="/sobre">Sobre</StyledLink></li>
                            <li><StyledLink to="/contato">Contato</StyledLink></li>
                        </ul>
                    </StyledNav>
                </HeaderContainer>
                <div style={{ marginTop: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/contato" element={<Contato />} />
                    </Routes>
                    <Rodape />
                </div>
            </div>
        </Router>
    );
}

export default App;
