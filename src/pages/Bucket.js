import { useContext } from "react"
import { Context } from "../context/ContextProvider"
import styles from '../css/module/Bucket.module.css'

const Bucket = (props) => {
  const {state, deleteBucketHandler} = useContext(Context)

  const deleteHandler = (e) => {
    deleteBucketHandler(+e.target.id)
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Operate</th>
        </tr>
      </thead>

      <tbody>
        {state.bucket &&
        state.bucket.map(item => 
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td><button id={item.id} onClick={deleteHandler}>Delete</button></td>
          </tr>
          ) 
        }
      </tbody>
    </table>
  )
}

export default Bucket