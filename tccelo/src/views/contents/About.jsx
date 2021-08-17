import * as React from 'react';
import Headline from '../../components/about/Headline';
import Lead from '../../components/about/Lead';
import LeadTwo from '../../components/about/LeadTwo';
import Team from '../../components/about/Team';
import MenuAbout from '../../components/about/MenuAbout';

var i ;
var styles = {
  body: {
      backgroundColor: '#edecec',
      color: '#252525',
      margin: 0,
      fontFamily: 'Inter'
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
    <div className="pageTwo">
      <section className="MenuAbout">
        <MenuAbout/>
      </section>
      <section className="Headline">
        <Headline/>
      </section>
      <section classname="Lead">
        <Lead/>
      </section>
      <section className="LeadTwo">
        <LeadTwo/>
      </section>
      <section className="Team">
        <Team />
      </section>
        </div>
  );
}
}

