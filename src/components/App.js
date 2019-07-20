import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component{
state={images:[]};
    oniSubmit=async (term)=>{
       const response= await axios.get('https://api.unsplash.com/search/photos',{
        params: {query: term},
        headers:{
            Authorization: 'Client-ID a7bcb00adc03a278bcfba8e9f0a102ad3e07b711ef8549f9807d47ffa9969b4f'
        }
        });
        this.setState({images:response.data.results});

    }
    render(){
        return (
            <div>
            <div><SearchBar oniSubmit={this.oniSubmit}/></div>
            <div><ImageList images={this.state.images}/></div>
            </div>

        );
    }
}
export default App;
