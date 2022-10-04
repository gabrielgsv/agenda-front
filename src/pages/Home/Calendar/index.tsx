import { Indicator } from "@mantine/core";
import { Calendar as CalendarTine } from "@mantine/dates";
import { useEffect, useState } from "react";
import { handleCalendar } from "../../../redux/calendar/calendarSlicer";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getDaysNotification } from "./service";

const Calendar = () => {
  interface IDaysNotification {
    [x: number]: {
      [x: number]: number[];
    };
  }

  const [daysNotification, setDaysNotification] = useState<IDaysNotification>(
    {}
  );

  function getDays(date: Date) {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    getDaysNotification(month, year).then((res) => {
      let days: number[] = [];
      res.data.forEach((item) => {
        days = [...days, new Date(item.dateTime).getDate()];
      });

      setDaysNotification({
        ...daysNotification,
        [year]: {
          ...daysNotification?.[year],
          [month]: days,
        },
      });
    });
  }

  useEffect(() => {
    getDays(new Date());
  }, []);

  const dispatch = useAppDispatch();
  const calendarValue = useAppSelector((state) => state.calendar.value);
  return (
    <>
      <CalendarTine
        onChange={(value: Date) => dispatch(handleCalendar(value))}
        onMonthChange={(value: Date) => {
          dispatch(handleCalendar(value));
          getDays(value);
        }}
        value={calendarValue}
        locale="pt-br"
        size="lg"
        firstDayOfWeek="sunday"
        renderDay={(date) => {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const days = daysNotification?.[year]?.[month];

          return (
            <Indicator
              size={9}
              position="top-center"
              color="red"
              offset={8}
              disabled={days ? !days.includes(day) : true}
            >
              <>{day}</>
            </Indicator>
          );
        }}
        styles={() => ({
          calendarBase: {
            width: "900px",
          },
        })}
      />
    </>
  );
};

export default Calendar;
