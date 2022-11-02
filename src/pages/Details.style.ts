import styled from "styled-components";

export const Container = styled.div`
 height: calc(100vh - 6rem);
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 3rem 0;

 @media (max-width: 950px) {
 flex-direction: column;
 text-align: center;
 }
`;

export const Image = styled.img`
 max-height: 55vh;
 margin-right: 10%;

 @media (max-width: 950px) {
 margin-bottom: 15px;
 }

 @media (max-width: 700px){
  max-height: 38vh;
 }

 @media (max-width: 380px) {
  max-height: 30vh;
  
 }

`;

export const Card = styled.div`
 border: 4px solid #ccc;
 padding: 3%;
 width: 25vw;
 height: 50vh;
 border-radius: 20px;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

 @media (max-width: 950px) {
 width: 50vw;
 height: 38vh;
 }

 @media (max-width: 770px) {
  height: 40vh;
 }

 
 @media (max-width: 700px) {
  height: 55vh;
  width: 55vw;
 }

  
 @media (max-width: 395px) {
  height: 70vh;
  width: 60vw;
 }

&.type--bug {
  background-color: #8bd674;
  border-color: #8cb230;
}
&.type--dark {
  background-color: #6f6e78;
  border-color: #58575f;
}
&.type--dragon {
  background-color: #7383b9;
  border-color: #0f6ac0;
}
&.type--electric {
  background-color: #f2cb55;
  border-color: #eed535;
}
&.type--fairy {
  background-color: #eba8c3;
  border-color: #ed6ec7;
}
&.type--fighting {
  background-color: #eb4971;
  border-color: #d04164;
}
&.type--fire {
  background-color: #ffa756;
  border-color: #fd7d24;
}
&.type--flying {
  background-color: #83a2e3;
  border-color: #748fc9;
}
&.type--ghost {
  background-color: #8571be;
  border-color: #556aae;
}
&.type--grass {
  background-color: #8bbe8a;
  border-color: #62b957;
}
&.type--ground {
  background-color: #f78551;
  border-color: #dd7748;
}
&.type--ice {
  background-color: #91d8df;
  border-color: #61cec0;
}
&.type--normal {
  background-color: #b5b9c4;
  border-color: #9da0aa;
}
&.type--poison {
  background-color: #9f6e97;
  border-color: #a552cc;
}
&.type--psychic {
  background-color: #ff6568;
  border-color: #a552cc;
}
&.type--rock {
  background-color: #d4c294;
  border-color: #baab82;
}
&.type--steel {
  background-color: #4c91b2;
  border-color: #4a90da;
}
&.type--water {
  background-color: #58abf6;
  border-color: #4a90da;
}
`;

export const Number = styled.span`
font-weight: 700;
font-size: 1.3rem;
line-height: 16px;
color: rgba(23, 23, 27, 0.6);
`;

export const Title = styled.h1`
 font-weight: 700;
 font-size: 3rem;
 line-height: 35px;
 color: #ffffff;
 margin-top: 3%;
 margin-bottom: 8%;

 @media (max-width: 950px) {
 margin-bottom: 10%;
 }
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: #ffffff;
  margin-top: 0.8rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  color: rgba(23, 23, 27, 0.6);
  cursor: pointer;

  &:active{
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

export const Label = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: rgba(23, 23, 27, 0.6);
  `;

  export const Value = styled.p`
   font-weight: 700;
   font-size: 36px;
   line-height: 40px;
   color: #ffffff;
  `;
