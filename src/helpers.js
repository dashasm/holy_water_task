import moment from "moment";

export const isCurrentDay = (day) => moment().isSame(day, "day");
export const isSelectedMonth = (day, today) => today.isSame(day, "month");
