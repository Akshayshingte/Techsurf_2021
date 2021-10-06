import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";


const locales = {
    "en-IN": require("date-fns/locale/en-IN"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Team Meeting",
        start: new Date("10/10/2021 9:00 AM"),
        end: new Date("10/10/2021 11:00 AM"),
    },
    {
        title: "Project Discussion with IT Team",
        start: new Date("10/10/2021 01:30 PM"),
        end: new Date("10/10/2021 04:30 PM"),
    },
    {
        title: "Meeting with Manager",
        start: new Date("10/10/2021 05:00 PM"),
        end: new Date("10/10/2021 07:30 PM"),
    },
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div className = "Container">

                <input type="text" placeholder="Add New event" style={{ width: "20%", marginRight: "10px", padding: "5px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Choose Start Date & Time" style={{ marginRight: "10px" }} showTimeSelect dateFormat='MM/dd/yyyy EE hh:mm a' selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="Choose End Date & Time" selected={newEvent.end} showTimeSelect dateFormat='MM/dd/yyyy EE hh:mm a' onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <input type = "button" value = "Add Events" button style={{ marginTop: "10px" }} onClick={handleAddEvent} />
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default App;
