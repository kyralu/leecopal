import React from 'react';
import style from './GroupCard.module.css';
import { useNavigate } from 'react-router-dom';
import poepleIcon from '../../assets/icons/person.svg';

const GroupCard = (props) => {

  const navigate = useNavigate();

  const group = props.group;

  const handleClickEnter = (groupId) => {
    navigate(`/group/${groupId}`);
  }

  const handleClickJoin = async () => {
    await props.onJoinGroup(group._id);
  }

  return (
    <div className={style.groupCard}>
      <div className={style.teamIcon}>{group.groupIcon}</div>
      
      <div className={style.groupInfo}>
        <div className={style.groupName}>{group.groupName}</div>
        <div className={style.groupMembers}>
          <img src={poepleIcon} className={style.peopleIcon} alt="active user"/>
          {group.groupMembers.length}
        </div>
      </div>
      {props.showEnter && <button onClick={() => handleClickEnter(group._id)}>Enter</button>}
      {!props.hasJoined && <button onClick={handleClickJoin}>Join</button>}
    </div>
  );
}

export default GroupCard;