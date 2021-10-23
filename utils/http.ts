import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  params: { key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY },
});

export default http;
