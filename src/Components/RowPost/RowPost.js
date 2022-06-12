import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { API_KEY } from '../../constants/constants'
import './RowPost.css'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlid]=useState('')
  useEffect(()=>{
    // axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=213`).then(response=>{
      axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('netfork')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    // console.log(response.data)
    if(response.data.results.length!==0){
      setUrlid(response.data.results[0])
    }
    else{
      console.log('not available')
    }
  })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>

          
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'}  src={ `${'https://image.tmdb.org/t/p/original'+obj.backdrop_path}`} alt="" />
            )}
        
        </div>
     {urlId &&   <Youtube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}

export default RowPost
