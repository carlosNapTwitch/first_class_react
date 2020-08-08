import apiCall from "./apiCall";

const peoples = {
  getAll: async (urlParam = "") => {
    const data = await apiCall(urlParam);
    return data;
  },
  getById: async (characterId = "") => {
    const data = await apiCall(characterId);
    return data;
  },
};

export default peoples;
