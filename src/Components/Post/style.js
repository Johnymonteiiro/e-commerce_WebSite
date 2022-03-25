import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:500px;
`;
export const Content = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
`;

export const ImageContainer = styled.div`
    position:relative;
    left:13%;
    flex:1;
    width:100%;
    height:100%;
`;
export const Image = styled.img`
    width:30rem;
    height:100%;
    transition: all .4s ease-in-out;
    &:hover{
        transform:scale(1.1);;
    }

`;
export const Info = styled.div`
    position:relative;
    top:30px;
    flex:1;
    margin:0 auto;
`;
export const Title = styled.h1`
    flex:1;
    align-items:center;
    font-size:60px;
    font-weight: bold;
`;
export const Description = styled.p`
    font-size: 25px;
    width:55%;
    align-items:center;
`;

export const PriceArea = styled.div`
    display: flex;
    align-items: center;
`;

export const Price = styled.p`
    font-size:23px;
    margin:0;
`;
export const Button = styled.button`
    padding:20px;
    font-size:23px;
    border:4px solid lightgrey;
    background:transparent;
    margin-left: 30px;
    cursor:pointer;
    transition:all .6s ease-in-out;
    &:hover{
       background:#4F078E;
       color:white;
    }
`;