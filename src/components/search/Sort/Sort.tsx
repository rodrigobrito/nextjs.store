import React from 'react'
import { useSearch } from 'src/sdk/search/useSearch'

const OptionsMap = {
  'price-desc': 'Price, descending',
  'price-asc': 'Price, ascending',
  'orders-desc': 'Top sales',
  'name-asc': 'Name, A-Z',
  'name-desc': 'Name, Z-A',
  'release-desc': 'Release date',
  'discount-desc': 'Discount',
  'score-desc': 'Relevance',
}

const keys = Object.keys(OptionsMap) as Array<keyof typeof OptionsMap>

function Sort() {
  const {
    setSort,
    searchParams: { sort },
  } = useSearch()

  return (
    <select
      data-testid="search-sort"
      onChange={(e) => setSort(keys[e.target.selectedIndex])}
    >
      {keys.map((key) => (
        <option selected={sort === key} key={key} value={key}>
          {OptionsMap[key]}
        </option>
      ))}
    </select>
  )
}

export default Sort
