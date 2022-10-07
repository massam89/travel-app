import { useContext, useState } from "react";
import {Context} from '../context/ContextProvider'
import styles from '../css/module/Filters.module.css'

const Filters = (props) => {

  const {state, filterHandler} = useContext(Context)
  const [title, setTitle] = useState('default')
  const [price, setPrice] = useState('default')

  const titleArray = state.allResorts.map(item => {
    return item.title
  })

  const priceArray = state.allResorts.map(item => {
    return item.pricePlus
  })

  const selectHandler = (e) => {
    // eslint-disable-next-line
    if(e.target.value == +e.target.value){
      setTitle('default')
      setPrice(e.target.value)
    } else if (e.target.value === 'all'){
      setTitle('all')
      setPrice('all')
    } else {
      setPrice('default')
      setTitle(e.target.value) 
    }

    filterHandler(e.target.value)
  }

  return (
    <div className={styles.filters}>
        <select onChange={selectHandler} value={title}>
          <option disabled value='default'>Select a title</option>
          <option value='all'>All</option>
          {titleArray && 
            titleArray.map((item,index) => <option key={index} value={item}>{item}$</option>)
          }
        </select>
        <select onChange={selectHandler} value={price}>
          <option disabled value='default'>Select a price</option>
          <option value='all'>All</option>
          {priceArray && 
            priceArray.map((item,index) => <option key={index} value={item}>{item}$</option>)
          }
        </select>
    </div>
  );
};

export default Filters;
