import serviceConfig from "./config";

const apiCall = async (parameter) => {
  const result = await fetch(`${serviceConfig.baseUrl}/people/${parameter}`);
  const results = await result.json();
  return results;
};

export default apiCall;
