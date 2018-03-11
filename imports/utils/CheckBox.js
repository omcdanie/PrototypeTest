import React, {Component} from "react";

export default class CheckBox extends Component {
    constructor(label) {
        super(label);
        this.state = {isChecked: false};

        this.handleAddToReserve = this.handleAddToReserve.bind(this);
    }

    static props = {
        label: ''
    };

    render() {
       return (
           <div>
               <label
                   className="bucket-checkbox-label"
                   label="label"
               >
                   <input
                       className="checkbox"
                        type="checkBox"
                        checked={this.isChecked}
                        onChange={this.handleAddToReserve}
                   />
                   {this.props.label}
               </label>
           </div>
       )
    }

    handleAddToReserve(e) {
        // onSubmit send this list to the reserve pool
        this.setState({isChecked: e.target.value});
        if (e === true) {
            //something happens here
            console.log("checked:  " + this.state.isChecked);
        } else {
            console.log("checked:  " + this.state.isChecked);
        }

    }


}