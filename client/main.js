import React from 'react';
import {render} from 'react-dom';
import { Meteor } from 'meteor/meteor';


import Profile from "../imports/app/Profile";


Meteor.startup(() => {
    render(<Profile/>, document.getElementById('app'));
});
