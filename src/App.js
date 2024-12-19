import logo from './logo.svg';
import './App.css';
import RickAndMorty from './components/RickAndMorty';
import { useEffect, useState } from 'react';

function App() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
  
    const fetchImgs = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();

        const formatImgs = data.results.map((img) => ({
          id: img.id,
          name: img.name,
          image: img.image,
          status: img.status,
          created: img.created, 
        }));
        setImgs(formatImgs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImgs(); 
  }, []); 

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>

      <RickAndMorty items={imgs} />
    </div>
  );
}

export default App;
