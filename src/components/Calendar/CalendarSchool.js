import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CalendarSchool = () => {
const defaultValue = {
    year: 2024,
    month: 9,
    day: 1
  } 

  const minimumDate = {
    year: 2024,
    month: 9,
    day: 1
  };

  const maximumDate = {
    year: 2025,
    month: 6,
    day: 30
  }

  

  const [selectedDay, setSelectedDay] = useState(
    defaultValue
  );
  return (
    
<Calendar
      value={selectedDay}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      customDaysClassName={[
        //school closed is orange day
        { year: 2024, month: 9, day: 2,  className: 'orangeDay' },
        { year: 2024, month: 10, day: 14, className: 'orangeDay' },

        { year: 2024, month: 11, day: 11, className: 'orangeDay' },
        { year: 2024, month: 11, day: 28, className: 'orangeDay' },        
        { year: 2024, month: 11, day: 29,  className: 'orangeDay' },
        
        { year: 2024, month: 12, day: 23, className: 'orangeDay' },
        { year: 2024, month: 12, day: 24, className: 'orangeDay' },
        { year: 2024, month: 12, day: 25, className: 'orangeDay' },
        { year: 2024, month: 12, day: 26, className: 'orangeDay' },
        { year: 2024, month: 12, day: 27, className: 'orangeDay' },
        { year: 2024, month: 12, day: 28, className: 'orangeDay' },
        { year: 2024, month: 12, day: 29, className: 'orangeDay' },
        { year: 2024, month: 12, day: 30, className: 'orangeDay' },
        
        { year: 2024, month: 12, day: 31, className: 'orangeDay' },
        
        { year: 2025, month: 1, day: 1, className: 'orangeDay' },
        { year: 2025, month: 1, day: 20, className: 'orangeDay' },

        { year: 2025, month: 2, day: 17, className: 'orangeDay' },

        { year: 2025, month: 5, day: 26, className: 'orangeDay' },

        { year: 2025, month: 6, day: 19, className: 'orangeDay' },
//////////////////////
       // { year: 2023, month: 4, day: 7, className: 'orangeSnowDay' },
//snowday is snow day
       { year: 2025, month: 5, day: 22, className: 'purpleSnowDay' },
       { year: 2025, month: 5, day: 23, className: 'purpleSnowDay' },
       { year: 2025, month: 5, day: 27, className: 'purpleSnowDay' },
       { year: 2025, month: 5, day: 28, className: 'purpleSnowDay' },
//conference day is navy blue day
        { year: 2024, month: 9, day: 3,  className: 'navyBlueDay' },
        
        { year: 2024, month: 10, day: 3,  className: 'navyBlueDay' },
        { year: 2024, month: 2, day: 20, className: 'navyBlueDay' },        
        { year: 2025, month: 2, day: 18, className: 'navyBlueDay' },
        { year: 2025, month: 3, day: 14, className: 'navyBlueDay' },
        { year: 2025, month: 6, day: 23, className: 'navyBlueDay' },
//closing day is yellow day 
        { year: 2024, month: 11, day: 5, className: 'yellowDay' },
        { year: 2024, month: 11, day: 27, className: 'yellowDay' }, 
        { year: 2025, month: 6, day: 20,  className: 'yellowDay' },
//vacation day is purpleday
        { year: 2025, month: 2, day: 21,  className: 'purpleDay' },
        { year: 2025, month: 2, day: 20, className: 'purpleDay' },
        { year: 2025, month: 2, day: 19, className: 'purpleDay' },

        { year: 2025, month: 4, day: 15,  className: 'purpleDay' },
        { year: 2025, month: 4, day: 16,  className: 'purpleDay' },
        { year: 2025, month: 4, day: 17, className: 'purpleDay' },
        { year: 2025, month: 4, day: 18, className: 'purpleDay' }, 
        { year: 2025, month: 4, day: 14,  className: 'purpleDay' }, 

        { year: 2025, month: 6, day: 26,  className: 'purpleDay' },
        { year: 2025, month: 6, day: 27,  className: 'purpleDay' },
        { year: 2025, month: 6, day: 30,  className: 'purpleDay' },
        { year: 2025, month: 6, day: 24, className: 'purpleDay' },
        { year: 2025, month: 6, day: 25, className: 'purpleDay' },  
       
      ]}
    />         
  );
};

export default CalendarSchool;
