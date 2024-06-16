import React from 'react';
import'../styles/CommentsList.css';

function CommentsList() {
  const comments = [
    { name: 'Vinicius', text: 'era melhor ver o pelé kkkkkkk', rating: 3 }
  ];

  return (
    <section className="comments-list">
      <h2>Comentários</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p><strong>{comment.name}</strong> - {comment.text}</p>
          <p>Avaliação: {comment.rating} estrela(s)</p>
        </div>
      ))}
    </section>
  );
}

export default CommentsList;
