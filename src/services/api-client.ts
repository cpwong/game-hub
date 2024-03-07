import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8f4d026d47ea48a5b7eeb0e6c1cf4851'
  }
})