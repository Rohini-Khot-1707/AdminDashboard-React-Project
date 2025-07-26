import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const events = [
  {
    title: "All Day Event",
    allDay: true,
    start: new Date(2025, 5, 1),
    end: new Date(2025, 5, 1),
  },
  {
    title: "Long Event",
    start: new Date(2025, 5, 7),
    end: new Date(2025, 5, 10),
  },
  {
    title: "Conference",
    start: new Date(2025, 5, 9),
    end: new Date(2025, 5, 11),
  },
  {
    title: "Meeting",
    start: new Date(2025, 5, 10, 10, 30),
    end: new Date(2025, 5, 10, 11, 30),
  },
  {
    title: "Lunch",
    start: new Date(2025, 5, 10, 12, 0),
    end: new Date(2025, 5, 10, 13, 0),
  },
  {
    title: "Birthday Party",
    start: new Date(2025, 5, 11, 7, 0),
    end: new Date(2025, 5, 11, 10, 30),
  },
  {
    title: "Repeating Event",
    start: new Date(2025, 5, 9, 16, 0),
    end: new Date(2025, 5, 9, 17, 0),
  },
];

const CalendarComponent = () => {
  return (
    <div className="container py-3">
      <div className="card shadow-sm border-0 rounded-4 p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 fw-semibold">
            <i className="bi bi-calendar-week me-2"></i>June 2025 Calendar
          </h5>
        </div>
        <div className="rounded overflow-hidden">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            views={["month"]}
            style={{ height: 600 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
