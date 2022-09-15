import { Calendar as CalendarTine } from "@mantine/dates";
import { handleCalendar } from "../../redux/calendar/calendarSlicer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Calendar = () => {
  const dispatch = useAppDispatch();

  const calendarValue = useAppSelector((state) => state.calendar.value);
  return (
    <>
      <CalendarTine
        onChange={(value: Date) => dispatch(handleCalendar(value))}
        onMonthChange={(value: Date) => dispatch(handleCalendar(value))}
        value={calendarValue}
        locale="pt-br"
        size="lg"
        firstDayOfWeek="sunday"
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
