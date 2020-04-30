import React from 'react';
import {connect} from   'react-redux';
import taskReducer from '../../redux/task_reducer'
import History from './history'
let mapStateToProps = (state) => {
  return {
    myTask:state.task.myTask
    
  }
}

const HistoryContainer = connect (mapStateToProps)(History);
export default HistoryContainer;