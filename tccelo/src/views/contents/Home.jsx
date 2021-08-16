import * as React from 'react';
import TextBox from '../../components/home/TextBox';
import DescriptionBox from '../../components/home/DescriptionBox';
import CreateAccount from '../../components/home/CreateAccount';


var i;
var styles = {
  body: {
      backgroundColor: '#1A1A1E',
      color: '#ffffff',
      margin: 0,
      fontFamily: 'Roboto'
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
  <section className="Textbox">
    <TextBox/>
  </section>
  <section classname="DescriptionBox">
    <DescriptionBox/>
  </section>
  <section className="CreateAccount">
    <CreateAccount/>
  </section>
  
</div>);
}
}