// == Import : npm
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// == Import : local
import App from 'src/components/App';
import store from './store';

// == Render
const rootReactElement = (
  <>
    <ToastContainer autoClose={2500} />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);

const target = document.getElementById('root');

render(rootReactElement, target);
