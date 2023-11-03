import React from "react";
import axios from "axios";

const PostForm = () => {
	const [userId, setUserId] = React.useState("");
	const [title, setTitle] = React.useState("");
	const [body, setBody] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userId, title, body);
		axios
			.post("https://jsonplaceholder.typicode.com/posts", {
				userId,
				title,
				body,
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const changeHandler = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "userId":
				setUserId(value);
				break;
			case "title":
				setTitle(value);
				break;
			case "body":
				setBody(value);
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="userId"
					onChange={changeHandler}
					value={userId}
				/>
				<input
					type="text"
					name="title"
					onChange={changeHandler}
					value={title}
				/>
				<input type="text" name="body" onChange={changeHandler} value={body} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default PostForm;
