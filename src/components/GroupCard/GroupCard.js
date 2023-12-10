import React from 'react';
import './GroupCard.css';
import { useNavigate } from 'react-router-dom';

const GroupCard = ({ group }) => {

  const navigate = useNavigate();

  const handleClickEnter = (groupId) => {
    navigate(`/group/${groupId}`);
  }
  return (
    <div className='group-card'>
      <div className='team-icon'>{group.groupIcon}</div>
      <div className='group-name'>{group.groupName}</div>
      <button onClick={() => handleClickEnter(group._id)}>Enter</button>
    </div>
  );
}

export default GroupCard;