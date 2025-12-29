import { FaMoon, FaSun } from "react-icons/fa";
import useAppContext from "../hooks/useAppContext";

const Header = () => {
	const { darkMode, toggleDarkMode } = useAppContext();

	return (
		<header className="flex items-center justify-between p-4 bg-blue-600 text-white">
			<h1 className="text-3xl font-bold">Photo Gallery</h1>
			<div onClick={toggleDarkMode} className="cursor-pointer">
				{darkMode ? (
					<FaSun className="transform rotate-180" />
				) : (
					<FaMoon />
				)}
			</div>
		</header>
	);
};

export default Header;
