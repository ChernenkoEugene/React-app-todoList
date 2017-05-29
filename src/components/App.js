import React from 'react';
import styles from './App.css';


const App = () => (
  <main className={styles.app}>
<h1>
    <div className="container">
  	  <div className="jumbotron">
        <button type="button" className="btn btn-lg btn-default">Default</button>
        <button type="button" className="btn btn-lg btn-primary">Primary</button>
        <button type="button" className="btn btn-lg btn-success">Success</button>
        <button type="button" className="btn btn-lg btn-info">Info</button>
        <button type="button" className="btn btn-lg btn-warning">Warning</button>
        <button type="button" className="btn btn-lg btn-danger">Danger</button>
        <button type="button" className="btn btn-lg btn-link">Link</button>
      </div>
  	</div>
  </main>
);

export default App;