import { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { Context } from '../context/ContextProvider';

const ResortDetails = (props) => {

  const {id: resortId} = useParams()
  const {state, addBucketHandler} = useContext(Context)
 
  const resort = state.allResorts.find(resort => +resort.id === +resortId)
 
  const buttonHandler = () => {
    addBucketHandler(resort.id);
  }

  return (
    <div>
      <h2>{resort.title}</h2>
      <p>{resort.description}</p>
      <p>{resort.price}</p>
      <img src={resort.imageUrl} alt={resort.title} />
      <button onClick={buttonHandler}>Add</button>
    </div>
  )
}

export default ResortDetails