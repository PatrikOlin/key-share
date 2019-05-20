/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import LayoutCard from './components/layout-card/layout-card';
import mockKeyboards from './utils/mock-keyboards';

const Layouts = ({keyboards}) => (
  <>
    {keyboards.map(keyboard => (
      <LayoutCard key={keyboard.id} keyboard={keyboard}>{keyboard.title}</LayoutCard>
    ))}
  </>
);

function App() {
	return (
		<div className="App">
			<Layouts keyboards={keyboards}></Layouts>
		</div>
	);
}

const keyboards = mockKeyboards.keyboards;

export default App;
