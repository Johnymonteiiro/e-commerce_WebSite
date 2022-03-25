import styled from "styled-components";

export const Container = styled.div`
   max-width:1780px;
   padding-bottom:50px;
   margin:0 auto;
   display:flex;
   justify-content:center;
   align-items:center;
   margin:0 auto;
`;

export const Left = styled.div`
   margin-right:50px;
   flex:1;
`;

export const Logo = styled.h1`
   font-size:45px;
   margin-top:0;
`;

export const Description = styled.p`
   font-size:25px;
`;

export const SocialContainer = styled.div`
   display:flex;
   align-items:center;
   margin-top:20px;
`;

export const SocialIcon = styled.div`
   width:40px;
   height:40px;
   border-radius:50%;
   background-color:#${props=>props.color};
   display:flex;
   align-items:center;
   justify-content:center;
   margin: 0 20px 0 0;
   cursor:pointer;
   transition:all .5s ease-in-out;
   &:hover{
       transform:translateY(-5px);
   }
`;

export const Center = styled.div`
   margin-right:50px;
   flex:1;
`;

export const Title = styled.h2`
   margin-bottom:30px;
   margin-top:0;
`;

export const List = styled.ul`
   font-size:25px;
   list-style:none;
   display: flex;
   flex-wrap:wrap;
   margin:0;
   padding:0;
`;

export const ListItems = styled.li`
   width:50%;
   cursor:pointer;
   margin:8px 0;
   transition:all .5s ease-in-out;
   &:hover{
       color:#4f078e;
   }
`;

export const Right = styled.div`
   flex:1.4;
`;

export const ContacItems = styled.p`
   width:100%;
   cursor:pointer;
   font-size:25px;
   margin:10px 0;
   transition:all .5s ease-in-out;
   &:hover{
       color:#4f078e;
   }
   .contactIcon{
       margin-right:10px;
   }
`;

export const PayTitle = styled.h3`
   margin:0;
`;

export const Image = styled.img`
   width:50%;
`;