import React, {useState} from 'react'

const SearchBar = (props) => {

    const [searchResult, setSearchResult] = useState("")
    const {getSearch} = props

    const onSubmitHandler = e => {
        e.preventDefault();
        getSearch(searchResult)
        console.log(searchResult)
    }


    return (
        <div>
            <form onSubmmit = {onSubmitHandler}>
                <input type="text" placeholder="Search Movies" value={searchResult} onChange={(e)=>setSearchResult(e.target.value)} />
            </form>
            
        </div>
    )
}

export default SearchBar
