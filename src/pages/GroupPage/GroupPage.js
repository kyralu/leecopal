import React, {useState} from "react";
import style from "./GroupPage.module.css";
import GroupList from "../../components/GroupList/GroupList";
import CreateGroupForm from "../../components/CreateGroupForm/CreateGroupForm";



function GroupPage(props) {

  const myGroups = props.groups.filter(group => group.groupMembers.includes(props.id));
  const moreGroups = props.groups.filter(group => !group.groupMembers.includes(props.id));


  const filters = ["Joined Groups", "More Groups"];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const [showCreateGroupForm, setShowCreateGroupForm] = useState(false);

  const handleCreateGroupClick = () => {
    setShowCreateGroupForm(!showCreateGroupForm);
  };

  const closeCreateForm = () => {
    setShowCreateGroupForm(false);
  }

  return (
    <div className={style.container}>
      <div className={style.controller}>
        <div className={style.filterContainer}>
          {filters.map((filter) => (
            <button key={filter} className={selectedFilter === filter ? `${style.filter} ${style.filterActive}` : style.filter} onClick={() => handleFilterClick(filter)}>{filter}</button>
          ))}
        </div>
        <button className={style.createGroupButton} onClick={handleCreateGroupClick}>  + New Group</button>
      </div>
      <GroupList groups={selectedFilter === filters[0] ? myGroups:moreGroups}></GroupList>
      {showCreateGroupForm && <CreateGroupForm onClose={closeCreateForm} onCreateGroup={props.onCreateGroup}/>}
    </div>
  );
}

export default GroupPage;