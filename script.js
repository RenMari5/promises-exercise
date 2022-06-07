const apiPromise = fetch(
  "https://grandcircusco.github.io/demo-apis/donuts.json"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
  })
  .then((newData) => {
    function countPromise() {
      console.log(newData.count);
      return countPromise;
    }
  });

// I understand promises and I understand chaining, but I cannot seem to understand THIS particular assignment...
