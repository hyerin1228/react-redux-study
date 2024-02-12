import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UPDATE_PROFILE, updateProfileActionCreator } from './redux/reducers/user.reducer';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const handleClick = () => {

    const action = updateProfileActionCreator({ nickname: "hhr", age: 33 })
    // const action = {
    //   type: UPDATE_PROFILE,
    //   payload: {
    //     nickname: "hhr", age: 33
    //   },
    // };

    dispatch(action);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>눌러눌러</button>
      </header>
    </div>
  );
}

export default App;
