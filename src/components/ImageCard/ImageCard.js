import React,{Component} from 'react';
class ImageCard extends Component {
     state = { spans : 0  }
     constructor(props){
          super(props)
          this.imageRef = React.createRef();
     }
     componentDidMount() {
          this.imageRef.current.addEventListener("load",this.setSpans)
          //console.log(this.imageRef.current);
          //console.log(this.imageRef.current.clientHeight);
     }
     setSpans = () => {
          const imageHeight = this.imageRef.current.clientHeight;
          const spans = Math.ceil(imageHeight/ 10);
          this.setState({spans})
     }
     render() { 
          const {altText,urls} = this.props.image;
          //console.log(this.props.image);
          return (  
               <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                    <img 
                       ref={this.imageRef}
                       alt={altText} 
                       src={urls.regular} 
                    />
               </div>
          );
     }
}
 
export default ImageCard;