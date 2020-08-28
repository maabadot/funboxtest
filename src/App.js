import React from 'react';
import './App.css';
import CardGrid from './components/CardGrid'

function App() {

  const data = [{
    food: 'с фуа-гра',
    count: 10,
    bonus: 'мышь в подарок',
    weight: '0,5',
    description: 'Печень утки развараная с артишоками.',
    disabled: false
  },
  {
    food: 'с рыбой',
    count: 40,
    bonus: '2 мыши в подарок',
    weight: '2',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disabled: false
  },
  {
    food: 'с курой',
    count: 100,
    bonus: '5 мышей в подарок заказчик доволен',
    weight: '5',
    description: 'Филе из цыплят с трюфелями в бульоне.',
    disabled: true
  }];

  return (
    <div className="App">
      <div className='header-txt'>Ты сегодня покормил кота?</div>
      <CardGrid data={data}/>
    </div>
  );
}

export default App;
