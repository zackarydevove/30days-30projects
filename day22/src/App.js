import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export function App() {

  const handleDateSelect = (info) => {
    let title = prompt('Enter a title for the event')
    if (title === null) return;

    let calendar = info.view.calendar;

    calendar.unselect();

    calendar.addEvent({
      start: info.start,
      end: info.end,
      title: title,
    })
  };

  const handleEventClick = (info) => {
    info.event.remove();
  }

  return (
    <div className='container'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
            left: 'prev,next today',
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        allDaySlot={false}
        initialView="timeGridWeek"
        slotDuration="00:30:00"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
    </div>
  )
}

export default App;