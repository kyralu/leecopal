import style from './GroupInfoPage.module.css';
import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import GroupDataDisplay from '../../components/GroupDataDisplay/GroupDataDisplay';
import arrowBack from '../../assets/icons/arrow_back.svg';
import GroupCard from '../../components/GroupCard/GroupCard';

function GroupInfoPage(props) {
  let { id } = useParams();

  const [group, setGroup] = useState(null);
  const [members, setMembers] = useState([]);
  const [hasJoined, setHasJoined] = useState(true);

  const fetchMemberInfo = async (groupMembers) => {
    try {
        const response = await fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({ userIds: groupMembers }),
        });
        const data = await response.json();
        setMembers(data);
      } catch (e) {
        console.log(e);
      }
  }

  const fetchGroupInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/group/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", 
        },
      });
      const data = await response.json();
      setGroup(data);
      if(data.groupMembers) {
        await fetchMemberInfo(data.groupMembers);
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  const handleJoinGroup = async (groupId) => {
    await props.onJoinGroup(groupId);
    await fetchGroupInfo();
  };

  useEffect(() => {
    fetchGroupInfo();
  }, []);

  useEffect(() => {
    if(!members || members.length === 0) {
      return;
    }
    const userInfo = localStorage.getItem('userInfo');
    const {id} = JSON.parse(userInfo);
    const hasJoined = members.some(member => member._id === id);
    setHasJoined(hasJoined);
    console.log(hasJoined);
  }, [members]);



  return (
    <div className={style.container}>
      <Link to="/group" className={style.backLink} ><img src={arrowBack} alt="back arrow" />All Groups</Link>
      <div className={style.content}>
        {group && <GroupCard group={group} hasJoined={hasJoined} onJoinGroup={handleJoinGroup}/>}
        {group && <GroupDataDisplay group={group} />}
      </div>
    </div>
  )
}

export default GroupInfoPage;