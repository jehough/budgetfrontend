import React from 'react';
import {Link} from 'react-router-dom';

const BudgetList = props => (<div>
      
      <ul>
        {props.list.map((obj, id) => 
          <li key= {id}>
            <Link to={{pathname: `/budgets/${obj._id}`,
                       state: {
                          id: obj._id}}}>
              {obj.name}
            </Link>: 
          {obj.available}</li>)}
      </ul>
    </div>)


export default BudgetList