import styled from "styled-components";

const TextField = styled.div`
  display: flex;
  /* background: red; */
  input {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    padding: 0 16px;
    box-shadow: none;
    border: none;
    background: ${({ theme }) => theme.palette.grey[200]};
    color: black;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    outline: none;
    border: 3px solid transparent;
    &::placeholder {
      color: ${({ theme }) => theme.palette.grey[600]};
    }
    &:focus {
      border: 3px solid ${({ theme }) => theme.palette.primary.main};
      ${(props) => props.error && `border-color: red`}
    }
    ${(props) => props.error && `border-color: red`}
  }
`;

export const Styled = { TextField };
