import axios from "axios";

export const fetchData = async () => {
    try {
        const res = await axios.get('https://v2.jokeapi.dev/joke/Programming');
        return res.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error
    }
}