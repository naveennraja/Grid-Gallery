import React,{Component} from 'react';
class SearchBar extends Component {
     state = { searchValue : ""  }
     onInputChnage =  (evt) => {
          console.log("Changed",evt.target.value);
     }
     onFormSubmit = (e) => {
          e.preventDefault()
          //console.log(this.state.searchValue);
          this.props.onSubmit(this.state.searchValue)
     } 
     render() { 
          return (
          <div className="ui segment">
               <form onSubmit={this.onFormSubmit} className="ui from">
                    <div className="feild ui search">
                         <div className="ui icon input w-100">
                              {/* <label htmlFor="Search">Search Image</label> */}
                              <input type="text" 
                                   placeholder="Search" 
                                   id="Search" 
                                   className="prompt w-100"
                                   value={this.state.searchValue}
                                   onChange={ (evt) => this.setState({searchValue: evt.target.value})} 
                              />
                              <i className="search icon"></i>
                         </div>
                    </div>
               </form>
          </div>
          );
     }
}
 
export default SearchBar;