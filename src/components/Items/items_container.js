import React from 'react';
import {connect} from   'react-redux';
import itemsReducer from '../../redux/items_reducer.js';
import {getItems} from '../../redux/items_reducer.js';
import {setCurrentPage} from '../../redux/items_reducer.js';
import {setCurrentPageNumber}  from '../../redux/items_reducer.js'; 
import Items from './items.js';
import { appointAnExecutor} from '../../redux/task_reducer'
import taskReducer from '../../redux/task_reducer'
class ItemsAPIComponent extends React.Component  {

  componentDidMount(){
      setCurrentPageNumber(this.props.pageCount ,this.props.page);
     this.props.getItems(this.props.pageCount ,this.props.page);
  }
  render() {

  return (
      <>
      <Items users={this.props.users}
             page={this.props.page}
             pageCount={this.props.pageCount}
             totalUsersCount={this.props.totalUsersCount}
             getItems = {this.props.getItems}
             appointAnExecutor={this.props.appointAnExecutor}
             _id = {this.props._id}
                        />
      </>
  )
}
}

let mapStateToProps = (state) => {

  return {
    users: state.items.users,
    page:state.items.page,
    pageCount: state.items.pageCount,
    totalUsersCount:state.items.totalUsersCount,
    _id:state.task.myTaskId
    
  }
}

const ItemsContainer = connect (mapStateToProps, {getItems, appointAnExecutor })(ItemsAPIComponent);
export default ItemsContainer;