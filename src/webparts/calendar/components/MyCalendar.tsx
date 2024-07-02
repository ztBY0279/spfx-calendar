import * as React from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import * as moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
const localizer = momentLocalizer(moment)

const myEventsList = [
    {
      title: 'Event 1',
      start: new Date(2024, 6, 1), // July 1st, 2024
      end: new Date(2024, 6, 2),   // July 2nd, 2024
    },
    {
      title: 'Event 2',
      start: new Date(2024, 6, 5), // July 5th, 2024
      end: new Date(2024, 6, 7),   // July 7th, 2024
    },
    // Add more events as needed
  ];

const MyCalendar = (): JSX.Element => (
    //console.log('the value of props is',props);
    
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
    />
  </div>
)
export default MyCalendar;