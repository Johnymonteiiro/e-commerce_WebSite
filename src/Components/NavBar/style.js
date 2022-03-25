import styled from "styled-components";

export const Container = styled.div`
  height:75px;
  margin-bottom:20px;
`;

export const Wrapper = styled.div`
   max-width:1780px;
   padding:10px 10px;
   margin:0 auto;
   display:flex;
   align-items:center;
   justify-content: space-between;
`;

export const Left = styled.div`
   display:flex;
   align-items:center;
   flex:1;
`;
export const Language = styled.p`
   font-size:25px;
   font-weight:bold;
   cursor:pointer;
   margin-right:20px;
`;

export const SearchArea = styled.div`
    border:3px solid lightgrey;
    display:flex;
    align-items:center;
    padding:5px;
`;

export const Input = styled.input`
   border:none;
   outline:none;
   font-size:25px;
`;

export const Center = styled.div`
   flex:1;
   text-align:center;
`;
export const LogoName = styled.h1`
    font-weight:bold;
    margin:0;
`;
export const Rigth = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    flex:1;
`;

export const MenuItems = styled.p`
   font-size:25px;
   font-weight:bold;
   margin-left:25px;
   cursor:pointer;
`;