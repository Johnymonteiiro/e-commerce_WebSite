import { 
    TiSocialFacebook, TiSocialInstagram,
    TiSocialTwitter,TiSocialPinterest 
} from "react-icons/ti";
import { FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import * as S from "./style";

export const Footer = ()=>{
    return(
        <S.Container>
            <S.Left>
                <S.Logo>Shopping|Betânia</S.Logo>
                <S.Description>
                    You can see fashion in what you choose 
                    in the morning to dress, in the look of a punk, a skater 
                    and a pop star, on the catwalks of the world, in the magazines and even
                    in the fact that you wear a politician 
                    or in the dress of the grandparents.
                </S.Description>
                <S.SocialContainer>
                    <S.SocialIcon color="385999">
                       <TiSocialFacebook color="white" size={30}/>
                    </S.SocialIcon>
                    <S.SocialIcon color="E4405F">
                       <TiSocialInstagram color="white" size={30}/>
                    </S.SocialIcon>
                    <S.SocialIcon color="55ACEE">
                       <TiSocialTwitter color="white" size={30}/>
                    </S.SocialIcon>
                    <S.SocialIcon color="E60023">
                       <TiSocialPinterest color="white" size={30}/>
                    </S.SocialIcon>
                </S.SocialContainer>
            </S.Left>
            <S.Center>
                <S.Title>Search by</S.Title>
                <S.List>
                    <S.ListItems>Home</S.ListItems>
                    <S.ListItems>Cart</S.ListItems>
                    <S.ListItems>Man Fashion</S.ListItems>
                    <S.ListItems>Woman Fashion</S.ListItems>
                    <S.ListItems>Acessories</S.ListItems>
                    <S.ListItems>My Account</S.ListItems>
                    <S.ListItems>Order Tracking</S.ListItems>
                    <S.ListItems>Wish List</S.ListItems>
                    <S.ListItems>Terms</S.ListItems>
                    <S.ListItems>Policy Privacy</S.ListItems>
                </S.List>
            </S.Center>
            <S.Right>
              <S.Title>Contacts</S.Title> 
              <S.ContacItems>
                  <FaMapMarkerAlt className="contactIcon"/>
                  Tv Virginio de Sousa Street 02, Araranguá-SC/ 88913-899
              </S.ContacItems>
              <S.ContacItems>
                  <FaPhoneAlt className="contactIcon"/>+55 (85)981155875
              </S.ContacItems>
              <S.ContacItems>
                  <MdEmail className="contactIcon"/>shopbetania@gmail.com
              </S.ContacItems>
              <S.PayTitle>Payment</S.PayTitle> 
              <S.Image src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png" alt="payment" />
            </S.Right>
        </S.Container>
    )
}