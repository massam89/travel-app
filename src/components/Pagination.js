import { useContext } from "react"
import { Context } from "../context/ContextProvider"
import styles from '../css/module/Pagination.module.css'

const Pagination = (props) => {
  const {state, paginateHandler} = useContext(Context)
  const pageNumber = Math.round(state.allResorts.length/20);

  const pageNumberArray = []
  for(let i = 1 ; i <= pageNumber; i++){
    pageNumberArray.push(i);
  }

  const clickPageHandler = (e) => {
    paginateHandler(e.target.innerText);
  }

  return (
    <div className={styles.pagination}>
      <ul>
        {pageNumberArray.map((item,index) => 
          <li onClick={clickPageHandler} key={index}>{item}</li>
        )}
      </ul>
    </div>
  )
}

export default Pagination