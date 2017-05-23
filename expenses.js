import {Mongo} from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Expenses = new Mongo.Collection("expenses");
//Probably would want to defind some rules for this database later
//(required fields, what fields there are, etc.)

Expenses.attachSchema(new SimpleSchema({
	name: {
		type:String
	},
	price: {
		type:Number,
		min: 0
	},
	dateCreated : {
		type: Date
	}
}));