//in here you would want to use your mock modules that you want to use in your code during tests

export default {
  //this create a mock function or spy function
  //with this you can confirm how many times you have called
  //what args you called with
  //confirm a fake value to return
  //becaus it returns a promise we need to deal with that as well
  get: jest.fn(() => Promise.resolve({ data: {} })), //resolve the arrow function
  // we need to pass to this resolved function the data we want to with
};

//we are exporting an object
