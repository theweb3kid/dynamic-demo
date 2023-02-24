import styled from "styled-components"
import { useEffect, useState } from 'react';

import dynamiclogo from "./assets/dynamic logo.svg"
import dynamiclogomini from "./assets/dynamic.png"

const Application = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  user-select: none;
`

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  padding: 10px 0;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;

  width: 100%;
  text-align: center;
`

const Logo = styled.img`
  margin: 20px 30px;
  height: 30px;
  user-drag: none;
`

const MiniLogo = styled.img`
  margin-right: 10px;
  height: 30px;
  user-drag: none;
`

const Anchor = styled.a`
  all: unset;
  cursor: pointer;
  color: #4779FF;
`

const ConnectButton = styled.button`
  background: black;
  color: white;

  border: none;
  outline: none;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const DynamicComponent = () => {

  const [buttonText, setButtonText] = useState("Connect Wallet");

  const buttonClickHandler = () => {

  }

  return (
    <>
      <ConnectButton onClick={buttonClickHandler}>
        <MiniLogo src={dynamiclogomini} />
        {buttonText}
      </ConnectButton>
      <br />
      <Text>Wallet Not Connected</Text>
    </>
  )
}

function App() {
  return (
    <Application className="App">
      <Header>
        <Anchor href="https://www.dynamic.xyz/" target="_blank" >
          <Logo src={dynamiclogo} />
        </Anchor>
      </Header>

      <DynamicComponent />

      <Footer>
        <Text>
          Made_With_
          <Anchor href="https://www.dynamic.xyz/" target="_blank" >Dynamic</Anchor>
          _By_
          <Anchor href="https://twitter.com/ojasrajankar" target="_blank" >Ojas Rajankar</Anchor>
        </Text>
      </Footer>
    </Application>
  );
}

export default App;
