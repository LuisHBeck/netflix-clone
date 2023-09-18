import useSWR from "swr";
import fectcher from "@/lib/fetcher";

const useMovieList = () => {
	const { data, error, isLoading } = useSWR("/api/movies", fectcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	return { data, error, isLoading };
};

export default useMovieList;