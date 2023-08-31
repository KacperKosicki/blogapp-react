import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
