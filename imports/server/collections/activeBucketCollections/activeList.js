import {Mongo} from 'meteor/mongo';

const ActiveLists = new Mongo.Collection('activeLists');

ActiveLists.insert({id: 'userId'});
const list = ActiveLists.find({id: 'userId'});

console.log(list);