import React from 'react';

class SearchBar extends React.Component{
state={term:''};
onInputChange= (e)=>{
    this.setState({term: e.target.value});
};
onInputSubmit=e=>{
    e.preventDefault();
    this.props.oniSubmit(this.state.term);
}
render(){
    return(
        <div >
        <form onSubmit={this.onInputSubmit} className="ui icon input" style={{margin: '10px'}}>
            
        <input type="text" placeholder="Search..." onChange={this.onInputChange}/>
        <i className="circular search link icon"></i>
        </form>
        
      </div>

    );

}
}
export default SearchBar;