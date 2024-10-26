import styled from "styled-components"
import EstiloGlobais from "./assets/componentes/EstilosGlobais"
import { Cabecalho } from "./assets/componentes/EstilosGlobais/Cabecalho"

function App() {
  const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    height: 100vh;
  `

  return (
    <FundoGradiente>
      <EstiloGlobais/>
      <Cabecalho/>
    </FundoGradiente>
  )
}

export default App
