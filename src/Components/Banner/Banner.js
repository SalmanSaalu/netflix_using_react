import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {

  const [movie,setMovie]=useState()
  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`).then((response)=>{
        // console.log(response.data.results[0])
        setMovie(response.data.results[0])
      })
  },[])
  return (

    <div     style={{backgroundImage:`url(${movie ? 'https://image.tmdb.org/t/p/original'+movie.backdrop_path : ""})`}}

    className='banner'>

      <div className='content'>
        <h1 className='title'>{movie ? movie.original_name : ""}</h1>
        <div className='banner_buttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
        </div>
        <h1 className='description'>
{movie ? movie.overview : ""}        </h1>
      </div>
      <div className="fade_bottom">
          
      </div>
    </div>
  )
}

export default Banner
