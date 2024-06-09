import React from 'react';

export default function Evento() {


    const [showNotification, setShowNotification] = useState(true);

    const toggleNotification = ()  => {
        setShowNotification(!showNotification);
    }
    return (
        <div>
            { showNotification ? <div> Cadastro Realizado </div> : '' }
            <button onClick={toggleNotification}> Ativar! </button>
        </div>
    )
}
