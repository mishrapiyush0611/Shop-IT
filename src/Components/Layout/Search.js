import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom'
const Search = () => {
    const [keyword,setKeyword]=useState('')
    const Navigate=useNavigate();
    const searchHandler=(e)=>{
        e.preventdefault()
        if(keyword){
             Navigate(`/search/${keyword}`)
        }
        else{
            Navigate('/')
        }
    }
  return (
    <form onSubmit={searchHandler}>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
            onChange={(e)=>e.target.value}
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Search