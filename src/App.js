import React, { Component } from 'react';

import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Search from './components/Search';
import UsersList from './components/UsersList';
import NextPrev from './components/NextPrev';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">

      <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 content">
                     <div className="well">
                         <div className="row">
                             <div className="col-sm-12 title">
                              <h1>Find User's Record</h1>
                            </div>
                        </div>
       
        <Search/>
        <UsersList/>
        <NextPrev/>
        </div>
       </div>
       </div>
       </div>
      </div>
      </Provider>
    );
  }
}

export default App;
