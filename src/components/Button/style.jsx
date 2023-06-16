import styled from "styled-components";

export const ButtonStyled = styled.button`
   display: flex;
   padding: 10px;
   border-radius: 10px;
   font-weight: bold;
   font-size: 16px;
   border: 1px solid ${({ theme }) => theme.textColor};
   color: ${({ theme }) => theme.textColor};
   background-color: ${({ theme }) => theme.backgroundColor};
   cursor: pointer;
`;