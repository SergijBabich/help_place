import React from 'react';
import {connect} from   'react-redux';
import taskReducer from '../../redux/task_reducer'
import MyList from './mylist';
import { getMyListTask, removeTaskUser} from '../../redux/task_reducer'
let mapStateToProps = (state) => {
  return {
    myListTask:state.task.myListTask,
    myTaskId:state.task.myTaskId
  }
}

const MyListContainer = connect (mapStateToProps, {getMyListTask, removeTaskUser})(MyList);
export default MyListContainer;