import React, { Component } from 'react'
import ReactDom from 'react-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Welcome extends Component {


  myFun(){

    var container = document.getElementById("myId");
    var element = <h2>I am ahsanul huq shibu . i am a professional web developer</h2>

    let callBack = function(){

      alert('i am callback function')
    }
    
    
    
    
  ReactDom.render( element, container, callBack)

  }
  
  render() {

  
    return (
      <div>
        <button onClick={this.myFun}>Change</button>
        <h2 id='myId'>I am ahsan</h2>
      </div>
    )
  }
}
export default Welcome;



