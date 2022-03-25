import styled from "styled-components";

export const Container = styled.div`
   max-width:1780px;
   padding:10px 10px;
   margin:0 auto;
`;

export const Wrapper = styled.div`
    padding:20px;
    margin-bottom:80px;
`;

export const Title = styled.h1`
  font-weight:300px;
  text-align:center;
  font-size:30px;
`;

export const Top = styled.div`
     display:flex;
     align-items:center;
     justify-content:space-between;
     padding:20px;
`;

export const TopButton = styled.button`
    padding:10px;
    font-weight:300px;
    cursor:pointer;
    border:${props=>props.type === "filled" && "none"};
    background-color:${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled" && "white"};
    font-size:20px;
`;

export const TopTexts = styled.div`
     display:flex;
     align-items:center;
     justify-content: center;
`;

export const TopText = styled.p`
   text-decoration:underline;
   cursor:pointer;
   margin:0 10px;
   font-size:20px;
`;
export const Bottom = styled.div`
   display:flex;
   justify-content: space-between;
`;

export const Info = styled.div`
   flex:3;
`;

export const Product = styled.div`
   display:flex;
   justify-content:space-between;
`;
export const ProductDetail = styled.div`
   flex:2;
   display:flex;
`;

export const Image = styled.img`
   width:400px;
`;

export const Details = styled.div`
   padding:20px;
   display:flex;
   flex-direction:column;
   justify-content: space-around;
   margin-left:20px;
`;
export const ProductName = styled.h3`
   font-size:25px;
`;
export const ProductId = styled.p`
   font-size:25px;
`;
export const ProductColor = styled.div`
   width:40px;
   height:40px;
   border-radius:50%;
   background-color:${props=>props.color};
`;

export const ProductSize = styled.p`
   font-size:25px;
`;

export const PriceDetail = styled.div`
   flex:1;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`;

export const ProductAmountContainer = styled.div`
    display:flex;
   align-items:center;
   justify-content:space-between;
   margin-bottom:20px;
`;
export const ProductAmount = styled.span`
    font-size:25px;
    width:30px;
    height:30px;
    margin: 5px 20px;
    border: 2px solid lightgray;
    border-radius: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const ProductPrice = styled.span`
    font-size:30px;
    font-weight:bold;
`;

export const Hr = styled.hr`
    height:2px;
    background-color: #eeee;
    border:none;
`;

export const Summary = styled.div`
   flex:1;
   border:0.5px solid lightgray;
   border-radius:10px;
   padding:20px;
   height:45vh;
`;

export const SummaryTitle = styled.h2`
   font-weight:300px;
   font-size:30px;
`;
export const SummaryItem = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin:30px 0;
    font-weight:${props=>props.type === "total" && "600"};
    font-size:${props=>props.type === "total" && "24px"};
`;
export const SummaryItemText = styled.span`
    font-size:25px;
`;
export const SummaryItemPrice = styled.span`
     font-size:25px;
`;
export const Button = styled.button`
   width:100%;
   padding:15px;
   border:none;
   background-color:#4f078e;
   color:white;
   font-weight:300;
   font-size:25px;
   cursor:pointer;
   transition:all .5s ease-in-out;
   &:hover{
       background-color:#ffb100;
   }
`;