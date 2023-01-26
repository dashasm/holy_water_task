import { useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

import {
  FormPositionWrapper,
  FormWrapper,
  EventHeader,
  TitleWrapper,
  EventTitle,
  EventDate,
  EventCloseButton,
  InputWrapper,
  InputTitleHeader,
  Input,
  ErrorText,
  EventBody,
  DateWrapper,
  InputDate,
  Driver,
  ButtonsWrapper,
  ButtonWrapper,
  DeleteIconButton,
  InputTime,
} from "./style";
import DeleteIcon from "../../icons/delete.svg";
import { setEvents, setSelectedEvent, setNewDate } from "../../eventsSlice";
import { url } from "../../constants";

export const Form = ({ isOpenForm, setIsOpenForm }) => {
  const { selectedEvent, newDate, events } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    title: "",
    date: "",
  });
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: moment().format("DD.MM.YYYY"),
    time: "00:00",
  });

  const cancelButtonHandler = () => {
    dispatch(setSelectedEvent(null));
    dispatch(setNewDate(null));
    setIsOpenForm(false);

    setErrors({
      date: "",
      title: "",
    });
  };

  console.log(selectedEvent, newEvent)

  const changeEventHandler = (text, field) => {
    if (selectedEvent) {
      const newEvent = {
        ...selectedEvent,
        [field]: text,
      };
      dispatch(setSelectedEvent(newEvent));
    } else {
      setNewEvent((prev) => ({
        ...prev,
        [field]: text,
      }));
    }
    setErrors({
      date: "",
      title: "",
    });
  };

  const removeEventHandler = () => {
    const fetchUrl = `${url}/events/${selectedEvent.id}`;
    const httpMethod = "DELETE";

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const newEvents = events.filter(
          (eventEl) => eventEl.id !== selectedEvent.id
        );
        dispatch(setEvents(newEvents));
        cancelButtonHandler();
      });
  };

  const createEvent = () => {
    const fetchUrl = `${url}/events`;
    const httpMethod = "POST";

    if (!moment(newEvent.date, "DD.MM.YYYY", true).isValid()) {
      setErrors((prev) => ({
        ...prev,
        date: "Incorrect date format",
      }));
      return;
    }

    if (!newEvent.title.length) {
      setErrors((prev) => ({
        ...prev,
        title: "The title cannot be empty",
      }));
      return;
    }

    const id = events.length
      ? Math.max(...events.map((elem) => elem.id)) + 1
      : 1;

    const postEvent = {
      ...newEvent,
      id,
      date: +moment(newEvent.date, "DD.MM.YYYY").format("X"),
      createdAt: moment().format("DD.MM.YYYY hh:mm"),
    };

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postEvent),
    })
      .then((res) => res.json())
      .then((res) => {
        const newEvents = [...events, postEvent];

        dispatch(setEvents(newEvents));
        cancelButtonHandler();
      });
  };

  const updateEvent = () => {
    const fetchUrl = `${url}/events/${selectedEvent.id}`;
    const httpMethod = "PUT";

    if (!moment(newDate, "DD.MM.YYYY", true).isValid()) {
      setErrors((prev) => ({
        ...prev,
        date: "Incorrect date format",
      }));
      return;
    }

    if (!selectedEvent.title.length) {
      setErrors((prev) => ({
        ...prev,
        title: "The title cannot be empty",
      }));
      return;
    }

    const newEvent = {
      ...selectedEvent,
      date: +moment(newDate, "DD.MM.YYYY").format("X"),
    };

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((res) => {
        const newEvents = events.map((eventEl) => {
          if (eventEl.id !== selectedEvent.id) {
            return eventEl;
          }

          return newEvent;
        });

        dispatch(setEvents(newEvents));
        cancelButtonHandler();
      });
  };

  const updateDate = (date) => {
    if (selectedEvent) {
      setErrors({
        date: "",
        title: "",
      });

      dispatch(setNewDate(date));
    } else {
      setNewEvent((prev) => ({
        ...prev,
        date,
      }));
    }
  };

  return (
    <FormPositionWrapper onClick={cancelButtonHandler}>
      <FormWrapper onClick={(e) => e.stopPropagation()}>
        <EventHeader>
          <TitleWrapper>
            <EventTitle>{isOpenForm ? "Add new item" : "Edit item"}</EventTitle>
            {selectedEvent && (
              <EventDate>Created at: {selectedEvent.createdAt}</EventDate>
            )}
          </TitleWrapper>
          <EventCloseButton onClick={cancelButtonHandler}>+</EventCloseButton>
        </EventHeader>

        <InputWrapper>
          <InputTitleHeader>Title *</InputTitleHeader>
          <Input
            value={selectedEvent ? selectedEvent.title : newEvent.title}
            onChange={(e) => changeEventHandler(e.target.value, "title")}
          />
          <ErrorText>{errors.title}</ErrorText>
        </InputWrapper>

        <InputWrapper>
          <InputTitleHeader>Description</InputTitleHeader>
          <EventBody
            value={
              selectedEvent ? selectedEvent.description : newEvent.description
            }
            onChange={(e) => changeEventHandler(e.target.value, "description")}
          />
        </InputWrapper>

        <InputWrapper>
          <DateWrapper>
            <div>
              <InputTitleHeader>Date</InputTitleHeader>
              <InputDate
                onChange={(e) => updateDate(e.target.value)}
                value={selectedEvent ? newDate : newEvent.date}
              />
              <ErrorText>{errors.date}</ErrorText>
            </div>

            <div>
              <InputTitleHeader>Begin time</InputTitleHeader>
              <InputTime
                type="time"
                value={selectedEvent.time ? selectedEvent.time : newEvent.time}
                onChange={(e) => changeEventHandler(e.target.value, "time")}
              />
            </div>
          </DateWrapper>
        </InputWrapper>

        <Driver></Driver>

        <ButtonsWrapper>
          {selectedEvent && (
            <ButtonWrapper background="red">
              <DeleteIconButton
                src={DeleteIcon}
                alt="delete"
                onClick={removeEventHandler}
              />
            </ButtonWrapper>
          )}
          <ButtonWrapper
            background="#464648"
            onClick={() => {
              if (selectedEvent) {
                updateEvent();
              } else {
                createEvent();
              }
            }}
          >
            Save
          </ButtonWrapper>
        </ButtonsWrapper>
      </FormWrapper>
    </FormPositionWrapper>
  );
};
