import React, {Component} from 'react';

class InputForm extends Component {
    handleSubmit = event => {
        event.preventDefault() //отменить перезагрузку страницы
        let input = event.target.elements.input
        this.props.newMessage(input.value)
        input.value=''
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input autoFocus id="input" className="form-control" type="text" placeholder="Отправьте сообщение...">
                </input>
            </form>);
    }
}

export default InputForm