import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './user.json';
import data from './data.json';
import './index.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';

console.log(data)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    <Statistics
      title="Upload stats"
      stats={data}
    />
    <Statistics
      stats={data}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

