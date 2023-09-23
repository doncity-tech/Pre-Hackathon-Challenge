
//Endpoint url
let baseURL = "https://backend.getlinked.ai";


// useful functions
const qs = (elem) => {
  return document.querySelector(elem)
}
const qsAll = (elem) => {
  return document.querySelectorAll(elem)
}

// Response Validation
const responseValidate = (response) => {
  if (!response.ok) {
    throw Error('Not successful');
  }
  return response;
}