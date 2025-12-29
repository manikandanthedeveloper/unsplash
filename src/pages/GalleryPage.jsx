import Gallery from "../components/Gallery";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import GalleryQuery from "../hooks/useGalleryQuery";

const GalleryPage = () => {
	return (
		<>
			<Header />
			<main className="container mx-auto p-4">
				<h1 className="text-3xl font-bold mb-4">Gallery Page</h1>
				<SearchForm />
				<Gallery />
			</main>
		</>
	);
};

export default GalleryPage;
