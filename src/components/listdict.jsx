import React, { useState } from 'react';
import "./listdict.css"

const DynamicList = () => {

  const [items, setItems] = useState([
    'Anderson',
    'Daniel',
    'Rodrigo',
  ]);

  const [removedCount, setRemovedCount] = useState(1); 
  const [addCount, setAddCount] = useState(1); 

  const addNewItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    setAddCount(addCount + 1);

    const adicionado = {
      add: addCount,
      }

    localStorage.setItem(`add`, JSON.stringify({adicionado}));

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
      {localStorage.getItem(`inscritos`) ?
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
      : <p> </p>
      }
    </div>
  );
};

export default DynamicList;
