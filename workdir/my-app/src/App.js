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
            text: messages
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
            posts:messagesOut})
        })
    }
    render() {
        return (<div className="App">
            <header className="display-4">Никита Шальнев</header>
            <MessagesList posts={this.state.posts} />
            <InputForm newMessage={this.newMessage}/>
        </div>);
    }
}
export default App;