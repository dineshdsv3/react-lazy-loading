import React from 'react';

const Post = ({ id, title, body }) => {
	return (
		<div className="post">
			<div className="post-body">
				<img src={`https://picsum.photos/id/${id}/200/200`} />
				<h4>{title}</h4>
				<p>{body}</p>
			</div>
		</div>
	);
};

export default Post;