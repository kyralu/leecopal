import React from 'react';
import './GroupDataDisplay.css';

// 测试数据
const mockUsers = [
  {
    _id: '1',
    leetcodeId: 'zhuoxi',
    acRecords: [
      { date: '2023-01-01', acCount: 3 },
      { date: '2023-01-02', acCount: 2 },
    ],
  },
  {
    _id: '2',
    leetcodeId: 'lihua',
    acRecords: [
      { date: '2023-01-03', acCount: 5 },
      { date: '2023-01-04', acCount: 1 },
    ],
  },
  // 更多测试用户...
];

// 用户列表项组件
const UserListItem = ({ user }) => {
  // 找到最大的 AC 计数以用于归一化
  const maxAcCount = Math.max(...user.acRecords.map(record => record.acCount), 0);

  return (
    <div className="user-item">
      <h2>LeetCode ID: {user.leetcodeId}</h2>
      <div className="chart">
        {user.acRecords.map((record, index) => (
          <div key={index} className="chart-bar" style={{ width: `${(record.acCount / maxAcCount) * 100}%` }}>
            <span>{record.date}: {record.acCount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 用户列表组件
const UserList = () => {
  return (
    <div className="user-list">
      {mockUsers.map(user => <UserListItem key={user._id} user={user} />)}
    </div>
  );
};

export default UserList;
