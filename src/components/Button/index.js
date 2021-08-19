
import styled from 'styled-components';

const Button = styled.button`
  background-color: #1D537D;
  color: #fff ;
  border-radius: 8px;
  border: 0;

  width: 100%;
  margin-top: 20px;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .8;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;


export default Button;
