import styled from "styled-components";

export const Container = styled.div`
   flex: 1;
   margin:15px;
   height:60vh;
   position:relative;
   transition:all .4s ease-in-out;
   /*
   box-shadow: 0px 3px 9px 1px rgba(151,147,147,0.99);
   -webkit-box-shadow: 0px 3px 9px 1px rgba(151,147,147,0.99);
   -moz-box-shadow: 0px 3px 9px 1px rgba(151,147,147,0.99); */
   &:hover{
       transform:translateY(-20px);
   }
  
`;

export const Image = styled.img`
  width:100%;
  height:100%;
`;

export const Info = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:rgba(0,0,0,0.3);

`;

export const Title = styled.h1`
     color:white;
`;

export const Price = styled.p`

`;

export const Button = styled.button`
    padding:10px;
    border:3px solid lightgray;
    cursor:pointer;
    background:white;
    font-size:18px;
`;