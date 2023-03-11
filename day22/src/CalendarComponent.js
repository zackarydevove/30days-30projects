import { useState } from 'react'
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
    {
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      title: 'Event 1'
    },
    {
      start: moment().add(2, 'days').toDate(),
      end: moment().add(3, 'days').toDate(),
      title: 'Event 2'
    },
    {
      start: moment().add(4, 'days').toDate(),
      end: moment().add(5, 'days').toDate(),
      title: 'Event 3'
    }
  ];

function CalendarComponent() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleSelectEvent = (e) => {
      console.log(e);
    };
  
    const handleSelectSlot = (slotInfo) => {
      console.log(slotInfo);
    };
  
    return (
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        defaultDate={selectedDate}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
    );
  };

export default CalendarComponent
