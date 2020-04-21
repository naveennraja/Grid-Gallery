import React from 'react';
const Message = (props) => {
     console.log(props);
     return (
     <div className="ui olive message">
          {props.text}
     </div>);
}
 
export default Message;