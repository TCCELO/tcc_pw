import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Content from '../components/layout/Content';


export default (props) => {
  return (
    <div className="page">
      <Router>
        <Content/>
      </Router>
    </div>
  );
}
