import styled from "styled-components";

export const Card = styled.div`
 max-width: 100%;
 min-height: 115px;
 border-radius: 10px;
 padding: 20px;
 position: relative;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &.card.type--bug {
    background-color: #8bd674;
  }
  &.card.type--dark {
    background-color: #6f6e78;
  }
  &.card.type--dragon {
    background-color: #7383b9;
  }
  &.card.type--electric {
    background-color: #f2cb55;
  }
  &.card.type--fairy {
    background-color: #eba8c3;
  }
  &.card.type--fighting {
    background-color: #eb4971;
  }
  &.card.type--fire {
    background-color: #ffa756;
  }
  &.card.type--flying {
    background-color: #83a2e3;
  }
  &.card.type--ghost {
    background-color: #8571be;
  }
  &.card.type--grass {
    background-color: #8bbe8a;
  }
  &.card.type--ground {
    background-color: #f78551;
  }
  &.card.type--ice {
    background-color: #91d8df;
  }
  &.card.type--normal {
    background-color: #b5b9c4;
  }
  &.card.type--poison {
    background-color: #9f6e97;
  }
  &.card.type--psychic {
    background-color: #ff6568;
  }
  &.card.type--rock {
    background-color: #d4c294;
  }
  &.card.type--steel {
    background-color: #4c91b2;
  }
  &.card.type--water {
    background-color: #58abf6;
  }

`;

export const Number = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: rgba(23, 23, 27, 0.6);
`;

export const Title = styled.p`
 font-weight: 700;
 font-size: 1.8rem;
 line-height: 34px;
 color: #ffffff;
 margin-bottom: 3%;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 120px;
  position: absolute;
  top: -30px;
  right: 12px;
`;