import CalendarIcon from "../../icons/calendar.svg";

import {
  DivWrapper,
  ButtonsWrapper,
  ButtonWrapper,
  TodayButton,
  ButtonForm,
  InputDate,
  Label,
  Calendar,
} from "./style";

export const Monitor = ({
  today,
  prevHandler,
  nextHandler,
  setIsOpenForm,
  handleDate,
}) => {
  return (
    <DivWrapper>
      <ButtonForm onClick={() => setIsOpenForm(true)}>+</ButtonForm>
      <ButtonsWrapper>
        <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
        <TodayButton>{today.format("MMMM YY")}</TodayButton>
        <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
        <Label>
          <InputDate type="date" onChange={(e) => handleDate(e.target.value)} />
          <Calendar src={CalendarIcon} alt="calendar" />
        </Label>
      </ButtonsWrapper>
    </DivWrapper>
  );
};
