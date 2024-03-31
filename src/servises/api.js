import axios from "axios";

const instance = axios.create({ baseURL: "https://api.unsplash.com" });

export const fetchGalleryImages = async (query = "flower") => {
  const params = {
    Autorization: "Client-ID Ko39u3MPp0zC4ZmKHSkFb2wnl3u79zNAAkemCu6qw5A",
    query,
  };
//   const API_KEY = "Ko39u3MPp0zC4ZmKHSkFb2wnl3u79zNAAkemCu6qw5A";

  const response = await instance.get(`/search/photos${params}`);
  console.log(response);
  return response;
};

// fetchGalleryImages();
