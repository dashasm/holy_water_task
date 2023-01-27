import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { setSelectedEvent, setNewDate, setShowList } from "../../eventsSlice";
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

  const eventsForDay = events
    .filter(
      (event) =>
        event.date >= elem.format("X") &&
        event.date <= elem.clone().endOf("day").format("X")
    )
    .sort((a, b) => {
      if (moment(a.time).isAfter(moment(b.time))) {
        return 1;
      } else if (moment(a.time).isSame(moment(b.time))) {
        return 0;
      }

      return -1;
    });

  return (
    <EventListWrapper>
      {eventsForDay.slice(0, 2).map((event) => (
        <EventListItemWrapper key={event.id}>
          <EventItemWrapper onDoubleClick={() => openFormHandler(event)}>
            {event.title}
          </EventItemWrapper>
        </EventListItemWrapper>
      ))}
      {events.filter(
        (event) =>
          event.date >= elem.format("X") &&
          event.date <= elem.clone().endOf("day").format("X")
      ).length > 2 ? (
        <EventListItemWrapper key="show more">
          <EventItemWrapper
            onClick={() => {
              dispatch(
                setShowList({
                  events: eventsForDay,
                  date: elem.format("MMMM DD"),
                })
              );
            }}
          >
            Show more...
          </EventItemWrapper>
        </EventListItemWrapper>
      ) : null}
    </EventListWrapper>
  );
};
