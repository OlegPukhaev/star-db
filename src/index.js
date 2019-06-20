const getResourse = async (url) => {
  const res =  await fetch(url);
  const body = await res.json();
  return body;
}

getResourse('https://swapi.co/api/people/1/')
  .then( body => {
    console.log("Get data:", body);
  })


