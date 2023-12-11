import React, { useEffect, useRef } from 'react';
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
      { date: '2023-02-04', acCount: 31 },
      { date: '2023-06-04', acCount: 22 },
      { date: '2023-04-04', acCount: 90 },
      { date: '2023-11-04', acCount: 5 },
    ],
  },
  // More test users...
];


const UserList = () => {
  const canvasRefCombined = useRef(null);
  const canvasRefsIndividual = useRef([]);

  useEffect(() => {
    const ctxCombined = canvasRefCombined.current.getContext('2d');
    const dates = mockUsers.flatMap(user => user.acRecords.map(record => record.date));
    const uniqueDates = [...new Set(dates)]; // Get unique dates

    const datasets = mockUsers.map(user => ({
      label: user.leetcodeId,
      data: uniqueDates.map(date =>
        user.acRecords.find(record => record.date === date)?.acCount || 0
      ),
      borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
      backgroundColor: 'rgba(0, 0, 0, 0)', // No fill color
      borderWidth: 1,
      pointRadius: 2,
      pointHoverRadius: 4,
    }));

    // Create or update the combined chart
    if (window.combinedChart) {
      window.combinedChart.data.datasets = datasets;
      window.combinedChart.update();
    } else {
      window.combinedChart = new Chart(ctxCombined, {
        type: 'line',
        data: {
          labels: uniqueDates,
          datasets: datasets,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Create or update individual charts
    mockUsers.forEach((user, index) => {
      const ctxIndividual = canvasRefsIndividual.current[index].getContext('2d');
      const individualDataset = {
        label: user.leetcodeId,
        data: uniqueDates.map(date =>
          user.acRecords.find(record => record.date === date)?.acCount || 0
        ),
        borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
        backgroundColor: 'rgba(0, 0, 0, 0)', // No fill color
        borderWidth: 1,
        pointRadius: 2,
        pointHoverRadius: 4,
      };

      if (window.individualCharts && window.individualCharts[index]) {
        window.individualCharts[index].data.datasets = [individualDataset];
        window.individualCharts[index].update();
      } else {
        window.individualCharts = window.individualCharts || [];
        window.individualCharts[index] = new Chart(ctxIndividual, {
          type: 'line',
          data: {
            labels: uniqueDates,
            datasets: [individualDataset],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    });
  }, []);

  return (
    <div className={style["user-list"]}>
      <div className={style["user-item"]}>
        <h2>All Group Members</h2>
        <canvas ref={canvasRefCombined}></canvas>
      </div>
      {mockUsers.map((user, index) => (
        <div className={style["user-item"]} key={user._id}>
          <h2>LeetCode ID: {user.leetcodeId}</h2>
          <canvas ref={el => (canvasRefsIndividual.current[index] = el)}></canvas>
        </div>
      ))}
    </div>
  );
};

export default UserList;