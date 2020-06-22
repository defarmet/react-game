import React, {Component} from 'react';
import Image from "./components/Image";
import images from "./images.json"

class App extends Component {
	state = {
		images,
		score: 0,
		high: 0
	};

	componentDidMount()
	{
		this.setState({
			images: this.shuffle()
		});
	};

	shuffle = () =>
	{
		const arr = this.state.images.slice(0);
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
		}

		return arr;
	};

	reset = () =>
	{
		this.state.images.map(img => img.clicked = false);
		this.setState({
			images: this.shuffle(),
			score: 0
		});
	};

	set_high = score => this.state.high < score ? score : this.state.high;

	set_click = id =>
	{
		const image = this.state.images.filter(img => img.id === id);
		if (image[0].clicked) {
			this.reset();
			return;
		}

		image[0].clicked = true;
		this.setState({
			images: this.shuffle(),
			score: this.state.score + 1,
			high: this.set_high(this.state.score + 1)
		});
	};

	render_images = () =>
	{
		const images = this.state.images.map(image =>
		{
			return <Image
			id={image.id}
			key={image.id}
			img={image.img}
			click={this.set_click}
			/>
		});

		images.splice(0, 0, <div className="col-1"></div>);
		images.splice(6, 0, <div className="col-1"></div>);
		images.splice(7, 0, <div className="col-1"></div>);

		return images;
	};

	render()
	{
		return (
			<div className="container">
				<p>{this.state.score} | {this.state.high}</p>
				<div className="row text-center">
					{this.render_images()}
				</div>
			</div>
		);
	};
}

export default App;
