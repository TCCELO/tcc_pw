import React, { useEffect, useState } from 'react';
import './App.css';
import TextBox from './components/TextBox';
import DescriptionBox from './components/DescriptionBox';
import CreateAccount from './components/CreateAccount';

export default () => {
  return (
    <div className="page">
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
