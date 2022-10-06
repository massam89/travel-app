import style from '../css/module/ResortsList.module.css'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import ResortItems from '../components/ResortItems'

const ResortsList = (props) => {
  return (
    <div className={style.resortsList}>
      <Filters />
      <ResortItems />
      <Pagination />
    </div>
  )
}

export default ResortsList