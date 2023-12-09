import React, {useState} from "react";
import style from "./GroupPage.module.css";
import GroupList from "../../components/GroupList/GroupList";



function GroupPage() {

  const groups = [
    { id: 12, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 1, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 3, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 3, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
  ];

  const myGroups = [
    { id: 12, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 1, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 3, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
  ]

  const allGroups = [
    { id: 12, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 1, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 3, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 3, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
  ]


  const filters = ["My Groups", "All Groups"];
  const [selectedFilter, setSelectedFilter] = useState("My Groups");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={style.container}>
      <div className={style.controller}>
        <div className={style.filterContainer}>
          {filters.map((filter) => (
            <button className={selectedFilter === filter ? `${style.filter} ${style.filterActive}` : style.filter} onClick={() => handleFilterClick(filter)}>{filter}</button>
          ))}
        </div>
        <button className={style.createGroupButton}>  + New Group</button>
      </div>
      <GroupList groups={selectedFilter === "My Groups"? myGroups:allGroups}></GroupList>
    </div>
  );
}

export default GroupPage;