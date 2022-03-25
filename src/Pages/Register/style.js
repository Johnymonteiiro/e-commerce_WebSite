import styled from "styled-components";

export const Container = styled.div`
   width:100vw;
   height:100vh;
   background:linear-gradient(rgba(0,0,0,0.6),
    rgba(0,0,0,0.6)),
   url("https://womanthismonth.com/yjejebem/2019/08/shutterstock_641814016-1200x675.jpg") center;
   background-size:100%;
   background-position:top ;
   display:flex;
   justify-content:center;
   align-items:center;
`;

export const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background:rgba(255, 255, 255,0.5);
    border-radius: 10px;
`;

export const Title = styled.h1`
   margin-top:20px;
   font-size:40px;
   text-align:center;
   font-weight:500;
`;
export const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`;

export const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0 0;
    padding:15px;
    border-radius:8px;
    border:none;
    outline:none;
    font-size:20px;
`;

export const Agreement = styled.p`
    font-size:20px;
    margin: 20px 0;
`;
export const Button = styled.button`
    display:flex;
    align-items: center;
    margin:0 auto;
    padding: 15px 40px;
    border:none;
    color:white;
    background:#4f078e;
    cursor:pointer;
    font-size:25px;
    border-radius:8px;
    transition:all .5s ease-in-out;
    &:hover{
        background:#ffb100;
    }
`;
