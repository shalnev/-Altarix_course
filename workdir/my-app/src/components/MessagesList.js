import React from 'react'

const messageToList = myName => el => (
        <div id={el.id}>{el.name}
            <p className="message__text">{el.text}</p>
        </div>))


// const messageToList = myName => el => (
//     <div key={el.key}>
//                     <h6 className={myName === el.authorName ? 'card-subtitle mb-2 text-primary' : 'card-subtitle mb-2 text-right text-success'}>
//                         <small className="text-info">{el.time + ' '}</small>
//                         {el.authorName}
//                     </h6>
//                     <p className="card-text">{el.content}</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

export default props => props.posts.map(messageToList(props.myName))