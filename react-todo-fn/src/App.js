
import './App.css';
import './modules/gallery/components/Gallery';
import Todos from './modules/todos/components/Todos';
import Users from './modules/users/components/Users';
import {useState} from 'react';
import Navigation from "./modules/common/components/Navigation";
import Gallery from "./modules/gallery/components/Gallery";

function App() {
  const [currentPath, setCurrentPath] = useState('gallery');
  return (
    <>
      <Navigation currentPath={currentPath} navigate={setCurrentPath} />
      {currentPath === 'todos' ? <Todos /> : null}
      {currentPath === 'users' ? <Users /> : null}
        {currentPath === 'gallery' ? <Gallery /> : null}
    </>
  );
}

export default App;
