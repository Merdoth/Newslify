import React, { useState, useEffect } from "react";
import "./App.scss";
import NewsList from "./components/NewsList";
import Nav from "./components/Nav";
import axios from "axios";

const countries = [
	{ name: "United State", code: "us", emoji: "US" },
	{ name: "Nigeria", code: "ng", emoji: 'NG' },
	{ name: "United Kingdom", code: "cn", emoji: '🇬🇧' },
];

function App() {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(false);
	const [query, setSearch] = useState("");
	const [activeCountry, setActiveCountry] = useState(countries[0]);

	useEffect(() => {
		fetchNews();
	}, []);

	useEffect(() => {
		fetchNews();
	}, [activeCountry, query]);

	const fetchNews = async () => {
		setLoading(true);
		let url;
		if (query) {
			url = `https://newsapi.org/v2/everything?q=${query}&apiKey=d247ae4be9d64aa7908905006c29f555`;
		} else {
			url = `https://newsapi.org/v2/top-headlines?q=${query}&country=${activeCountry.code}&apiKey=d247ae4be9d64aa7908905006c29f555`;
		}
		const res = await axios.get(url);
		setLoading(false);
		setNews(res.data.articles);
	};

	const handleClick = (country) => {
		setActiveCountry(country);
	};

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="App">
			<Nav
				countries={countries}
				toggle={handleClick}
				activeCountry={activeCountry}
				onChange={onChange}
				query={query}
			/>

			{loading ? <span>Loading...</span> : <NewsList items={news} />}
		</div>
	);
}

export default App;
