import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import todoApp from './reducers';



const store = createStore(todoApp)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
	    <Provider store={store}>
	   		 <App />
	  	</Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}