import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import React, { useState } from "react";
import styled from "styled-components";
import BackgroudImage from "../components/BackgroudImage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const hadleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormValues({
            ...formValues,
            [name]: value
        });
        // console.log(formValues);
    }
    const handleSignIn = async () => {
        console.log(formValues);
        try {
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    }
    onAuthStateChanged(firebaseAuth, (currentUser)=> {
        if(currentUser) {
            navigate("/");
        }
    });
    return (
        <Container showPassword={showPassword}>
            <BackgroudImage />
            <div className="content">
                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited Movies ,TV shows and more</h1>
                        <h4>Watch anywhere , Cancel Anytime</h4>
                        <h6>Ready to watch ? Enter your email to create or restart menbership</h6>
                    </div>
                    <div className="form">
                        <input type="email" placeholder="Email Address" name="email" value={formValues.email} onChange={hadleInput} />
                        {
                            showPassword && (<input type="password" placeholder="Password" name="password" value={formValues.password} onChange={hadleInput} />)
                        }

                        {
                            !showPassword && (<button onClick={() => setShowPassword(true)}>Get Started</button>)
                        }
                    </div>
                    <button onClick={handleSignIn}>Sign Up</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    .content{
        position:absolute;
        top:0;
        left : 0;
        background-color:rgba(0,0,0,0.5);
        height: 100vh;
        width:100vw;
        display:grid;
        grid-template-rows : 15vh 85vh;
        .body{
            gap : 1rem;
            .text{
                gap:1rem;
                text-align : center;
                font-size : 2rem;
            }
            h1{
                padding: 0 25rem
            }
            .form{
                display : grid; 
                grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr "};
                width : 60%;
                input{
                    color:black;
                    padding: 1.5rem;
                    font-size:1.2rem;
                    border : 1px solid black;
                    &:focus{
                        outline:none;
                    }
                } 
                button{
                    padding: 0.5rem 1rem;
                    background-color: #e50914;
                    border:none;
                    cursor:pointer;
                    color:white;     
                    font-weight : bolder;
                    font-size:1.05rem;
                }
            }
            button{
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border:none;
                cursor:pointer;
                color:white;    
                border-raduis : 0.2rem;
                font-weight : bolder;
                font-size:1.05rem;
            }
        }
    }
`;