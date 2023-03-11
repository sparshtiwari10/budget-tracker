import React from 'react'

const AddExpenseForm = () => {
    return (
        <form>
            <div>
                <label>Name</label>
                <input type='text' className='form-control' id='name' required></input>
            </div>
            <div>
                <label>Cost</label>
                <input type='text' className='form-control' id='cost' required></input>
            </div>
            <input type='submit' className='btn btn-primary mt-3'></input>
        </form>

    )
}

export default AddExpenseForm;