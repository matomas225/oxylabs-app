import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import api from '../Configs/Api';
import endpoints from '../Configs/Endpoints';

interface Data {
  [x: string]: string;
}

interface FetchItemsProps {
  cookies: {
    'x-access-token'?: string;
  };
  setFetchedData: React.Dispatch<React.SetStateAction<Data[]>>;
}

function FetchItems({ cookies, setFetchedData }: FetchItemsProps) {
  axios
    .get(api.oxylabs + endpoints.fetch_items, {
      headers: cookies,
    })
    .then((response) => setFetchedData(response.data))
    .catch(() => toast.error('Something Went Wrong!'));
}

export default FetchItems;
