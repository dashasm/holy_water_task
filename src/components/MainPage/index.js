import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

import { CalendarGrid } from "../CalendarGrid";
import { Monitor } from "../Monitor";
import { Form } from "../Form";
import { setEvents } from "../../eventsSlice";
import { url, totalDays } from "../../constants";
import { ShadowWrapper } from "./style";
import { DayShowComponent } from "../DayContent";

export const MainPage = () => {
  const { selectedEvent, selectedDay } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [today, setToday] = useState(moment());
  const [isOpenForm, setIsOpenForm] = useState(false);

  const startDay = useMemo(() => {
    return today.clone().startOf("month").startOf("week");
  }, [today]);

  moment.updateLocale("en", { week: { dow: 1 } });

  const startDayQuery = useMemo(() => {
    return startDay.clone().format("X");
  }, [startDay]);
  const endDayQuery = useMemo(() => {
    return startDay.clone().add(totalDays, "days").format("X");
  }, [startDay]);

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDayQuery}&date_lte=${endDayQuery}`)
      .then((res) => res.json())
      .then((res) => dispatch(setEvents(res)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDayQuery, startDayQuery]);

  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));
  const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));

  const handleDate = (date) => {
    setToday(moment(date))
  }

  return (
    <>
      {selectedEvent || isOpenForm ? (
        <Form isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
      ) : null}
      {/* {selectedDay ? <DayShowComponent today={today} /> : null} */}
      <ShadowWrapper>
        <Monitor
          today={today}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          setIsOpenForm={setIsOpenForm}
          handleDate={handleDate}
        />
        <CalendarGrid startDay={startDay} today={today} />
      </ShadowWrapper>
    </>
  );
};
