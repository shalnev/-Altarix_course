import React, {Component} from 'react';
import './App.css';

var login = "Никита Шальнев";


class Parallelogram extends Component {    //объединяющий компонент вёрстки
    render() {
        return (<div className="body">
            <Head/>
            <Content/>
            <InputZone/>
        </div>);
    }
}

class Head extends Component {           //Шапка со своим никнеймом
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
            <textarea autoFocus id="inputFromUser" className="footer__textarea" type="text">
            </textarea>
            < button className="footer__button">Отправить</button>
        </div>);
    }
}

// document.getElementById("inputFromUser").value = textMessage;


export default Parallelogram;


