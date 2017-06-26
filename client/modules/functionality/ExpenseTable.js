import {Expenses} from '../../../expenses.js';
import SimpleSchema from 'simpl-schema';

Template.ExpenseTable.helpers({
  expensesList : function () {
    return Expenses.find(); //Expenses is a mongoDB collection, defined in ../api/expenses.js
  }
});

Template.IndividualExpense.events({

  //This is the delete expense event
  "click .delete" : function(){
    Expenses.remove(this._id)
  }
});
