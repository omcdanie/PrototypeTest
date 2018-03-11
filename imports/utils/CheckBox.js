import React, {Component} from "react";

export default class CheckBox extends Component {
    constructor(label) {
        super(label);
        this.props = {label: ''};
        this.state = {isChecked: false};

        this.handleAddToReserve = this.handleAddToReserve.bind(this);
    }

    render() {
       return (
           <div>
               <label
                   className="bucket-checkbox-label"
               >
                   <input
                       className="checkbox"
                        type="checkBox"
                        checked={this.isChecked}
                        onChange={this.handleAddToReserve}
                   />
                   {/*{label}*/}
                   Move to Reserve?
               </label>
           </div>
       )
    }

    handleAddToReserve(e) {
        // onSubmit send this list to the reserve pool
        this.setState({isChecked: e.target.value});
        if (this.state.isChecked) {
            //something happens here
            console.log("checked:  " + this.state.isChecked.valueOf());
        } else {
            console.log("checked:  " + this.state.isChecked.valueOf());
        }

    }


}