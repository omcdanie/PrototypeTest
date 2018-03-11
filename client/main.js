import React from 'react';
import {render} from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import '../imports/db/client/collections/activeBucketCollections/ActiveList';
import '../imports/db/client/collections/reserveBucketCollections/ReserveList';

import Profile from "../imports/app/Profile";


Meteor.startup(() => {
    Tracker.autorun(() => {
        render(<Profile/>, document.getElementById('app'));
    });
});
