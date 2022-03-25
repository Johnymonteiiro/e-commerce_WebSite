import styled from 'styled-components';

const Container = styled.p`
  background-color:#4f078e;
  font-weight:bold;
  text-align:center;
  margin:0;
  color:white;
  padding:10px 0;
`;

export const Announcement = ()=>{
    return(
        <Container>Good prices! Free Shopping and on orders over $50</Container>
    )
}