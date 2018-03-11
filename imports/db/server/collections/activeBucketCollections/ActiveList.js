import {Mongo} from 'meteor/mongo';

const ActiveLists = new Mongo.Collection('ActiveLists');
export default ActiveLists;