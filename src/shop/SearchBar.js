import React from 'react'

const SearchBar = ({ search, setSearch }) => {
    return (
        <input
            className='form-control input-search'
            key='prod-search'
            value={search}
            placeholder='Zoek een product'
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}

export default SearchBar
