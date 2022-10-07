import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Context } from '../context/ContextProvider';

const ResortItem = (props) => {

  const {addBucketHandler} = useContext(Context)

  const buttonHandler = () => {
    addBucketHandler(props.resort.id);
  }
  
  return (
    <>
      <td><Link to={`/resorts/${props.resort.id}`}>{props.resort.title}</Link></td>
      <td>{props.resort.description.substring(0, 200) + '...'}</td>
      <td>{props.resort.price}</td>
      <td><img src={props.resort.imageUrl} alt={props.resort.title}/></td>
      <td><button onClick={buttonHandler}>Add</button></td>
    </>
   
  )
}

export default ResortItem