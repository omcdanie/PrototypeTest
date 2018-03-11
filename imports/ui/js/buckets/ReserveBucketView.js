import React, {Component} from "react";
import EventList from "./userLists/ListView";

export default class ReserveBucket extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bucket-box-right">
                <h2 className="bucket-title-font">Reserve Bucket</h2>
                <form>
                    <input
                        className="bucket-input"
                        placeholder="Search Reserve Bucket"
                        list="something"
                    />
                    {/*
                       <datalist/> is incompatible on Safari and Opera
                       will need to implement this polyfill in for
                       compatibility
                       https://github.com/Fyrd/purejs-datalist-polyfill
                     */}
                    <datalist
                        className="reserve-bucket-combo-box"
                        id="something"
                    >
                        <option>
                            something1
                        </option>
                        <option>
                            something2
                        </option>
                        <option>
                            something3
                        </option>
                        <option>
                            something4
                        </option>
                        <option>
                            something5
                        </option>
                        <option>
                            something6
                        </option>
                    </datalist>
                </form>
                <button
                    className="bucket-button"
                >
                    <h3 className="bucket-button-font">
                        Display Goal?
                        {/*{this.state.items.values()}*/}
                    </h3>
                </button>
                <button
                    className="bucket-button"
                >
                    <h3 className="bucket-button-font">
                        Move Goal To Active?
                        {/*{this.state.items.values()}*/}
                    </h3>
                </button>

            </div>
        );
    }


}