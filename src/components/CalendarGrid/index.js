import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { isCurrentDay, isSelectedMonth } from "../../helpers";
import { EventsList } from "../EventsList";
import {
  GridWrapper,
  CellWrapper,
  DateWrapper,
  CurrentDay,
  DayWrapper,
} from "./style";
import { totalDays } from "../../constants";
import { setSelectedDay } from "../../eventsSlice";

export const CalendarGrid = ({ startDay, today }) => {
  const dispatch = useDispatch();

  let day = startDay.clone().subtract(1, "day");

  const daysArray = useMemo(() => {
    return [...Array(totalDays)].map(() => day.add(1, "day").clone());
  }, [day]);

  return (
    <GridWrapper>
      {daysArray.map((elem, i) => (
        <CellWrapper
          key={elem}
          isWeekday={elem.day() === 6 || elem.day() === 0}
          onClick={() => {
            console.log(elem.format('X'), elem)
            dispatch(setSelectedDay({
              date: +elem.format('X')
            }))
          }}
        >
          <DateWrapper>
            {isCurrentDay(elem) ? (
              <CurrentDay>{elem.format("DD")}</CurrentDay>
            ) : (
              <DayWrapper isSelectedMonth={isSelectedMonth(elem, today)}>
                {elem.format("DD")}
              </DayWrapper>
            )}
            <DayWrapper isSelectedMonth={isSelectedMonth(elem, today)}>
              {elem.format("ddd")}
            </DayWrapper>
          </DateWrapper>

          <EventsList elem={elem} />
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};
