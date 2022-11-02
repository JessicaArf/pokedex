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