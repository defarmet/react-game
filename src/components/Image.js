import React, {Component} from 'react';

class Image extends Component {
	render() {
		console.log(this.props);
		return (
			<div
			className="col-2 card card-body"
			onClick={() => this.props.click(this.props.id)}>
				<img
				className="img-fluid"
				alt={this.props.id}
				src={this.props.img} />
			</div>
		);
	}
}

export default Image;
