import React from 'react';

class Item extends React.Component {
// TODO сюда будут передаваться пропсы (пользователь введет имя задачи, суть задачи и еще что-то), будут заносится куда-нибудь и выводиться итемом
    

    render(){
        return(
            <div className="name_of_item">
                <p> {this.props.task.name} </p>
                <p> {this.props.task.rate} </p>
                <p> {this.props.task.desc} </p>
            </div>
        );
    }
}

export default Item;