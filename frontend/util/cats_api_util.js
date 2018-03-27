export const fetchCats = () => {
  // return the promise.
  return $.ajax({
    url: '/api/cats',
    method: 'GET',
    dataType: 'json',
  });
};

export const createCat = (catParams) => {
  return $.ajax({
    url: '/api/cats',
    method: 'POST',
    data: { cat: catParams },
    dataType: 'json'
  });
}
