// variables
const getResidentsBtn = document.getElementById("get-residents-btn");

// functions
const catchErr = (err) => console.log(err);

const removeAll = () => (document.querySelector("content").innerHTML = "");

const getResidents = () => {
  removeAll();
  axios
    .get("https://swapi.dev/api/planets/?search=alderaan")
    .then((res) => {
      res.data.results[0].residents.forEach((value) => {
        axios
          .get(value)
          .then((res) => {
            let element = document.createElement("h2");
            element.textContent = res.data.name;
            document.querySelector("content").appendChild(element);
          })
          .catch(catchErr);
      });
    })
    .catch(catchErr);
};

// listeners
getResidentsBtn.addEventListener("click", getResidents);
