import './App.css';
import UseEffectClass from './components/UseEffectClass';
import UseEffectFunction from './components/UseEffectFunction';
import UseFetchData from './components/api/UseFetchData'
import TodoList from './components/itemsList/TodoList'
import TodoListCallback from './components/itemsList/TodoListCallback'
import CallbackMemo from './components/CallBackMemo'

function App() {
  return (
    <div className="App">
      {/* <UseEffectClass />
      <UseEffectFunction />
      <UseFetchData /> */}
      {/* <TodoList /> */}
      {/* <TodoListCallback /> */}
      <CallbackMemo />


    </div>
  );
}

export default App;