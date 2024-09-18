import React, { useState } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {

    const [search, setSearch] = useState<string>("");

    const onclick = (e: any) => {
        setSearch(e.target.value);
        console.log(e);
    }

    return (
        <>
        <input value={search} onChange={(e) => onclick(e)} ></input>
        
        </>
    )
}

export default Search