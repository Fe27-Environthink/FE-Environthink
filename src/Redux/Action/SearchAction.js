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
  const testing = payload.filter((obj) =>
    obj.hashTag.some((tag) => tag.toLowerCase().includes(keyword.toLowerCase()))
  );
  // obj.author.toLowerCase().includes(keyword.toLowerCase())
  console.log(testing);

  return {
    type: SEARCH_ARTICLE,
    searchResult: searchResult.length == 0 ? "Not Found" : searchResult,
  };
};

export const SearchData = (keywordSearch) => {
  return async (dispatch) => {
    axios
      .get("https://644b56f917e2663b9ded34b8.mockapi.io/article")
      .then((response) => {
        dispatch(SearchAction(response.data, keywordSearch));
      });
  };
};
