import styled from "styled-components";

export const Title = styled.h1`
   font-weight: 700;
    font-size: 48px;
    line-height: 62px;
    color: #17171b;
    max-width: 700px;
    margin: 140px 0 60px ;
`;

export const List = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
row-gap: 50px;
column-gap: 30px;

@media (max-width: 835px) {
grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 500px) { 
grid-template-columns: 1fr;
}
`;

export const Input= styled.input`
width: 40%;
font-size: 1.2rem;
border-color: #17171b;
padding: 0.5rem 1rem;
border-radius: 7px;
margin-bottom: 7%;
text-align: center;
:hover {
    
}
`;

export const SearchContainer = styled.div`
text-align: center;
`;

