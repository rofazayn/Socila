import React, { Component, createRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class CropperInput extends Component {
  cropper = createRef();

  cropImage = () => {
    const { setImage } = this.props;
    if (typeof this.cropper.current.getCroppedCanvas() === 'undefined') {
      return;
    }

    this.cropper.current.getCroppedCanvas().toBlob((blob) => {
      setImage(blob);
    }, 'image/jpeg');
  };

  render() {
    const { image } = this.props;
    return (
      <Cropper
        ref={this.cropper}
        src={image}
        aspectRatio={1}
        viewMode={1}
        dragMode='move'
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        guides={false}
        crop={this.cropImage}
        className='cropper'
      />
    );
  }
}

export default CropperInput;
