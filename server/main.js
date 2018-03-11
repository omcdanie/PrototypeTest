import { Meteor } from 'meteor/meteor';
import React from 'react';

import "../imports/db/server/collections/activeBucketCollections/ActiveList";
import ActiveLists from "../imports/db/server/collections/activeBucketCollections/ActiveList";

import "../imports/db/server/collections/reserveBucketCollections/ReserveList";
import ReserveLists from "../imports/db/server/collections/reserveBucketCollections/ReserveList";

Meteor.startup(() => {
    ActiveLists.insert({
        name: '',
        location: '',
        description: ''
    });
    ReserveLists.insert({
        name: '',
        location: '',
        description: ''
    });
});
