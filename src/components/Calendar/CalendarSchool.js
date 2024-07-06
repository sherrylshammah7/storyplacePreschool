import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CalendarSchool = () => {
const defaultValue = {
    year: 2023,
    month: 9,
    day: 1
  } 

  const minimumDate = {
    year: 2023,
    month: 9,
    day: 1
  };

  const maximumDate = {
    year: 2024,
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
        { year: 2023, month: 9, day: 4,  className: 'orangeDay' },
        { year: 2023, month: 10, day: 9, className: 'orangeDay' },
        { year: 2023, month: 11, day: 10, className: 'orangeDay' },
        { year: 2023, month: 11, day: 22, className: 'orangeDay' },        
        { year: 2023, month: 11, day: 24,  className: 'orangeDay' },
        { year: 2023, month: 11, day: 23,  className: 'orangeDay' },
        { year: 2023, month: 12, day: 26, className: 'orangeDay' },
        { year: 2023, month: 12, day: 27, className: 'orangeDay' },
        { year: 2023, month: 12, day: 28, className: 'orangeDay' },
        { year: 2023, month: 12, day: 29, className: 'orangeDay' },
        { year: 2023, month: 12, day: 30, className: 'orangeDay' },
        { year: 2023, month: 12, day: 25, className: 'orangeDay' },
        
        
        { year: 2024, month: 1, day: 1, className: 'orangeDay' },
        { year: 2024, month: 1, day: 15, className: 'orangeDay' },
        { year: 2024, month: 2, day: 19, className: 'orangeDay' },
        
       { year: 2024, month: 3, day: 29, className: 'orangeDay' },
        { year: 2024, month: 5, day: 27, className: 'orangeDay' },
        { year: 2024, month: 6, day: 19, className: 'orangeDay' },
//////////////////////
        { year: 2023, month: 4, day: 7, className: 'orangeSnowDay' },

       //{ year: 2023, month: 2, day: 22, className: 'snowDay' },
//conference day is navy blue day
        { year: 2023, month: 9, day: 5,  className: 'navyBlueDay' },
        { year: 2024, month: 2, day: 20, className: 'navyBlueDay' },        
        //{ year: 2024, month: 2, day: 22, className: 'navyBlueDay' },
        { year: 2024, month: 3, day: 15, className: 'navyBlueDay' },
        { year: 2024, month: 6, day: 21, className: 'navyBlueDay' },
//closing day is yellow day
        { year: 2023, month: 11, day: 7,  className: 'yellowDay' },
//vacation day is purpleday
        { year: 2023, month: 9, day: 1,  className: 'purpleDay' },
        { year: 2024, month: 2, day: 21,  className: 'purpleDay' },
        { year: 2024, month: 2, day: 23, className: 'purpleDay' },
        { year: 2024, month: 2, day: 22, className: 'purpleDay' },

        { year: 2024, month: 4, day: 5,  className: 'purpleDay' },
        { year: 2024, month: 4, day: 1,  className: 'purpleDay' },
        { year: 2024, month: 4, day: 2, className: 'purpleDay' },
        { year: 2024, month: 4, day: 3, className: 'purpleDay' }, 
        { year: 2024, month: 4, day: 4,  className: 'purpleDay' },  
        { year: 2024, month: 6, day: 26,  className: 'purpleDay' },
        { year: 2024, month: 6, day: 27,  className: 'purpleDay' },
        { year: 2024, month: 6, day: 28,  className: 'purpleDay' },
        { year: 2024, month: 6, day: 24, className: 'purpleDay' },
        { year: 2024, month: 6, day: 25, className: 'purpleDay' },  

        { year: 2023, month: 4, day: 7,  className: 'purpleSnowDay' },
        { year: 2023, month: 4, day: 14, className: 'purpleSnowDay' },
        { year: 2023, month: 4, day: 13, className: 'purpleSnowDay' },
        { year: 2023, month: 4, day: 12, className: 'purpleSnowDay' },
        { year: 2023, month: 4, day: 11, className: 'purpleSnowDay'},
        { year: 2023, month: 4, day: 10, className: 'purpleSnowDay'},      
       
      ]}
    />         
  );
};

export default CalendarSchool;
