import React from 'react';
import List from  './Component/List'

const App = () => {
  const items = ['Banana', 'Mango', 'Orange', 'Grapes'];

  return (
    <div>
      <h1>List of Fruits</h1>
      <List items={items}/>
    </div>
  );
};

export default App;
