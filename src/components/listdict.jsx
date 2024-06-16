import React, { useState } from 'react';
import "./listdict.css"

const DynamicList = () => {

  const [items, setItems] = useState([
    'Anderson',
    'Daniel',
    'Rodrigo',
  ]);

  const [removedCount, setRemovedCount] = useState(1); 

  const addNewItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Function to remove an item from the list
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

  
    setRemovedCount(removedCount + 1);

    const removido = {
      erro: removedCount,
      }

    localStorage.setItem(`remover`, JSON.stringify({removido}));

  };

  return (
    <div className="container">

      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <div className="inscrito">
                <div className="text" > <h4>{item} que participar no seu evento 
                    quer participar do seu Evento!</h4>
                </div>
                <div class="botões" > <button class="aceita" onClick={() => addNewItem(index)}>Aceitar</button>
                    <button class="recusar" onClick={() => removeItem(index)}>Remove</button> 
                  </div>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
