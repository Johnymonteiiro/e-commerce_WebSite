import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    margin-top:20px;
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
   position: relative;
   display:inline;
   margin: 0 20px;
   bottom:-520px;
   left: 45%;
   color:black;
   border: 4px solid lightgray;
   padding:15px;
   transition: all .6s ease-in-out;
   background:transparent; 
   
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