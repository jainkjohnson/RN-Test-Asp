import axios from 'axios';

const url = 'https://mocki.io/v1/2f8b8362-c2b3-4347-bbf2-670273073561';

export const fetchData = () => axios.get(url);
