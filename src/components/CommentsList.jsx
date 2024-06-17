import React from 'react';
import { useState } from 'react';
import'./CommentsList.css';

function CommentsList() {

  const storedUsuario = localStorage.getItem('comentarios');
  const jsonData = JSON.parse(storedUsuario);
  const dadosObject = jsonData.comments;

  let dadosObjectMine = null;

  if (localStorage.getItem('mycomentarios')) {
  const storedMeuComment = localStorage.getItem('mycomentarios');
  const jsonDataMy = JSON.parse(storedMeuComment);
  dadosObjectMine = jsonDataMy.mycomments;

  } 



  return (
    <section className="comments-list">
      <h2>Comentários</h2>
      {dadosObject.map((comment, index) => (
        <div key={index} className="comment">
          <p><strong>{comment.name}</strong> - {comment.text}</p>
          <p>Avaliação: {comment.rating} estrela(s)</p>
        </div>
      ))}
      
      <div>
      {localStorage.getItem('mycomentarios') ?
        dadosObjectMine.map((comment, index) => (
          <div key={index} className="comment">
            <p><strong>{comment.name}</strong> - {comment.text}</p>
            <p>Avaliação: {comment.rating} estrela(s)</p>
          </div>
        ))
        : null
      }
      </div>

      


    </section>
    
  );
}

export default CommentsList;
