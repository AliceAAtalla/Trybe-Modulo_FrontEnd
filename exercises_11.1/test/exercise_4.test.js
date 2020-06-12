const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('checks if the repositories exist', async () => {
  const apiResponse = await getRepos('https://api.github.com/users/tryber/repos');
  
  const repositorie = ["sd-01-week10-movie-card-library", "sd-01-block29-crypto-index"];
  expect(apiResponse).toEqual(
    expect.arrayContaining(repositorie)
  );
});
    
