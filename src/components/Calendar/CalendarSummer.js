import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CalendarSummer = () => {
const defaultValue = {
    year: 2023,
    month: 7,
    day: 1
  } 
  const defaultFrom = {
    year: 2023,
    month: 7,
    day: 10
  };

  const defaultTo = {
    year: 2023,
    month: 8,
    day: 18
  };

  const minimumDate = {
    year: 2023,
    month: 6,
    day: 1
  };

  const maximumDate = {
    year: 2024,
    month: 1,
    day: 31
  }

  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(
    defaultRange
  );

  const [selectedDay, setSelectedDay] = useState(
    defaultValue
  );
  return (
    
<Calendar
      value={selectedDayRange}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      colorPrimary="#973eb1" 
      colorPrimaryLight="#ecd9f2"
      customDaysClassName={[
        //childcare offered is purple day
        { year: 2023, month: 7, day: 3,  className: 'purpleDay' },
        { year: 2023, month: 7, day: 5,  className: 'purpleDay' },
        { year: 2023, month: 7, day: 7, className: 'purpleDay' },
        { year: 2023, month: 7, day: 6, className: 'purpleDay' },

        { year: 2023, month: 8, day: 21, className: 'purpleDay' },
     { year: 2023, month: 8, day: 22,  className: 'purpleDay' },
        { year: 2023, month: 8, day: 23,  className: 'purpleDay' },
        { year: 2023, month: 8, day: 24, className: 'purpleDay' },
        { year: 2023, month: 8, day: 25, className: 'purpleDay' }, 
        { year: 2023, month: 8, day: 28,  className: 'purpleDay' },  
        { year: 2023, month: 8, day: 29,  className: 'purpleDay' },
        { year: 2023, month: 8, day: 30,  className: 'purpleDay' },
        { year: 2023, month: 8, day: 31,  className: 'purpleDay' },
        { year: 2023, month: 8, day: 1, className: 'purpleDay' },
        { year: 2023, month: 6, day: 26, className: 'purpleDay' },
        { year: 2023, month: 6, day: 27, className: 'purpleDay' },          
        { year: 2023, month: 6, day: 28, className: 'purpleDay' }, 
        { year: 2023, month: 6, day: 29, className: 'purpleDay' },        
        { year: 2023, month: 6, day: 30, className: 'purpleDay' },  
        { year: 2023, month: 9, day: 1, className: 'purpleDay' }, 

        //school closed is orange day
        { year: 2023, month: 4, day: 7,  className: 'orangeDay' },
        { year: 2023, month: 12, day: 23, className: 'orangeDay' },
        { year: 2023, month: 12, day: 24, className: 'orangeDay' },
        { year: 2023, month: 12, day: 25, className: 'orangeDay' },
        { year: 2023, month: 12, day: 26, className: 'orangeDay' },
        { year: 2023, month: 12, day: 27, className: 'orangeDay' },
        { year: 2023, month: 12, day: 28, className: 'orangeDay' },
        { year: 2023, month: 12, day: 29, className: 'orangeDay' },
        { year: 2023, month: 12, day: 30, className: 'orangeDay' },
        { year: 2023, month: 12, day: 31, className: 'orangeDay' },
        { year: 2024, month: 1, day: 1, className: 'orangeDay' },
        { year: 2023, month: 7, day: 4, className: 'orangeDay' },
      ]}
    />
  );
};

export default CalendarSummer;
