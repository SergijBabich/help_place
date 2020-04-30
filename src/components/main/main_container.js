
import React from 'react';
import {connect} from   'react-redux';
import taskReducer from '../../redux/task_reducer'
import {createTask, appointAnExecutor , getMyListTask} from '../../redux/task_reducer'
import Main from './main.js';
import {getItems} from '../../redux/items_reducer.js';
let mapStateToprops = (state) => {
  return {
      task:state.task.newTask,
      myTaskId:state.task.myTaskId
      
     

  }

}


const MainContainer = connect(mapStateToprops, {createTask, appointAnExecutor, getItems, getMyListTask} )(Main);
export default MainContainer;