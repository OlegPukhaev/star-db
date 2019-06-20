class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResourse(url) {
    const res =  await fetch(`${this._apiBase}${url}`); 
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}  +  recieved ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResourse(`/people/`);
    return res.results;
  }
  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }
  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }
  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results;
  }
  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }

}

const swapi = new SwapiService();

swapi.getAllPeople().then( people => {
  people.forEach(element => {
    console.log(element.name);
  });
});

swapi.getPerson(3).then( person => {
  console.log("Person Name: ", person.name);
});