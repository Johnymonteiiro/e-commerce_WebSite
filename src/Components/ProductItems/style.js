import styled from "styled-components";

export const Info = styled.div`
    opacity:0;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background:rgba(0,0,0,0.3);
    transition:all .4s ease-in-out;
    cursor:pointer;
`;

export const Container = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   position:relative;
   height:400px;
   box-shadow: 0px 3px 9px 1px rgba(151,147,147,0.99);
   -webkit-box-shadow: 0px 3px 9px 1px rgba(151,147,147,0.99);
   -moz-box-shadow: 0px 3px 9px 1px rgba(151,147,147,0.99);
   &:hover ${Info}{
       opacity: 1;
   }
`;

export const Image = styled.img`
    width:290px;
    height:100%;
`;

export const Icon = styled.div`
  cursor:pointer;
  width:40px;
  height:40px;
  margin:10px;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: white;
  transition:all 0.5s ease;
  &:hover{
      transform:scale(1.1)
  }
    
`;

export const Title = styled.h1`
    
`;