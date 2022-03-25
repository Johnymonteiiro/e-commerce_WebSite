import { Remove, Add } from "@material-ui/icons";
import { NavBar } from "../../Components/NavBar";
import { Announcement } from "../../Components/index";
import { Footer } from "../../Components/Footer";
import * as S from "./style";

export const Cart = () => {
  return (
    <>
      <NavBar />
      <Announcement />
      <S.Container>
        <S.Wrapper>
          <S.Title>YOUR SHOPS</S.Title>
          <S.Top>
            <S.TopButton>Continue shopping</S.TopButton>
            <S.TopTexts>
              <S.TopText>Shopping Bag(2)</S.TopText>
              <S.TopText>Your Wishlist (0)</S.TopText>
            </S.TopTexts>
            <S.TopButton type="filled">Checkout Now</S.TopButton>
          </S.Top>
          <S.Bottom>
            <S.Info>
              <S.Product>
                <S.ProductDetail>
                  <S.Image src="https://cdn-3.expansion.mx/dims4/default/1bad5a6/2147483647/strip/true/crop/750x624+0+0/resize/1800x1498!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fed%2Ffd%2F5541ae53438297fcbc43fe1077d5%2Fcd0461-601-phcfh001.jpg" />
                  <S.Details>
                    <S.ProductName>
                      <b>Product:</b> Nike Bianche
                    </S.ProductName>
                    <S.ProductId>
                      <b>Id:</b> 53863
                    </S.ProductId>
                    <S.ProductColor color="red" />
                    <S.ProductSize>
                      <b>Size:</b>35.6
                    </S.ProductSize>
                  </S.Details>
                </S.ProductDetail>
                <S.PriceDetail>
                  <S.ProductAmountContainer>
                    <Add />
                    <S.ProductAmount>2</S.ProductAmount>
                    <Remove />
                  </S.ProductAmountContainer>
                  <S.ProductPrice>R$ 65</S.ProductPrice>
                </S.PriceDetail>
              </S.Product>
              <S.Hr />
              <S.Product>
                <S.ProductDetail>
                  <S.Image src="https://static-01.daraz.com.bd/p/fb7adc274fd401d03bd191de11b1aa31.jpg" />
                  <S.Details>
                    <S.ProductName>
                      <b>Product:</b> Winter Black Jacket
                    </S.ProductName>
                    <S.ProductId>
                      <b>Id:</b> 89960
                    </S.ProductId>
                    <S.ProductColor color="black" />
                    <S.ProductSize>
                      <b>Size:</b> 30.5
                    </S.ProductSize>
                  </S.Details>
                </S.ProductDetail>
                <S.PriceDetail>
                  <S.ProductAmountContainer>
                    <Add />
                    <S.ProductAmount>1</S.ProductAmount>
                    <Remove />
                  </S.ProductAmountContainer>
                  <S.ProductPrice>R$ 150</S.ProductPrice>
                </S.PriceDetail>
              </S.Product>
            </S.Info>
            <S.Summary>
              <S.SummaryTitle>Order Summary</S.SummaryTitle>
              <S.SummaryItem>
                <S.SummaryItemText>Subtotal</S.SummaryItemText>
                <S.SummaryItemPrice>R$ 215</S.SummaryItemPrice>
              </S.SummaryItem>
              <S.SummaryItem>
                <S.SummaryItemText>Estimated Shipping</S.SummaryItemText>
                <S.SummaryItemPrice>R$ 15</S.SummaryItemPrice>
              </S.SummaryItem>
              <S.SummaryItem>
                <S.SummaryItemText>Discount Shiiping</S.SummaryItemText>
                <S.SummaryItemPrice>-R$ 15</S.SummaryItemPrice>
              </S.SummaryItem>
              <S.SummaryItem type="total">
                <S.SummaryItemText>Total</S.SummaryItemText>
                <S.SummaryItemPrice>R$ 200</S.SummaryItemPrice>
              </S.SummaryItem>
              <S.Button>Checkout Now</S.Button>
            </S.Summary>
          </S.Bottom>
        </S.Wrapper>
        <Footer />
      </S.Container>
    </>
  );
};
