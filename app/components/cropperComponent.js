import React, {Component} from 'react';
import cropperjs from 'cropperjs';

class CropperWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			img: React.createRef(),
			src: this.props.src || null,
			cropper: {},
			preview_url: null
		}
    this.onClick = this.onClick.bind(this);
		this.getRoundedCanvas = this.getRoundedCanvas.bind(this);
		this.getCroppedData = this.getCroppedData.bind(this);

	}

	shouldComponentUpdate(nextProps, state) {

		if(nextProps.src !== this.state.src) {
			this.setState({src: nextProps.src})
			this.state.cropper.replace(nextProps.src)
			return true;
		}
		else {
			return true;
		}
	}

	getRoundedCanvas(sourceCanvas) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
	}

	getCroppedData() {

	const croppedCanvas = this.state.cropper.getCroppedCanvas();
	const roundedCanvas = this.getRoundedCanvas(croppedCanvas);
  // //
	this.setState({
		preview_url: roundedCanvas.toDataURL()

	})

  // Transform the canvas into a URL.

  this.props.getPreviewURL(roundedCanvas.toDataURL());

  // Transform the canvas to Blob, which is the subClass of
  // File constructor.

  roundedCanvas.toBlob((blob) => {
    this.props.getBlobData(blob)
  })
  this.props.toggleCropper();
	}

	componentDidMount() {

		this.state.cropper = new cropperjs(this.state.img.current, {
			cropBoxResizable: true,
			aspectRatio: 1,
			maxContainerWidth: 200,
			maxContainerHeight: 200,
      maxWidth: 200,
      maxHeight: 200,
			background: false
		})

		this.state.cropper.setData({
			rounded: true
		})
	}
  onClick() {
    this.getCroppedData();
    this.props.toggleCropper()
  }

	render() {
		return (
			<div className="cropper__wrapper">
				<div className="cropper__wrapper-img">
					<img className="cropped" src={this.state.src} ref={this.state.img}/>
				</div>
				<button type="button" className="btn btn-success" onClick={this.onClick}>save</button>
				<button type="button" className="btn btn-primary" onClick={this.props.triggerInputClick}>change</button>
				<button type="button" className="btn btn-danger" onClick={this.props.toggleCropper}>cancel</button>

			</div>
		)
	}
}

export default CropperWrapper;
