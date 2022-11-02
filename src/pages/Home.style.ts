import styled from "styled-components";

export const List = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
row-gap: 50px;
column-gap: 30px;

@media (max-width: 950px) {
grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 690px) { 
grid-template-columns: 1fr;
}
`;

export const Input= styled.input`
width: 40%;
font-size: 1.2rem;
padding: 0.5rem 1rem;
border-radius: 7px;
margin-bottom: 10vh;
text-align: center;
border-color: rgba(23, 23, 27, 0.6);
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

:hover {
box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
transition: 0.2s ease;
}

@media (max-width: 500px) {
width: 100%;
}
`;

export const SearchContainer = styled.div`
text-align: center;
`;

