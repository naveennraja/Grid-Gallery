import React,{Component} from 'react';
import "./commonStyle.css";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar/SearchBar";
import Message from "./Message/Message";
import ImageList from "./ImageList/ImageList";

class App extends Component {
     state = { imageList:[] , message : "Please enter cars,bike,flowers,plant to display any data."}
      onSearchSubmit = async (val) =>  {
         this.setState({imageList: []});
         const response = await unsplash.get('https://api.unsplash.com/search/photos',{
               params: {query: val},
          });
          response.data.results.length === 0 ? 
          this.setState({message: "No data of this categories is present"}) :  
          this.setState({imageList: response.data.results});
     }
     render() { 
          return (
          <div className="ui container w-100" style={{marginTop:"20px"}}>
               <SearchBar onSubmit= {this.onSearchSubmit}/>
               {this.state.imageList.length === 0 ? 
                    <Message text ={this.state.message} /> :
                    <ImageList imageData={this.state.imageList}/>}
          </div>);
     }
}
 
export default App;