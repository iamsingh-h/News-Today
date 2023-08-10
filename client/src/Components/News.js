import React from 'react'
import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './static/News.css'

function News({category,auth}) {
    
    //const API_KEY = process.env.API_KEY
    const [newss,setNewss] = useState([]);
    const [page,setPage] = useState(1)
    
    let url = 'https://newsapi.org/v2/everything?q='+ category + `&apiKey=d315c6b76cd645f9a96c2ea1f26ada48`
    console.log('url',url)

    useEffect(()=>{
       axios.get(url)
      .then((res)=>{
        console.log(res)
        let articles = res?.data.articles
        setNewss(articles)
      })
      
      
    },[])
  

    const selectPageHandler = (selectedPage) =>{
      if(selectedPage>=1 && selectedPage<=newss.length/10 && selectedPage !== page){
        setPage(selectedPage);
      }
    }
  
  
    return (
      !auth?<div className='err'>Please Log In</div>
      :
      <div>
        <div className="abox">
        {
          newss?.slice(page*10-10,page*10).map((news,index)=>{
            return(
              <div key={index}>
                <Card news = {news}/>
              </div>
            )
          }
          )
        }  
 
        </div>

        {newss.length>0 &&
          <div className='pagination'>
            <span 
            onClick={()=>selectPageHandler(page-1)}
            className={page >1 ? "" : "pagination_disabled"}>
              ◀️
              </span>
            {
              [...Array(newss.length / 10)].map((_,i)=>{
                return (
                <span 
                className={page === i+1 ? "pagination_selected" : ""}
                onClick={()=>selectPageHandler(i+1)}
                key={i}>
                  {i+1}
                  </span>
                  );
              })
            }
            <span 
            onClick={()=>selectPageHandler(page+1)}
            className={page < newss.length/10 ? "" : "pagination_disabled"}>
            ▶
            </span>
          </div>
        }
      
      
      
      </div>  

    );
}


export default News