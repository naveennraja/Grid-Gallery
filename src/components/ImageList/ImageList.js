import React from 'react';
import Message from "../Message/Message";
import "./imageList.css";

import ImageCard from "../ImageCard/ImageCard";
const ImageList = (props) => {
     let displayData = null;
     if(props.imageData.length === 0 ){
          return <Message text="No data of this categories is present"/>
     }else{
          displayData =  props.imageData.map((data)=>{
               return <ImageCard key={data.id}  image={data} />
          })
     } 
        
     return ( 
          <div className="image-list">
               {displayData}
          </div>
     );
}
 
export default ImageList;