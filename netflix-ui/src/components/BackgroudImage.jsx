import React from "react";
import bgImg from "../assets/login.jpg";
import styled from "styled-components";

export default function BackgroudImage(){
    return (
        <Container>
            <img src={bgImg} alt="Background" />
        </Container>
    )
}

const Container = styled.div`
    height : 100vh;
    width : 100vw;
    img{
        height:100vh;
        width:100vw;
    }
`;