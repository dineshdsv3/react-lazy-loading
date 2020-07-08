import React from 'react';
import './App.css';
import Post from './Post';
import data from './data';
import Lazyload from 'react-lazyload';
import Loading from './Loading';

function App() {
	return (
		<div className="App">
			<h2>Lazy Loading Demo</h2>
			<div className="post-container">
				{data.map((post) => (
					<Lazyload height={200} key={post.id} once={true} placeholder={<Loading />}>
						<Post key={post.id} {...post} />
					</Lazyload>
				))}
			</div>
		</div>
	);
}

export default App;
