import React, {Component} from 'react';
import './App.css';
import InputForm from './components/InputForm'
import MessagesList from './components/MessagesList'
import { db } from './firebase';

class App extends Component {
    state = {posts: []};
    newMessage = messages => {
        const now = Date.now();
        messages = {
            id: now,
            name: 'Никита Шальнев',
            text: this.state.text
        };
        db.ref(`/messages/${now}`).set(messages);
    }
    componentDidMount(){
        const messagesRef = db.ref('messages');
        messagesRef.on('value', (snapshot) => {
            const message = snapshot.val();
            const messagesOut = Object.keys(message).map(key => ({
            id: key,
            name: message[key].name,
            text: message[key].text
        }));
            this.setState({
            message:messagesOut})
        })
    }
    render() {
        return (<div className="App">
            <header className="display-3">Никита Шальнев</header>
            <MessagesList posts={this.state.posts} />
            <InputForm newMessage={this.newMessage}/>
        </div>);
    }
}
export default App;
// id: Date.now(),
// name: this.state.myName,
// text: message
// this.state.posts.push({    //добавляет объект из id, name, text в конец массива posts
//         id: now,
//         name: 'Никита Шальнев',
//         text: this.state.text
//     }
// db.ref(`/messages/${now}`).set(message);
// }
// this.setState({
//     posts: this.state.posts
// }