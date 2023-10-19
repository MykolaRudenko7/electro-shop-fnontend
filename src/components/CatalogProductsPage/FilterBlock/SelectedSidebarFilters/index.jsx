import { v4 as uuidv4 } from 'uuid'
import { observer } from 'mobx-react-lite'
import productsStore from 'stores/productsStore'
import FilteredResultsCountTabButton from '@/SelectedSidebarFilters/FilteredResultsCountTabButton'

const SelectedSidebarFilters = observer(() => {
  const { selectedSidebarFilters } = productsStore

  return (
    <>
      {selectedSidebarFilters &&
        selectedSidebarFilters.map(({ title }) => (
          <FilteredResultsCountTabButton key={uuidv4()} title={title} />
        ))}
    </>
  )
})
export default SelectedSidebarFilters
