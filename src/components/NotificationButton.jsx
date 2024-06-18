import React from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationButton = ({ eventDate }) => {
  const handleNotificationClick = () => {
    // Verifica se já há datas marcadas no localStorage
    let storedDates = JSON.parse(localStorage.getItem('markedDates')) || [];
    
    // Adiciona a data específica (01/05/2024) ao localStorage
    const specificDate = new Date('2024-05-02');
    storedDates.push(specificDate.toISOString().split('T')[0]); // Formato yyyy-mm-dd
    
    localStorage.setItem('markedDates', JSON.stringify(storedDates));
    console.log('Date added to localStorage:', specificDate);
  };

  return <FaBell className="icon" onClick={handleNotificationClick} />;
};

export default NotificationButton;
