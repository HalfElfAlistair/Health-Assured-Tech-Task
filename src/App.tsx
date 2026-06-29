import { useState } from 'react';
import './App.css';
import rawResources from './data/resources.json';
import { groupResources } from './utils/groupResources';
import { Resource } from './types/resource';

function App() {
  const resources = rawResources as Resource[];
  const groupedResources = groupResources(resources);
  return Object.keys(groupedResources).map(category => {
    return <h1>{category}</h1>
  })
}

export default App
