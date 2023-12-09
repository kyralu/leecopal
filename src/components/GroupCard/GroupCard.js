import React from 'react';
import './GroupCard.css'; // You can also have a separate CSS file for GroupCard

const GroupCard = ({ group }) => {
  return (
    <div className='group-card'>
      <div className='team-icon'>😵</div>
      <div className='group-name'>NEU Study Group</div>
      <button>Join</button>
    </div>
  );
}

export default GroupCard;