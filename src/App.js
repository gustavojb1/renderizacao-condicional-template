import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState(false);
  const [tela2, setTela2] = useState(1);

  function renderizarTela() {
    if (tela2 === 1) {
      return <TelaLogin trocarTela2={trocarTela2} />;
    } else if (tela2 === 2) {
      return <TelaCadastro trocarTela2={trocarTela2} />;
    } else if (tela2 === 3) {
      return <TelaUsuarioCadastrado trocarTela2={trocarTela2} />;
    }
  }

  const trocarTela2 = (proximaTela) => {
    setTela2(proximaTela);
  };

  // function renderizaTela() {
  //   if (tela === false) {
  //     return <TelaLogin />;
  //   } else {
  //     return <TelaCadastro />;
  //   }
  // }

  return (
    <MainContainer>
      <GlobalStyled />
      {/* exemplo com função if/else */}
      {renderizarTela()}

      {/* exemplo com curto-circuito
      {tela && <TelaLogin/>}
      {!tela && <TelaCadastro/>} 
       exemplo com tela2 - que começa com valor 1
      {tela2 === 1 && <TelaLogin trocarTela2={trocarTela2} />}
      {tela2 === 2 && <TelaLogin trocarTela2={trocarTela2} />} */}

      {/* exemplo com ternario
      {tela2 === 1 ? (
        <TelaLogin trocarTela={trocarTela} trocarTela2={trocarTela2} />
      ) : (
        <TelaCadastro trocarTela={trocarTela} trocarTela2={trocarTela2} />
      )} */}
    </MainContainer>
  );
}

export default App;
