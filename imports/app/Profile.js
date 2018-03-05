import React, {Component} from 'react';

import Bucket from "../../imports/ui/js/buckets/BucketView";
import "../../imports/ui/css/bucket/bucketSheet.css";

export default class Profile extends Component {

    render() {
        return(
            <div>
                <Bucket/>
            </div>
        );
    }
}