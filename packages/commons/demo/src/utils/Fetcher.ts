import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { isNil } from 'lodash-es';

import { VITE_API_ENDPOINT } from '../appConfig';

const REQUEST_TIME_OUT = 5 * 1000;

class Fetcher {
  private fetcher: AxiosInstance;

  constructor() {
    this.fetcher = axios.create({
      baseURL: VITE_API_ENDPOINT,
      timeout: REQUEST_TIME_OUT,
      withCredentials: true,
    });
  }

  async get<Response = unknown>(path: string) {
    if (isNil(path)) {
      console.log('isNil');
    }

    const { data } = await this.fetcher.get<Response>(path);

    return data;
  }
}

const fetcher = new Fetcher();

export default fetcher;
