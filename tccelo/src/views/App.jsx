import React, { useEffect, useState } from 'react';
import './App.css';
import TextBox from '../components/layout/TextBox';
import DescriptionBox from '../components/layout/DescriptionBox';
import CreateAccount from '../components/layout/CreateAccount';
import Menu from '../components/layout/Menu';

export default () => {
  return (
    <div className="page">
      <section className="Menu">
        <Menu/>
      </section>
      <section className="Textbox">
        <TextBox/>
      </section>
      <section classname="DescriptionBox">
        <DescriptionBox/>
      </section>
      <section className="CreateAccount">
        <CreateAccount/>
      </section>
    </div>
  );
}
