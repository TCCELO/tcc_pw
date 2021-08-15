import React, { useEffect, useState } from 'react';
/*import './App.css';*/
import { BrowserRouter as Router } from 'react-router-dom'
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';

export default (props) => {
  return (
    <div className="page">
      <Router>
        <Menu/>
        <Content/>
      </Router>
    </div>
  );
}
