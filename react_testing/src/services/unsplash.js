import axios from "axios";

//in the test we dont need to make the real http request
//reason is it is slow
//axios might get angry everytime we run our tests
//sol;ve async function
//mock axios so that we can have a fake version of it
//axios has a get property on it
//we need to make a fake version of this get property on axios
export default async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
      query: term,
    },
  });

  return response.data.results;
};
