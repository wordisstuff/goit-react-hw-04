import { useEffect, useState } from "react";
import { requestPhotosByQuery, requestProducts } from "../services/api";

const usePhotosSearch = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIserror] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsloading(true);
        const data = await requestProducts();
        setPhotos(data);
      } catch (error) {
        setIserror(true);
      } finally {
        setIsloading(false);
      }
    }
    fetchPhotos();
  }, []);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchPhotosByQuery() {
      try {
        setIsloading(true);
        const data = await requestPhotosByQuery(query);
        setPhotos(data.photos);
      } catch {
        setIserror(true);
      } finally {
        setIsloading(false);
      }
    }
    fetchPhotosByQuery();
  }, [query]);
  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return { photos, isLoading, isError, onSetSearchQuery };
};

export default usePhotosSearch;
