import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import Spent from './components/Spent';
import AddExpenseForm from './components/AddExpenseForm';
const App = () => {
  return (
    //<p>Hello Sparsh</p>
    <div className='container mt-3'>
      <h1>Budget Planner</h1>
      <div className='col-sm'>
        <Budget></Budget>
      </div>
      <div className='col-sm'>
        <Remaining></Remaining>
      </div>
      <div className='col-sm'>
        <Spent></Spent>
      </div>
      <div className='mt-4'>
        <h1>Expenses</h1>
        <div className='row-mt-3'>
          <div className='col-sm'>
            <ExpenseList></ExpenseList>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h1>Add Expense</h1>
      </div>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm />
        </div>
      </div>
      
    </div>

  );
};

export default App;

