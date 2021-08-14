import React, { useEffect, useState } from 'react';
import './Home.css';
import TextBox from '../../components/TextBox';
import DescriptionBox from '../../components/DescriptionBox';
import CreateAccount from '../../components/CreateAccount';
import Menu from '../../components/layout/Menu';

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
