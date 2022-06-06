const apiPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/donuts.json"
)
  .then((res) => {
    return res.json();
  })
  .then((jsonData) => {
    console.log(jsonData.results);
  })
  .then((jsonData) => {
    const countPromise = (data) => {
      console.log(jsonData.count);
    };
  });
