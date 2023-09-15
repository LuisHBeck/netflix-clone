import axios from "axios";

const fectcher = (url: string) => axios.get(url).then((res) => res.data);

export default fectcher;
