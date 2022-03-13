import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <TodoForm />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
