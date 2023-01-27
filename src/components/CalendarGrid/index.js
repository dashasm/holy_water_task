import { useMemo } from "react";

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

export const CalendarGrid = ({ startDay, today }) => {
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
