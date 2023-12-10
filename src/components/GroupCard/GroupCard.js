import React from 'react';
import './GroupCard.css'; // You can also have a separate CSS file for GroupCard

const GroupCard = ({ group }) => {
  return (
    <div className='group-card'>
      <div className='team-icon'>{group.groupIcon}</div>
      <div className='group-name'>{group.groupName}</div>
      <button>Enter</button>
    </div>
  );
}

export default GroupCard;