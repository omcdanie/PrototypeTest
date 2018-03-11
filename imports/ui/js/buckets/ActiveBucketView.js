import React, {Component} from "react";
import EventList from "./userLists/ListView";
import CheckBox from "../../../utils/CheckBox";

const checkBoxLabel = "Move to reserve?";

export default class ActiveBucket extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], name: '', location: '', description: ''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="bucket-box-left">
                <h2 className="bucket-title-font">Active Bucket</h2>
                <EventList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="bucket-input"
                        placeholder="Please enter a Goal Name"
                        onChange={this.handleNameChange}
                        value={this.state.name}
                    />
                    <input
                        className="bucket-input"
                        placeholder="Please give a Location"
                        onChange={this.handleLocationChange}
                        value={this.state.location}
                    />
                    <input
                        className="bucket-input"
                        placeholder="Please give a description"
                        onChange={this.handleDescriptionChange}
                        value={ActiveBucket.verifyInput(this.state.description)}
                    />
                    <CheckBox/>

                    <button
                        className="bucket-button"
                    >
                        <h3 className="bucket-button-font">
                            Add Active Goal?
                            {/*{this.state.items.values()}*/}
                        </h3>
                    </button>
                </form>
            </div>
        );
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    handleLocationChange(e) {
        this.setState({location: e.target.value});
    }
    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }


    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.name) {
            alert("You must name your Goal!");
            return;
        } else if (!this.state.location) {
            alert("You must give a location for your goal!");
            return;
        } else if (!this.state.description) {
            alert("Please define your goal with a description!");
            return;
        }
        const newItems = {
            name: this.state.name,
            location: this.state.location,
            description: this.state.description,
            // the id should be the userId + some other mechanism
            id: Date.now()
        };
        // set form values back to placeholder text
        this.setState(prevState => ({
            items: prevState.items.concat(newItems),
            name: '',
            location: '',
            description: '',
        }));
    }

    static verifyInput(text) {
        if (text > 40) {
            return alert("Your description can't exceed 20 characters.");
        } else {
            return text;
        }
    }
}
