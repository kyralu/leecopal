import React from "react";
import GroupList from "../components/GroupList/GroupList";



function GroupPage() {

  const groups = [
    { id: 12, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 1, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 3, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
    { id: 3, groupName: "NEU LeetCode Study Group", /* Other data properties here */ },
  ];

  return (
    <GroupList groups={groups}></GroupList>
  );
}

export default GroupPage;