import React, {Component} from 'react';
import './App.css';
import InputForm from './components/InputForm'
import MessagesList from './components/MessagesList'

const posts = [
    {
        id: 1,
        name: "Дуров Павел",
        text: "Себе заблокируй!",
        isOutgoing: true, // Флаг для отметки своих сообщений
    }
]

class App extends Component {
    state = {posts: posts, myName: "Никита Шальнев"}
    addMessage = message => {
        this.state.posts.push({
            id: Date.now(),
            name: this.state.myName,
            text: message
        })
        this.setState({
            posts: this.state.posts
        })
    }
    render() {
        return (<div className="App">
            <header>{this.state.myName}</header>
            <MessagesList posts={this.state.posts}/>
            <InputForm addMessage={this.addMessage}/>
        </div>);
    }
}
export default App;


