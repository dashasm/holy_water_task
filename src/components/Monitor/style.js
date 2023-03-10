import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1e1f21;
  color: #dcdddd;
  padding: 16px;
  position: relative;
  border-bottom: 1px solid white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  border: unset;
  background-color: ${(props) => (props.unPressed ? "#27282A" : "#565759")};
  border: 1px solid #565759;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  color: ${(props) => (props.unPressed ? "#a4a6a9" : "#E6E6E6")};
  outline: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodayButton = styled.div`
  font-weight: bold;
  padding: 10px;
`;

export const ButtonForm = styled.button`
  background: blue;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-size: 25px;
  color: white;
`;

export const InputDate = styled.input`
  width: 31px;
  height: 30px;
  outline: none;
  opacity: 0;
  position: relative;
  z-index: 10;
`;

export const Label = styled.label`
  position: relative;
  width: 40px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-left: 20px;
`;

export const Calendar = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 9px;
  top: 3px;
`;
