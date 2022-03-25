import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Wrapper = styled.div`
    padding:50px;
    display:flex;
`;

export const ImgContainer = styled.div`
      flex:1;
      display:flex;
      align-items: center;
      justify-content: center;
`;

export const ImgContent = styled.div`
      width:60%;
      height:60vh;
`;

export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;

export const InfoContainer = styled.div`
    flex:1;
    padding:0 20px;
`;

export const Title = styled.h1`
    font-weight:300;
`;

export const Description = styled.p`
    margin:20px 0;
`;

export const Price = styled.p`
     font-weight:100;
     font-size:40px;
`;

export const FilterContainer = styled.div`
    width:50%;
    margin:30px 0;
    display:flex;
    justify-content:space-between;
`;
export const Filter = styled.div`
    display: flex;
    align-items: center;
`;
export const FilterTitle = styled.span`
      font-weight:200;
      font-size:25px;
`;

export const FilterColor = styled.p`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:${props=>props.color};
    cursor:pointer;
    margin: 0 8px;
`;

export const FilterSize = styled.select`
    font-size:20px;
    margin-left: 10px;
    padding:10px;
    border:2px solid lightgray;
    outline:none;
`;

export const FilterOption = styled.option`
    font-size:20px;
    padding:10px;
`;

export const AddContainer = styled.div`
    margin:60px 0;
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
export const AmoutContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;

export const Amount = styled.span`
    width:30px;
    height:30px;
    margin: 0 20px;
    border: 2px solid lightgray;
    border-radius: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Buttom = styled.button`
    padding:15px;
    border:none;
    border-radius:8px;
    background-color:#4f078e;
    color:white;
    font-size:22px;
    cursor:pointer;
    transition: all .5s ease-in-out;

    &:hover{
        background:#ffb100;
    }
`;
