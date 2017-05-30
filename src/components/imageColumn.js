import React from 'react';
class ImageColumn extends React.Component {
    render() {
        const {imageUrl,onClick} = this.props;
        return (<div className="col col-lg-1 col-md-2  col-xs-4">
            <div className="imgContainer">
                <img  alt="This is a test image !!!!"  onClick={onClick} src={imageUrl} />
                <div className="details">
                    <p>This is a test image !!!!</p>
                </div>
            </div>
        </div>)
    }
}
export default ImageColumn