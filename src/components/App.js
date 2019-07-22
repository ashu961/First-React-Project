import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import GoogleAuth from './GoogleAuth';
class App extends React.Component {
    state = { images: [] };
    oniSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID a7bcb00adc03a278bcfba8e9f0a102ad3e07b711ef8549f9807d47ffa9969b4f'
            }
        });
        this.setState({ images: response.data.results });

    }
    render() {
        return (
            <div>
                <div>
                <div class="ui inverted menu">
                    <div class="header item">Brand</div>
                    <div class="active item">Link</div>
                    <a class="item">Link</a>
                    <div class="ui dropdown item">
                        Dropdown
                     <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item">Action</div>
                            <div class="item">Another Action</div>
                            <div class="item">Something else here</div>
                            <div class="divider"></div>
                            <div class="item">Separated Link</div>
                            <div class="divider"></div>
                            <div class="item">One more separated link</div>
                        </div>
                    </div>
                    <div class="right menu">
                        <div class="item">
                            <div class="ui transparent inverted icon input">
                            <div><SearchBar oniSubmit={this.oniSubmit} /></div>
                             </div>
                        </div>
                        </div>
                            <a class="item"><div><GoogleAuth /></div></a>
                        </div>
                    </div>
                    <div class="ui column grid">
                        <div class="column">
                            <div class="ui segment">
                                <ImageList images={this.state.images} />
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        export default App;


