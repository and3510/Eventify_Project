import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importando os estilos do calendário
import './style.css'; // Importando estilos personalizados

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);

  const loadMarkedDates = () => {
    const storedDates = JSON.parse(localStorage.getItem('markedDates')) || [];
    setMarkedDates(storedDates.map(date => new Date(date)));
  };

  useEffect(() => {
    loadMarkedDates();
    window.addEventListener('storage', loadMarkedDates);

    return () => {
      window.removeEventListener('storage', loadMarkedDates);
    };
  }, []);

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (markedDates.find(d => d.toDateString() === date.toDateString())) {
            return 'myMarkedDate'; // Classe CSS para estilizar a data marcada
          }
        }}
      />
    </div>
  );
};

export default CalendarComponent;
