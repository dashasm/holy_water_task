import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { setShowList, setSelectedEvent, setNewDate } from "../../eventsSlice";
import {
  FormPositionWrapper,
  FormWrapper,
  EventTitle,
  EventHeader,
  TitleWrapper,
  EventCloseButton,
  InputTitleHeader,
} from "../stylesComponents";
import { InputWrapper, Driver, Container, EventWrapper } from "./style";

export const AllEventsForDay = () => {
  const dispatch = useDispatch();

  const { showList } = useSelector((state) => state);

  const cancelButtonHandler = () => {
    dispatch(setShowList(null));
  };

  const openFormHandler = (event) => {
    dispatch(setShowList(null));
    dispatch(setSelectedEvent(event));
    dispatch(setNewDate(moment.unix(event.date).format("DD.MM.YYYY")));
  };

  return (
    <FormPositionWrapper onClick={cancelButtonHandler}>
      <FormWrapper>
        <EventHeader>
          <TitleWrapper>
            <EventTitle>{showList.date}</EventTitle>
          </TitleWrapper>
          <EventCloseButton onClick={cancelButtonHandler}>+</EventCloseButton>
        </EventHeader>

        <Driver></Driver>
        {showList.events.map((elem) => {
          return (
            <EventWrapper key={elem.id} onClick={() => openFormHandler(elem)}>
              <Container>
                <InputWrapper>
                  <InputTitleHeader>Title</InputTitleHeader>
                  <div>{elem.title}</div>
                </InputWrapper>

                <div>{elem.time}</div>
              </Container>
            </EventWrapper>
          );
        })}
      </FormWrapper>
    </FormPositionWrapper>
  );
};
