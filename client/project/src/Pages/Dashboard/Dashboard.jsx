import React from 'react';
import {useLocation} from 'react-router-dom'

function Dashboard() {
  const location = useLocation();
  let data = location.state.detail;
  return (
    <> 
      <span>{data[3]}</span>
      <h1> Usuário autenticado || Dashboard</h1>
    </>
  )
}

export default Dashboard;