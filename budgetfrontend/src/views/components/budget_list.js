import React from 'react';

const BudgetList = props => (<div>
      <ul>
        {props.list.map((obj, id) => <li key= {id}>{obj.name}: {obj.available}</li>)}
      </ul>
    </div>)


export default BudgetList