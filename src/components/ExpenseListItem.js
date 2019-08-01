import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <h3>
           <Link to={`/edit/${id}`} exact={true}>{description}</Link>
        </h3>
        <br />
        <p>
            { amount } - {createdAt}
        </p>
    </div>
);


export default ExpenseListItem;