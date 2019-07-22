import React from 'react';

const Style={
    border: '1px solid #ddd',
    borderRadius: 'auto',
    padding: '20px',
    width: '450px'
};

class ImageList extends React.Component{
   
    render(){
        const images= this.props.images.map((image)=>{
            return <img style={Style} key={image.id} alt={image.description} src={image.urls.regular}/>
        });
        return <div>{images}</div>

    }


}
export default ImageList;
