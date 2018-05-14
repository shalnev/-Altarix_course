import React from 'react'

const messageToList = name => el => (
    <div
        className={'Никита Шальнев' === el.name ? 'row mb-2 justify-content-end' : 'row mb-2'} key={el.id}>
        <div className="col-md-auto">
            <div className="card">
                <div className="card-body">
                    <h6 className={el.name === 'Никита Шальнев' ? 'card-subtitle mb-2 text-primary' : 'card-subtitle mb-2 text-success'}>{el.name}</h6>
                    <p className="card-text">{el.text}</p>
                </div>
            </div>
        </div>
    </div>
)
export default props => props.posts.map(messageToList(props.name))