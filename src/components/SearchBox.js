import React from 'react';

// search 的 fn 被當成 props 傳進此 component
const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--blue bg-washed-yellow'
                type='search' 
                placeholder='search friends'
                onChange={ searchChange } 
            />
        </div>
    );
}

export default SearchBox;