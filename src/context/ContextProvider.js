import React, {useEffect, useReducer} from "react";
import data from '../data/data.json'
import { sortArray } from "../lib/helper";
export const Context = React.createContext()

const initialState = {
  allResorts: [],
  showResorts: [],
  bucket:[]
}

const reducer = (state,action) => {
  if(action.type === 'GET-ALL-RESORTS'){
    const dataWithBucketAndPricePlus = action.data.map(item => {return {...item, inBucket: false, pricePlus: +item.price.replace('$','')}})
    return {...state, allResorts: dataWithBucketAndPricePlus, showResorts: dataWithBucketAndPricePlus.slice(0, 20) }
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

  if(action.type === 'SORT'){
    const sortResort = sortArray(state.allResorts, action.payload.column, action.payload.sort)
    return {...state, showResorts: sortResort.slice(0,20)}
  }

  if(action.type === 'FILTER'){
    if(action.data === 'all'){
      return {...state, showResorts: state.allResorts.slice(0,20)}
    }
    const filterResorts = state.allResorts.filter(item => item.title === action.data || item.pricePlus === +action.data)
    return {...state, showResorts: filterResorts.slice(0,20)}
  }
  if(action.type === 'PAGINATION'){
    const pageNumber = +action.data

    const paginatedResorts = state.allResorts.slice((pageNumber-1)*20, pageNumber*20)
    
    return {...state, showResorts: paginatedResorts}
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

  const sortHandler = (data) => {
    dispatch({type: 'SORT', payload: data})
  }

  const filterHandler = (data) => {
    dispatch({type: 'FILTER', data: data})
  }

  const paginateHandler = (data) => {
    dispatch({type: 'PAGINATION', data:data})
  }

  const contextItems = {
    state,
    addBucketHandler,
    deleteBucketHandler,
    sortHandler,
    filterHandler,
    paginateHandler
   }

  return (
    <Context.Provider value={contextItems}>{props.children}</Context.Provider>
  ) 
}

export default ContextProvider