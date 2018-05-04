import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rick_png from "./rick.PNG";
import morty_png from "./morty.PNG";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

var login = "Морти";
class Head extends Component{
    render(){
        return(
            <header className="header">
                <h1 className="header__h1">{login}</h1>
            </header>
        );
    }
}

class Content extends Component{         //окошко с сообщениями
    render(){
        return(
            <main>
                <Message />
            </main>);
    }
}
var textMessage;
class Message extends Component{
    render(){
        return(
            <main>
            <div className="message__block">
                <p>{login}</p>
                <p className="message__text">{textMessage}</p>
            </div></main>);
    }
}
class InputZone extends Component{
    render(){
        return(
            <textarea>
                {inputMessage}
            </textarea>)
            <button type="submit" >отправить</button>
    );
    }
}

export default Head;
export default Content;
export default Message;
export default InputZone;


