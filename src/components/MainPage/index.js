import { useMemo, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

import { CalendarGrid } from "../CalendarGrid";
import { Monitor } from "../Monitor";
import { Form } from "../Form";
import { ShadowWrapper } from "../stylesComponents";
import { AllEventsForDay } from "../AllEventsForDay";

export const MainPage = () => {
  moment.updateLocale("en", { week: { dow: 1 } });

  const { selectedEvent, showList } = useSelector((state) => state);

  const [today, setToday] = useState(moment());
  const [isOpenForm, setIsOpenForm] = useState(false);

  const startDay = useMemo(() => {
    return today.clone().startOf("month").startOf("week");
  }, [today]);

  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));
  const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));

  const handleDate = (date) => {
    setToday(moment(date));
  };

  return (
    <>
      {selectedEvent || isOpenForm ? (
        <Form isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
      ) : null}

      {showList && <AllEventsForDay />}
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
