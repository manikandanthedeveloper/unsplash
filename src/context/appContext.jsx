import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
	const prefersDark =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;

	const storedMode = localStorage.getItem("darkMode") === "true";
	return storedMode || prefersDark;
};

const AppProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(getInitialDarkMode());
	const [searchTerm, setSearchTerm] = useState("cat");

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => {
			localStorage.setItem("darkMode", !prevMode);
			return !prevMode;
		});
	};

	useEffect(() => {
		document.body.className = darkMode ? "dark-mode" : "light-mode";
	}, [darkMode]);

	const values = {
		darkMode,
		toggleDarkMode,
		searchTerm,
		setSearchTerm,
	};

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
