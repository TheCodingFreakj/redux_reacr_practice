import unsplash from "../unsplash";
//import the mocked object axios which is the fake axios

import mockAxios from "axios";
//this is unsplash function
//test case 1" calls axios and returns the images
//we need  to do something to use a fake version of axios
//use mocks for that
//https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
test("call the axios and return the image", async () => {
  //use that object from mock
  //since it has jest function we can use that overriding function
  //override the mock function and pass the arrow function
  //and override tha data prop
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: ["cute.jpg"],
      },
    })
  );
  const images = await unsplash("kittens");
  console.log(images); //we are logging back a promise
  //we can resilve the promise using then or using async await

  //we are logging back the thing that we returned in our function

  expect(images).toEqual(["cute.jpg"]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1); //check how many time you called the unsplash function
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
        query: "kittens",
      },
    }
  ); //check for the arguments
});
