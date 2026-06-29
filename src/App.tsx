import { useState } from 'react';
import './App.css';
import rawResources from './data/resources.json';
import { groupResources } from './utils/groupResources';
import { Category, Resource } from './types/resource';
import { Group } from './components/Group';

function App() {
  const resources = rawResources as Resource[];
  const groupedResources = groupResources(resources);
  const [sortBy, setSortBy] = useState("New");
  const updateSort = () => {
    setSortBy(sortBy === "New" ? "Old" : "New");
  }

  return (
    <main>
      <header>
        <h1>Health Assured Tech Task</h1>
        <p>Wisdom Wellbeing Resource Centre</p>
      </header>
      {
        (Object.entries(groupedResources) as [Category, Resource[]][])
          .map(([category, resources]) => {
            return <Group key={category} category={category} resources={resources} sortBy={sortBy} />
          })
      }
    </main>
  )


}

export default App
