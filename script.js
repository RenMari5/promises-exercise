const apiPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/donuts.json"
)
  .then((res) => res.json())
  .then((jsonData) => {
    console.log(jsonData.results);
    console.log(jsonData.count);
  });
