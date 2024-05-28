import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/video.mp4";
import { useNavigate } from 'react-router-dom';

export default function Player() {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={navigate(-1) }/>
                    <video src={video} autoPlay loop controls muted></video>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
`;