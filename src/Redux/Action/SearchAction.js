import axios from "axios";

export const SEARCH_ARTICLE = "SEARCH_ARTICLE";

export const SearchAction = (payload, keyword) => {
  const searchResult = payload.filter(
    (obj) =>
      obj.titleArticle.includes(keyword.toLowerCase()) ||
      obj.paragraf1.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf2.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf3.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf4.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf5.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf6.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf7.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf8.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf9.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.paragraf10.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.cathegory.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.hashTag.some((tag) =>
        tag.toLowerCase().includes(keyword.toLowerCase())
      ) ||
      obj.author.toLowerCase().includes(keyword.toLowerCase())
  );

  return {
    type: SEARCH_ARTICLE,
    searchResult: searchResult.length == 0 ? "Not Found" : searchResult,
  };
};

export const SearchData = (keywordSearch) => {
  return async (dispatch) => {
    axios.get(import.meta.env.VITE_API_ARTICLE).then((response) => {
      dispatch(SearchAction(response.data, keywordSearch));
    });
  };
};
