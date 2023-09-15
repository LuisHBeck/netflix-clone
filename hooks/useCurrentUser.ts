import useSWR, { mutate } from "swr";

import fectcher from "@/lib/fetcher";
import { data } from "autoprefixer";
import error from "next/error";

const useCurrentUser = () => {
	const { data, error, isLoading, mutate } = useSWR("/api/current", fectcher);

	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useCurrentUser;
