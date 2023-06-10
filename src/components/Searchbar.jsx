import React from "react";

import { useState } from "react";



export default function Seacrhbar({onProductSearch}) {

    const [searchText, setSearchText] = useState("");
    const [resetSerachFlag,setResetSerachFlag] = useState(false);
    const onSearchText = ((event) => {
        let inputval = event.target.value;
        setSearchText(inputval);
        

    })
    
    const onSearch = ()=>{

        onProductSearch(searchText)
        setResetSerachFlag(true)
    }

    const resetSearch = () => {
        setSearchText('');
        onProductSearch('')
        setResetSerachFlag(false)
    }


    return (

        <div class="search-local">
            <div class="icon">
                <ion-icon name="location-outline"></ion-icon>
            </div>
            <span className="srch-cnt">
                <input disabled={resetSerachFlag} value={searchText} className="search-box" type="text" placeholder="Search..........." onChange={onSearchText} />
                <div  className={"disbale-srch-pnl "+ (resetSerachFlag ? '' : 'd-none')}><i class="fa-solid fa-xmark close" onClick={resetSearch}></i></div>
            </span>
            <button onClick={onSearch}>
                <a href="#">Search</a>
                <ion-icon name="search-outline" class="search-icon"></ion-icon>
            </button>
        </div>
    )

}