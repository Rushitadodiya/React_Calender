import React from 'react';
import './Calendar1.css';

const C2 = () => {
    const days1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const days = ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"];

    // Generate example calendar data for the month of April
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();


    return (
        <div className="body">
            <div className="calendar">
                <h2 className="month-header" style={{ float: 'left' }}>April {currentYear} </h2>
                <h2 style={{ margin: '0px', marginLeft: '750px', fontSize: '40px', color: 'maroon', marginBottom: '0px' }}>હરિધામ,સોખડા-39174,જી.વડોદરા.</h2>
                <h3 className="s2080" style={{ float: 'left', marginLeft: '0px' }}>સંવત 2080 </h3>
                <h3 style={{ marginLeft: '100px' }}> શ્રી સ્વામિનારાયણ સંવત 243</h3>
                <div className="days">
                    {days.map((day, index, days1) => (
                        <h1 key={index} className="day" style={{ color: (day == "રવિ") ? 'red' : 'Brown', height: '10px' }}>{day}</h1>

                    ))}

                    {[...Array(firstDayOfMonth).keys()].map((_, index) => (
                        <div key={index}></div>
                    ))}
                    {[...Array(daysInMonth).keys()].map((day) => (
                        <h1 key={day + 7} className={`day ${currentDate.getDate() === day + 1 ? "today" : ""}`}>
                            {day + 1}
                        </h1>
                    ))}
                </div>
            </div></div>
    );
}



export default C2;
