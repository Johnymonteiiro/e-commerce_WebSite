import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 100%;
    margin:80px 0px;
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    padding:20px;
`;
export const Slider = styled.div`

  /*====== Swiper style ========*/

.swiper-container {
    width:100%;
    height: 100%;
}

li{
    list-style:none;
}

.swiper-slide {
    width:100%;
    height:100%;  
}
.swiper-button-next,.swiper-button-prev {
   color:black;
   border: 4px solid lightgray;
   padding:15px;
   transition: all .6s ease-in-out;
   background:rgba(0,0,0,0.4); 
   
}


.swiper-button-next:hover {
    background:#4F078E;
    color:white;
 }

 .swiper-button-prev:hover {
    background:#4F078E;
    color:white;
    
 }

.swiper-button-prev:after, .swiper-button-next:after {
    font-size:27px;
    font-weight: bold;
}

.swiper-wrapper {
    position: relative;
    width:100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    padding:0;
}

`;