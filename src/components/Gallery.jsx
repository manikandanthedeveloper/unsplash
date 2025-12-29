import { FaSpinner } from "react-icons/fa";
import useGalleryQuery from "../hooks/useGalleryQuery";

const Gallery = () => {
	const { data, isLoading, isError, error } = useGalleryQuery();

	if (isLoading) {
		return (
			<div className="flex items-center justify-center">
				<p className="text-2xl text-blue-600">
					<FaSpinner />
				</p>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex items-center justify-center">
				<p className="text-2xl text-red-600">{error}</p>
			</div>
		);
	}

	if (data.results.length < 0) {
		return (
			<div className="flex items-center justify-center">
				<p className="text-2xl text-red-600">No records found!!!</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
			{data.results.map((item) => {
				const url = item?.urls?.regular;
				return (
					<div key={item.id}>
						<img
							src={url}
							alt={item.alt_description}
							className="w-full h-full"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Gallery;
