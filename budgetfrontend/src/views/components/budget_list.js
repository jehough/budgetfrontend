import React from 'react';

const BudgetList = props => (<div>
      <ul>
        {props.list.map(obj => <li>{obj.name}: {obj.available}</li>)}
      </ul>
    </div>)


export default BudgetList