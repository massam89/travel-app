import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import ResortItems from '../components/ResortItems'

const ResortsList = (props) => {
  return (
    <div>
      <Filters />
      <ResortItems />
      <Pagination />
    </div>
  )
}

export default ResortsList