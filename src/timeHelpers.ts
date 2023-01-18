import { TimeDelta } from "./types/TimeDelta";

export const addHoursToDate = (date: Date, hours: number): Date => {
  const newDate = new Date(date.getTime());
  newDate.setHours(newDate.getHours() + hours);
  return newDate;
};

export const addDaysToDate = (date: Date, days: number): Date => {
  return addHoursToDate(date, days * 24);
};

export const addWeeksToDate = (date: Date, weeks: number): Date => {
  return addDaysToDate(date, weeks * 7);
};

export const addMonthsToDate = (date: Date, months: number): Date => {
  const newDate = new Date(date.getTime());
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

export const addYearsToDate = (date: Date, years: number): Date => {
  const newDate = new Date(date.getTime());
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};

const toDateLookup = {
  hours: addHoursToDate,
  days: addDaysToDate,
  weeks: addWeeksToDate,
  months: addMonthsToDate,
  years: addYearsToDate,
};

export const getTimeDeltaMs = (date: Date, delta: TimeDelta): number => {
  const currentMs = date.getTime();
  return (Object.keys(delta) as (keyof TimeDelta)[]).reduce((prev, curr) => {
    if (delta[curr] === 0) {
      return prev;
    }

    const newMs = toDateLookup[curr](date, delta[curr]).getTime();

    const diff = newMs - currentMs;

    return prev + diff;
  }, 0);
};

export const addTimeDelta = (date: Date, delta: TimeDelta): Date => {
  console.log("calcing");
  return new Date(date.getTime() + getTimeDeltaMs(date, delta));
};
