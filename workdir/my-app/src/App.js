import React, {Component} from 'react';
import './App.css';
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

class Parallelogram extends Component {
    render() {
        return (<div className="body">
            <Head/>
            <Content/>
            <InputZone/>
        </div>);
    }
}

class Head extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__h1">{login}</h1>
            </header>
        );
    }
}

class Content extends Component {         //окошко с сообщениями
    render() {
        return (
            <main className="main">
                <Message/>
            </main>);
    }
}

var textMessage = "Привет, как спиться?";

class Message extends Component {         //Отправленное одно сообщение
    render() {
        return (
            <div className="message__block">
                <p>{login}:</p>
                <p className="message__text">{textMessage}</p>
            </div>);
    }
}

class InputZone extends Component {        //Инпут зона
    render() {
        return (<div className="footer">
            <textarea autoFocus id="inputFromUser" className="footer__textarea" type="text"
                      value="Написать сообщение..." onfocus="this.value=''">
            </textarea>
            < button className="footer__button">Отправить</button>
        </div>);
    }
}

// document.getElementById("inputFromUser").value = textMessage;


export default Parallelogram;


