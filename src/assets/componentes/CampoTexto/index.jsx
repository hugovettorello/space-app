import styled from "styled-components"
import lupa from './lupa.png'

const ContainerEstilizado = styled.div`
   position: relative;
   display: inline-block;
`

const CampoTextoEstilizado = styled.div`
    height: 46px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;

`

const IconeLupa = styled.img`
    position: absolute;
    top: 12px;
    right: 10px;
    width: 19px;
    height: 19px;
`

export default function CampoTexto (props) {
    return(
        <ContainerEstilizado>
            <CampoTextoEstilizado {...props}/>
            <IconeLupa src={lupa} />
        </ContainerEstilizado>
    )
}