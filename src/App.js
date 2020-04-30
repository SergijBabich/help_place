import React from 'react';
import { Redirect, BrowserRouter } from 'react-router-dom';
import {HashRouter, Route, withRouter} from  'react-router-dom';
import {Provider} from  'react-redux';
import Main from './components/main/main';
import HeaderContainer from './components/header/header_container';
import store from './redux/redux_store.js';
import  HistoryContainer from './components/history/history_container'
import MainContainer from './components/main/main_container';
import MyListContainer from './components/mylist/mylist_container';
import './App.css';
const   App = () => {
  return (

<div className="App">
     <HashRouter basename={process.env.PUBLIC_URL} >
         <Provider store ={store}>
         <Route exact path='/' render={() => <Redirect to='/start'/>}/>
            <div className="main_container">
              <div className="container_header">
                  <HeaderContainer />
              </div>
              <div className="container_items">
                <Route path='/active'  component = { HistoryContainer } />
                <Route path='/my-list'  component = { MyListContainer } />
                 <Route path='/start'  render = { () => {
                       return    <React.Suspense>
                                    <MainContainer/>
                                 </React.Suspense>
                 }} />
              </div>

            </div>
        
        
         </Provider>
     </HashRouter> 

    </div>
  );
}

export default App;
