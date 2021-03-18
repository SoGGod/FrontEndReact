import React,{useState} from 'react'
import './Search.css'

function Search({history}) {

    const [keyword,setKeyword]=useState('')
     const searchHandler=(e)=>{
     e.preventDefault()
     if(keyword.trim){
      history.push(`/search/${keyword}`)
     }else{
         history.push('/')
     }
    }
    

    return (
        <div>

        <div className="col-md-7">
                <form onSubmit={searchHandler} onChange={(e)=>setKeyword(e.target.value)} className="d-flex">
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn " type="submit"><i className="bi bi-search"></i></button>
          </form>
                </div>

        </div>
    )
}

export default Search
