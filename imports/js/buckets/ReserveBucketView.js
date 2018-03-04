import React, {Component} from "react";
import EventList from "./userLists/ListView";

export default class ReserveBucket extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="bucket-box-right">
                <h2 className="bucket-title-font">Reserve Bucket</h2>
                <EventList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="bucket-input"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button className="bucket-button">
                        <h3 className="bucket-button-font">
                            Add Reserve Goal #
                            {this.state.items.length + 1}
                        </h3>
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}