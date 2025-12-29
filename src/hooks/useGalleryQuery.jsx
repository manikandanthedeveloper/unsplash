import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAppContext from "./useAppContext";

const baseUrl = `https://api.unsplash.com/search/photos?client_id=${
	import.meta.env.VITE_API_KEY
}`;

const useGalleryQuery = () => {
	const { searchTerm } = useAppContext();

	return useQuery({
		queryKey: ["gallery", searchTerm],
		queryFn: async () => {
			const response = await axios.get(baseUrl, {
				params: {
					query: searchTerm,
					per_page: 30,
					client_id: import.meta.env.VITE_API_KEY,
				},
			});
			return response.data;
		},
		enabled: !!searchTerm,
	});
};

export default useGalleryQuery;
