import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Soap',
      amount: 54.12,
      date: new Date(2022, 1, 1),
    },
    { id: 'e2', title: 'home theatre', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'life Insurance',
      amount: 150.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'laptop',
      amount: 600,
      date: new Date(2022, 4, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>My expenses list</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
