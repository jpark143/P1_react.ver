import { Provider } from 'react-redux';
import './App.css';
import Router from './router';
import store from './state/store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App-header">
      <Router />
    </div>
    </Provider>
  );
}

export default App;
