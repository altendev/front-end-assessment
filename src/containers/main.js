import React from 'react';
import { Component } from 'react';
import ImageColumn from '../components/imageColumn';
import ModalPopup from '../components/modalPopup';
import Header from '../components/header';
import Footer from '../components/footer';
import  '../../scss/index.scss';
class MainPage extends Component {

onImageClick(event){
 let imgUrl = event.target.attributes[1].nodeValue;
let caption = event.target.nextSibling.innerText;
this.setState({showModal:true,imgUrl:imgUrl,caption:caption});
}
modalClose(){
    this.setState({showModal:false});
}
    render() {
        let showModal=false;
        let imgUrl = '';
        let caption = '';
        if(this.state){
            showModal = this.state.showModal;
            imgUrl = this.state.imgUrl;
            caption = this.state.caption;
        }
        return (
            <div className="wrapper">
                 <Header/>
            <div className="container">
           
            <div className="row">
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/150X200" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/150X200" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/150X200" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/150X200" />
            </div>
            <div className="row">
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/200X150" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/200X150" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/200X150" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/200X150" />
            </div>
            <div className="row">
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/200X150" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/150x200" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/200X150" />
                <ImageColumn onClick={this.onImageClick.bind(this)} imageUrl="http://placehold.it/150x200" />
            </div>
            <ModalPopup caption={caption} imgUrl={imgUrl} onClose={this.modalClose.bind(this)} show={showModal}/>
                 </div>
                 <Footer/>
        </div>);
    }
}
export default MainPage;