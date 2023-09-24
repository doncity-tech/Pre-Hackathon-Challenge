
//Endpoint url
let baseURL = "https://backend.getlinked.ai";

// Remove white space and check for empty input
const cleanMyText = (text) => {
  let temp = [];
  text.split(' ').forEach((x) => {
    if (x) {
      temp.push(x);
    }
  })
  if (text && temp.join(' ')) {
    return temp.join(' ');
  }
}

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