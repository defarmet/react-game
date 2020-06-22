import React, {Component} from 'react';

class Image extends Component {
	render() {
		return (
			<div onClick={() => this.props.click(this.props.id)}>
				<img alt={this.props.id} src={this.props.img} />
			</div>
		);
	}
}

export default Image;
