import styled from "styled-components";

const ShadowWrapper = styled.div`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
  display: flex;
  flex-direction: column;
`;

export const EventTitle = styled.div`
  font-size: 25px;
  padding-bottom: 5px;
`;

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

export const FormPositionWrapper = styled.div`
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled(ShadowWrapper)`
  width: 320px;
  min-width: 320px;
  background-color: #1e1f21;
  color: #dddddd;
  box-shadow: unset;
  padding: 10px;
`;

export const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: unset;
`;

export const EventCloseButton = styled.div`
  font-size: 35px;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const EventDate = styled.div`
  font-size: 13px;
  color: #555759;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const InputTitleHeader = styled.div`
  color: #7a7a7a;
  margin-bottom: 5px;
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
