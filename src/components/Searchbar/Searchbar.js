import { useState } from 'react'
import styles from './Searchbar.module.scss'
import Bookmark from '../Bookmark/Bookmark'
// MUST FINALIZE SEARCH COMPONENT BY INVESTIGATING HOW TO CORRECTLY ACCESS THE REAL BOOKMARKS
const bookmarks = [{
        title: "kevin",
        url: "isaChode",
    },
    {
        title: "cormack",
        url: "macarthy",
    },
    {
        title: "bobby",
        url: "bouche",
    },
    {
        title: "Ally",
        url: "Aron",
    },
]

const searchResults = (searchInput, bookmarks) => {
    if(!searchInput) {
        return bookmarks
    }
    return bookmarks.filter(bookmark => bookmark.title.includes(searchInput))
}

export default function Searchbar() {
    const [searchInput, setSearchInput] = useState('')
    const filteredBookmarks = searchResults(searchInput, bookmarks)
    return (
        <div className="search__bar">
            <label>Search for your bookmark here
            <input
                type="text"
                placeholder="Search..."
                onChange={e => setSearchInput(e.target.value)}
            /></label>
            <ul>
                {filteredBookmarks.map((bookmark, index) => (
                    <li key={index}>{bookmark.title}</li>
                ))}
            </ul>
        </div>
    )
}

// how do I specify where the search result will display? Need functioning search bar at top of bookmarks index only.
// useEffect to manipulate data, useState to grab it


// don't handle change on instances of basic functionality to occur. no need for things that DONT auto change. like form submission, if no page reload no need

// if you want the user to be able to make up tags you can't use enum. If you want to be able to ADD tags, the model should have an array of strings called tags. it's much simpler than you think it is. Searching by tags is a MATCH, not an includes search. (would still technically work.)

    // const SearchBar = ({input}) => {

    //     // const [searchResults, setSearchResults] = useState(input)

    //     const handleSearch = (e) => {
    //         const searchTerm = e.target.value
    //         setSearchInput(searchTerm)
    //     }
    //         const results = bookmarks.filter(bookmark => bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()))

    //         setSearchResults(results)
    //     }


    // there is no universal way to do a searchbar.
    // you've already acquired full list, don't need to contact api again in small scale search for this singular instance. LARGER databases require more complex search that calls the database again .  --> NO need to implement quick sort algorithms on small-scale search. that's big fish stuff.

    //binary search with extra steps. -> MongoDB HAS search built in. you just need to tell it to search .    .find({}) using regular expression.  Also has built in sorting .  .sort.filter.

// for tag search
    // const handleSelectTag = (e)=> {
    //     const term = e.target.value
    //     setSearchInput(term)


    // bookmark data must be a prop GIVEN to the searchbar component to successfully acquire ma
    // bookmarks are an OBJECT so you must specifically target the ELEMENT in question.  then call .includes to allow for that.
    //     // const results = bookmarks.filter(bookmark => bookmark.title.toLowerCase().includes(term.toLowerCase())) --> MUST call filter on an ARRAY.
    //     // e.preventDefault()
    //     handleSearch(searchInput)
    //     // onSearch(searchInput) I feel like this is irrelevant atm
    // }
// JSX CANT DO HANDLE SEARCH. you can't put a prop in an input like handlesearch. onsubmit={handleSearch} --> whatever you choose, it MUST be an on action name. onkeydown==enter would work as well.



/* tag buttons:

 <div className="tag__buttons"
        id="tag-buttons"
        >
        <button
        className="tag__btn"
        value="TagOne"
        onClick={handleSearch}
        >Tag One Search</button>
        <button className="tag__btn"
        value="TagTwo"
        onClick={handleSearch}
        >Tag Two Search</button>
        <button className="tag__btn"
        value="TagThree"
        onClick={handleSearch}
        >Tag Three Search</button>
        </div>
*/
