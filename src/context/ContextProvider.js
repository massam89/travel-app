import React, {useEffect, useReducer} from "react";
import data from '../data/data.json'
export const Context = React.createContext()

const initialState = {
  allResorts: [],
  showResorts: [],
  bucket:[],
  addBucketHandler: () => {}
}

const reducer = (state,action) => {
  if(action.type === 'GET-ALL-RESORTS'){
    const dataWithBucket = action.data.map(item => {return {...item, inBucket: false}})
    return {...state, allResorts: action.data, showResorts: dataWithBucket }
  }

  if(action.type === 'ADD-TO-BUCKET'){
    if(state.bucket.some(item => +item.id === +action.id)){
      return {...state}
    } else {
      const selectedResort = state.allResorts.find(resort => +resort.id === +action.id)
      return{...state, bucket: [...state.bucket, selectedResort]}
    }
  }
  if(action.type === 'REMOVE-FROM-BUCKET'){
    const newBucket = state.bucket.filter(item => +item.id !== action.id)
    return {...state, bucket: newBucket}
  }
  return initialState
}

const ContextProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({type:'GET-ALL-RESORTS', data: data})
  }, [])

  const addBucketHandler = (id) => {
    dispatch({type: 'ADD-TO-BUCKET', id: id})
  }

  const deleteBucketHandler = (id) => {
    dispatch({type: 'REMOVE-FROM-BUCKET', id: id})
  }

  console.log(state);


  return (
    <Context.Provider value={{ state, addBucketHandler, deleteBucketHandler }}>
      {props.children}
    </Context.Provider>
  ) 
}

export default ContextProvider