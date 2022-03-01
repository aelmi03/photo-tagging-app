import styled from "styled-components";
const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.tertiary.main};
  color: ${({ theme }) => theme.palette.tertiary.contrastText};
  font-family: "Poppins", sans-serif;
  padding: 0.6rem 5.5rem;
  font-size: 1.8rem;
  border-radius: 5px;
`;

export default Button;
