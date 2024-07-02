import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

export default function CalendarFull(): JSX.Element {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,customWorkWeek,customQuarter,customYear,listWeek'
      }}
      views={{
        customWorkWeek: {
          type: 'timeGridWeek',
          duration: { days: 5 },
          buttonText: 'Work Week',
          hiddenDays: [0, 6], // Hide Sunday and Saturday
        },
        customQuarter: {
            type: 'dayGridMonth',
            duration: { months: 3 },
            buttonText: 'Quarter',
            titleFormat: { year: 'numeric', month: 'short' }, // Custom title format for the quarter view
          },
          customYear: {
            type: 'dayGridMonth',
            duration: { year: 1 },
            buttonText: 'Year',
            titleFormat: { year: 'numeric' }, // Custom title format for the year view
          }
        // customQuarter: {
        //   type: 'dayGrid',
        //   duration: { months: 3 },
        //   buttonText: 'Quarter',
        // },
        // customYear: {
        //   type: 'dayGrid',
        //   duration: { years: 1 },
        //   buttonText: 'Year',
        // }
      }}
      events={[
        { title: 'event 1', date: '2024-07-01' },
        { title: 'event 2', date: '2024-04-04' }
      ]}
    />
  );
}


// import * as React from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

// export default function CalendarFull(): JSX.Element {
//   return (
//     <FullCalendar
//       plugins={[ dayGridPlugin ]}
//       initialView="dayGridMonth"
//       headerToolbar={{
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek,customWorkWeek'
//       }}
//     views={{
//         customWorkWeek: {
//           type: 'timeGridWeek',
//           duration: { days: 5 },
//           buttonText: 'Work Week',
//           hiddenDays: [0, 6], // Hide Sunday and Saturday
//         },
//         customQuarter: {
//           type: 'dayGrid',
//           duration: { months: 3 },
//           buttonText: 'Quarter',
//         },
//         customYear: {
//           type: 'dayGrid',
//           duration: { year: 1 },
//           buttonText: 'Year',
//         }
//       }}
//       events={[
//         { title: 'event 1', date: '2024-07-01' },
//         { title: 'event 2', date: '2019-04-04' }
//       ]}
//     />
//   )
// }