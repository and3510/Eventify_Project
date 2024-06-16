import React, { useState } from 'react';
import '../styles/CommentSection.css';

function CommentSection() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(3);

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);
  const handleSubmit = () => {
    
    console.log('Comentário:', comment, 'Avaliação:', rating);
  };

  return (
    <section className="comment-section">
      <textarea 
        placeholder="Digite seu comentário:" 
        value={comment} 
        onChange={handleCommentChange}
      />
      <div className="rating">
        Avaliação:
        <select value={rating} onChange={handleRatingChange}>
          {[1, 2, 3, 4, 5].map(star => (
            <option key={star} value={star}>{star} estrela(s)</option>
          ))}
        </select>
      </div>
      <button onClick={handleSubmit}>Comentar</button>
    </section>
  );
}

export default CommentSection;
