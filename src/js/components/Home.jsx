import React from "react";
import { Counter } from './Counter';

//create your first component
const Home = ({counter}) => {
	return (
		<Counter counter={counter} />
	);
};

export default Home;