import {Mongo} from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Expenses = new Mongo.Collection("expenses");
//Probably would want to defind some rules for this database later
//(required fields, what fields there are, etc.)
var Schemas = {};
Schemas.Expense = new SimpleSchema({
	name: {
		type:String
	},
	category: {
		type:String
	},
	price: {
		type:Number,
		min: 0
	},
	dateCreated : {
		type: Date
	}
});
Expenses.attachSchema(Schemas.Expense);
