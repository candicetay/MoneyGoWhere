import {Expenses} from '../../../expenses.js';
import SimpleSchema from 'simpl-schema';

Template.ExpenseEntry.events({

  //This is the new expense entry event
  "submit .expense-entry": function(event){ //Here, "event" contains all the form data
    var name = event.target.name.value; //Name of the item that was bought
    var category = event.target.category.value; //Category of the item that was bought
    var price = event.target.price.value; //Price of the item that was bought

    Expenses.insert({ //This statement inserts values into the MongoDB database
      name : name,
      category: category,
      price : price,
      createdAt : new Date()
    });

    event.target.name.value = ""; //These two statements reset the value within the forms
    event.target.category.value = "";
    event.target.price.value = "";

    return false; //This ensures the page doesn't refresh when the form is submitted
  }

});
