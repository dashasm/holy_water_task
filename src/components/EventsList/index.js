import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { setSelectedEvent, setNewDate } from "../../eventsSlice";
import {
  EventListWrapper,
  EventListItemWrapper,
  EventItemWrapper,
} from "./style";

export const EventsList = ({ elem }) => {
  const { events } = useSelector((state) => state);
  const dispatch = useDispatch();

  const openFormHandler = (event) => {
    dispatch(setSelectedEvent(event));
    dispatch(setNewDate(moment.unix(event.date).format("DD.MM.YYYY")));
  };

  return (
    <EventListWrapper>
      {events
        .filter(
          (event) =>
            event.date >= elem.format("X") &&
            event.date <= elem.clone().endOf("day").format("X")
        )
        .slice(0, 2)
        .map((event) => (
          <EventListItemWrapper key={event.id}>
            <EventItemWrapper onDoubleClick={() => openFormHandler(event)}>
              {event.title}
            </EventItemWrapper>
          </EventListItemWrapper>
        ))}
      {events.length > 2 ? (
        <EventListItemWrapper key="show more">
          <EventItemWrapper>show more...</EventItemWrapper>
        </EventListItemWrapper>
      ) : null}
    </EventListWrapper>
  );
};
