import React, {Component} from 'react';

export default class EventList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ol className="number-box">
                    {this.props.items.map(item => (
                        <li className="list-box" key={item.id}>{item.text}</li>
                    ))}
                </ol>
            </div>
        );
    }
}