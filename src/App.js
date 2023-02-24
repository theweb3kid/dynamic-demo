import styled from "styled-components"
import { useEffect, useState } from 'react';
import { DynamicContextProvider, useDynamicContext } from '@dynamic-labs/sdk-react';

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

  const { user, handleLogOut, setShowAuthFlow, showAuthFlow, walletConnector } =
    useDynamicContext();
  const [buttonText, setButtonText] = useState("Connect Wallet");
  const [balance, setBalance] = useState(null);

  const buttonClickHandler = () => {
    if (user) {
      handleLogOut()
    } else {
      setShowAuthFlow(true)
    }
  }

  useEffect(() => {
    if (user && walletConnector) {
      const provider = walletConnector.getWeb3Provider();
      provider.getBalance(user.walletPublicKey).then((balance) => {
        setBalance((balance/10**18).toString());
        setButtonText("Disconnect Wallet")
      });
    } else {
      setButtonText("Connect Button")
    }
  }, [user, walletConnector]);

  return (
    <>
      <ConnectButton onClick={buttonClickHandler}>
        <MiniLogo src={dynamiclogomini} />
        {buttonText}
      </ConnectButton>
      <br />
      {
        user && !showAuthFlow ?
          <>
            <Text>Wallet Connected</Text>
            <Text>Public Address: {user.walletPublicKey}</Text>
            <Text>Balance: {balance} ether</Text>
          </>
          :
          <Text>Wallet Not Connected</Text>
      }
    </>
  )
}

function App() {
  return (
    <DynamicContextProvider
      settings={{
        appName: "Dynamic Demo",
        appLogoUrl: dynamiclogomini,
        environmentId: 'ae354e6f-0dd6-4d6d-9769-15ed7cb98797'
      }}
    >
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
    </DynamicContextProvider>
  );
}

export default App;
