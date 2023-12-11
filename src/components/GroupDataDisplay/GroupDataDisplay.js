import React from 'react';
import style from './GroupDataDisplay.module.css';
import Chart from 'chart.js/auto';

const mockUsers = [
  {
    _id: '1',
    leetcodeId: 'zhuoxi',
    acRecords: [
      { date: '2023-01-01', acCount: 3 },
      { date: '2023-01-02', acCount: 2 },
      { date: '2023-02-02', acCount: 7 },
      { date: '2023-03-02', acCount: 1 },
      { date: '2023-03-23', acCount: 0 },
    ],
  },
  {
    _id: '2',
    leetcodeId: 'lihua',
    acRecords: [
      { date: '2023-01-03', acCount: 5 },
      { date: '2023-02-04', acCount: 11 },
      { date: '2023-07-04', acCount: 12 },
      { date: '2023-04-04', acCount: 10 },
      { date: '2023-11-04', acCount: 1 },
    ],
  },
  {
    _id: '3',
    leetcodeId: 'jialin',
    acRecords: [
      { date: '2023-01-03', acCount: 5 },
      { date: '2023-02-04', acCount: 11 },
      { date: '2023-07-04', acCount: 12 },
      { date: '2023-04-04', acCount: 10 },
      { date: '2023-11-04', acCount: 1 },
    ],
  },
  // More test users...
];

const UserListItem = ({ user }) => {
  const canvasRef = React.useRef(null);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const dates = user.acRecords.map(record => record.date);
    const acCounts = user.acRecords.map(record => record.acCount);

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'AC Count',
            data: acCounts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [user]);

  return (
    <div className={style["user-item"]}>
      <h2>LeetCode ID: {user.leetcodeId}</h2>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

const UserList = () => {
  return (
    <div className={style["user-list"]}>
      {mockUsers.map(user => <UserListItem key={user._id} user={user} />)}
    </div>
  );
};

export default UserList;
