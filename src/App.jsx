import './App.css'
import Wallet from './components/Wallet';
import ToDoList from './components/ToDoList';
import Api from './components/Api';

function App() {
  return (
    <div className='justify-center'>
      <h1>Redux Toolkit + React</h1>
      <br /><br />
      <Wallet />
      <br /><br />
      <ToDoList />
      <br /><br />
      <Api />
    </div>
  )
}

export default App
