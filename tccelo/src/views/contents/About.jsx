import * as React from 'react';


var i ;
var styles = {
  body: {
      backgroundColor: '#edecec',
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
  return null
}
}

const about= (props) => {
  return (
    <div className="pageTwo">
      
    </div>
  );
}
