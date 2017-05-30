import React from 'react';
class ModalPopup extends React.Component {
    render() {
        const { imgUrl,show,onClose ,caption } = this.props;
        const style={
            display:show?'block':'none'
        }
        return (
            <div onClick={onClose} style={style} className="modal">
                
                    <span onClick={onClose} className="close">&times;</span>
                    <img alt={caption} className="modal-content" src={imgUrl}/>
                      <div className="caption">{caption}</div>
                
            </div>
        )
    }
}
export default ModalPopup;