import { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { Context } from '../context/ContextProvider';

const ResortDetails = (props) => {

  const {id: resortId} = useParams()
  const {state} = useContext(Context)
 
  const resort = state.allResorts.find(resort => +resort.id === +resortId)

  console.log(state);
  return (
    <div>
      <h2>{resort.title}</h2>
      <p>{resort.description}</p>
      <p>{resort.price}</p>
      <img src={resort.imageUrl} />
    </div>
  )
}

export default ResortDetails