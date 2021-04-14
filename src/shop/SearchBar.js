import React from 'react'

const SearchBar = ({ keyword, setKeyword }) => {
    return (
        <input
            className='form-control input-search'
            key='prod-search'
            value={keyword}
            placeholder='Zoek een product'
            onChange={(e) => setKeyword(e.target.value)}
        />
    )
}

export default SearchBar
