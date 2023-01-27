import styled from "styled-components";

export const EventBody = styled.textarea`
  font-size: 15px;
  width: 100%;
  border: unset;
  background-color: #1e1f21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
  resize: none;
  height: 70px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const ButtonWrapper = styled.div`
  border-radius: 5px;
  background: ${(props) => props.background};
  cursor: pointer;
  height: 40px;
  display: flex;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const InputTime = styled.input`
  background: #7a7a7a;
  border: none;
  outline: none;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: unset;
`;

export const EventDate = styled.div`
  font-size: 13px;
  color: #555759;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid #464648;
  padding-bottom: 5px;
  font-size: 15px;
  width: 100%;
`;

export const InputDate = styled.input`
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #464648;
  color: white;
`;

export const Driver = styled.div`
  height: 1px;
  background: #464648;
  margin: 20px 0;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteIconButton = styled.img`
  width: 20px;
  height: 20px;
`;

export const ErrorText = styled.div`
  padding: 10px 0;
  color: red;
`;
