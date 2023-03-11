import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expense = [
        {id:10, name: "Shopping", cost:40 },
        {id:10, name: "Food", cost:60 },
        {id:10, name: "Travel", cost:20 }
    ];

    return(
        <ul className='list-group'>
            {expense.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}></ExpenseItem>
            ))}
        </ul>
    )
}

export default ExpenseList