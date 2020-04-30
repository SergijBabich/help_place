import {putTask} from '../api/api';
const POST_USER_TASK = "POST_USER_TASK"; 
const POST_INA_STASH = 'POST_INA_STASH';
const GET_MY_LIST_TASK = 'GET_MY_LIST_TASK';
const GET_MY_LIST_ID = 'GET_MY_LIST_ID';
let initialState = {
  myTaskId:[],
  newTask:[],
  myTask:[],
  myListTask:[]
};
const taskReducer = (state = initialState, action) => {
    switch (action.type) {

       case  POST_INA_STASH:        
          let gotTask = {
            _id: action.data._id,
            name: action.data.name,
            surname: action.data.surname,
            nameExecutor: action.data.nameExecutor,
            phoneClient: action.data.phoneClient,
            phoneExecutor: action.data.phoneExecutor,
            checkPay: action.data.checkPay,
            sity: action.data.sity,
            desctiption: action.data.desctiption,
            checkwillingness: action.data.checkwillingness,
            commentExecutor: action.data.commentExecutor,
            executionTime: action.data.executionTime,
            surnameExecutor: action.data.surnameExecutor
          } 
          let isTake = true;

      return {
       ...state,
       myTask: [...state.myTask,  gotTask],
       isTake:true
      }
      case GET_MY_LIST_TASK:
        let evenTask = {
          _id: action.data._id,
          name: action.data.name,
          surname: action.data.surname,
          nameExecutor: action.data.nameExecutor,
          phoneClient: action.data.phoneClient,
          phoneExecutor: action.data.phoneExecutor,
          checkPay: action.data.checkPay,
          sity: action.data.sity,
          desctiption: action.data.desctiption,
          checkwillingness: action.data.checkwillingness,
          commentExecutor: action.data.commentExecutor,
          executionTime: action.data.executionTime,
          surnameExecutor: action.data.surnameExecutor
        } 
        return {
          ...state,
          myListTask:  action.data
        }
          case GET_MY_LIST_ID:
          let name = action.name;
        return {
          ...state,  myTaskId: [...state.myTaskId,  name],
        }
            default:
          return state;
    }
}



 

 const setFullTask = (data) => {  
  return {
    type: POST_INA_STASH,
    data
  }
}
const getmyTaskList = (data) => {  
  return {
    type: GET_MY_LIST_TASK,
    data
  }
}


const getMyListId = (name) => {
  return {
    type: GET_MY_LIST_ID,
    name
  }
}


export const createTask = (name, descValue, checkbo, sity, phone) => {
  return  async (dispatch) => {
   let data = await putTask.createNewTask(name, descValue, checkbo, sity, phone );
   dispatch(getMyListId(data.name));
   console.log(data); 
   
  }
}

export const getMyListTask = (JSONStringListId) => {
  return  async (dispatch) => {

   let data = await putTask.getMyListTask(JSONStringListId);
    dispatch(getmyTaskList(data))
   console.log(data);  

  }
}
export const appointAnExecutor = (nameExecutor, surnameExecutor, phoneExecutor, executionTime, commentExecutor, id) => {
  return  async (dispatch) => {
   let data = await putTask.putTaskForMake(nameExecutor, surnameExecutor, phoneExecutor, executionTime, commentExecutor, id );
   console.log(data); 
   const chooseTaskExecutor = JSON.stringify(data.value);
   localStorage.setItem('chooseTask', chooseTaskExecutor);
   console.log(chooseTaskExecutor);
   dispatch(setFullTask(data.value));
   

  }
}
export const removeTaskUser = (id) => {
  return   async (dispatch) => {
     let data = await putTask.deleteUserTask(id);
  }
}



export default taskReducer;