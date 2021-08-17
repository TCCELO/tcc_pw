import * as React from 'react';
import TextBox from '../../components/home/TextBox';
import DescriptionBox from '../../components/home/DescriptionBox';
import CreateAccount from '../../components/home/CreateAccount';
import MenuHome from '../../components/home/MenuHome';

var i;
var styles = {
  body: {
      backgroundColor: '#1A1A1E',
      color: '#ffffff',
      margin: 0,
      fontFamily: 'Roboto'
  },
  html: {
    margin: 0,
  }
} 

export default class App extends React.Component {
  componentDidMount(){
    for(i in styles.body){
        document.body.style[i] = styles.body[i];
    }
}
componentDidUnmount(){
    for(i in styles.body){
        document.body.style[i] = null;
    }
}
render (){
  return (
  <div className="page">
  <section className="MenuHome">
        <MenuHome/>
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
  <br/>
  <br/>
  <br/>
  </div>
  );
}
}