import React, {Component} from 'react';

import ActiveBucket from "./ActiveBucketView.js";
import ReserveBucket from "./ReserveBucketView.js";


export default class Bucket extends Component {

    render() {
        return (
            <div className="bucket-container">
                <ActiveBucket/>
                <ReserveBucket/>
            </div>
        );
    }
}




