import React from 'react';
import './App.css';
import CardGrid from './components/CardGrid'

function App() {

  // Массив с данными. Можно изменить или тянуть через API при необходимости.
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

  // Данные передются через пропсы.
  return (
    <div className="App">
      <div className='header-txt'>Ты сегодня покормил кота?</div>
      <CardGrid data={data}/>
    </div>
  );
}

export default App;
