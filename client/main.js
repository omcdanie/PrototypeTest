import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {render} from 'react-dom';

import Bucket from "../imports/js/buckets/BucketView";
import "../imports/css/bucket/bucketSheet.css";

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Bucket/>
            </div>
        );
    }
}


Meteor.startup(() => {
    render(<Profile/>, document.getElementById('app'));
});
