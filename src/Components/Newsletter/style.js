import styled from "styled-components";

export const Container = styled.div`
     width:100%;
     height:50vh;
     padding:30px;
     margin-bottom:30px;
     display:flex;
     flex-direction:column;
     justify-content: center;
     align-items:center;
     background-color:#4f078e;
`;

export const Title = styled.h1`
    font-size:70px;
    font-weight:bold;
    margin:0;
    color:white;
`;

export const Description = styled.div`
    font-size:25px;
    padding:30px 0px;
    margin:0;
    color:white;
`;

export const InputArea = styled.div`
   width:50%;
   height:50px;
   background-color:white;
   display:flex;
   justify-content:space-between;
   border:2px solid gray;
`;

export const Input = styled.input`
   flex:8;
   border:none;
   outline:none;
   color:black;
   padding-left:20px;
   font-size:23px;
   font-weight:bold;

   &::placeholder{
       color:gray;
       font-size:18px;
   }
`;

export const Button = styled.button`
   flex:1;
   height:100%;
   border:none;
   cursor:pointer;
   color:white;
   background-color:#ffb100;
`;