import React, {Component} from 'react';

export default class EventList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul className="number-box">
                    {this.props.items.map(item => (
                        <li className="list-box" key={item.id}> Goal Name: {item.name}</li>
                    ))}
                    {this.props.items.map(item => (
                        <li className="list-box" key={item.id}> Goal Location: {item.location}</li>
                    ))}
                    {this.props.items.map(item => (
                        <li className="list-box" key={item.id}> Goal Description: {item.description}</li>
                    ))}
                </ul>
            </div>
        );
    }
}