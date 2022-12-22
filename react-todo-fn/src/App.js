
import './App.css';
import Todos from './modules/todos/components/Todos';
import Users from './modules/users/components/Users';
import {useState} from 'react';
import Navigation from "./modules/common/components/Navigation";

function App() {
  const [currentPath, setCurrentPath] = useState('todos');
  return (
    <>
      <Navigation currentPath={currentPath} navigate={setCurrentPath} />
      {currentPath === 'todos' ? <Todos /> : null}
      {currentPath === 'users' ? <Users /> : null}
    </>
  );
}

export default App;
