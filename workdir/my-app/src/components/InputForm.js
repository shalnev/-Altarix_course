import React, {Component} from 'react';

class InputForm extends Component {
    handleSubmit = event => {
        event.preventDefault()
        let input = event.target.elements.input
        this.props.addMessage(input.value)
        input.value=''
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input autoFocus id="input" className="textarea" type="text" placeholder="Отправьте сообщение...">
                </input>
            </form>);
    }
}

export default InputForm