import moment from "moment";

import styled from "styled-components";
import CalendarIcon from "../../icons/calendar.svg";

import {
  DivWrapper,
  ButtonsWrapper,
  ButtonWrapper,
  TodayButton,
  ButtonForm,
} from "./style";

export const InputDate = styled.input`
width: 40px;
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

export const Monitor = ({ today, prevHandler, nextHandler, setIsOpenForm, handleDate }) => {

  return (
    <DivWrapper>
      <ButtonForm onClick={() => setIsOpenForm(true)}>+</ButtonForm>
      <ButtonsWrapper>
        <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
        <TodayButton>{today.format("MMMM YY")}</TodayButton>
        <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
        <Label>
          <InputDate type="date" onChange={(e) => handleDate(e.target.value)}/>
          <Calendar src={CalendarIcon} alt="calendar" />
        </Label>
      </ButtonsWrapper>
    </DivWrapper>
  );
};
