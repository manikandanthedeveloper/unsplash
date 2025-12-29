import useAppContext from "../hooks/useAppContext";

const SearchForm = () => {
	const { setSearchTerm } = useAppContext();

	const searchTermHandler = (e) => {
		e.preventDefault();
		const form = e.target.form;
		const inputValue = form.search.value.trim();
		if (inputValue) {
			setSearchTerm(inputValue);
		}
	};

	return (
		<form className="mb-4 flex">
			<input
				type="text"
				placeholder="cat"
				className="border border-gray-200 p-2 w-full focus:border-none"
				name="search"
			/>
			<button
				type="submit"
				className="bg-blue-600 text-white px-2 border border-blue-500"
				onClick={() => searchTermHandler(event)}
			>
				Search
			</button>
		</form>
	);
};

export default SearchForm;
