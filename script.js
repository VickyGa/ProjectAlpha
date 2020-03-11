const api_key = "IQdXD0XvdrjA8Qi38n3yG1Qk1LXZp4yZuWaLkINc";
// const select = document.querySelector("select");
// const input = document.querySelector("input")
const button = document.querySelector("#launch");


const testcall = async () => {
  const date = document.querySelector("#date");
  const rover = document.querySelector(".rover-choice");

  const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.value}/photos?api_key=${api_key}&earth_date=${date.value}`);

  console.log(resp.data.photos)
  const photoArray = resp.data.photos;
  const photos = document.querySelector(".photos");
  // debugger
  for (let i = 0; i < 4; i += 1) {
    photos.innerHTML += `<div><img src=${photoArray[i].img_src} /></div>`;
    // debugger
  }

}

// testcall()
// ===================================
// ==========select dropdown==========
// ===================================

// const getRover = async () => {

//   const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${api_key}`);

//   resp.data.forEach((rover) => {
//     select.innerHTML += `
//     <option value=${rover.id}>${rover.name}</option>`
//   })
// }

// getRover();

// ======================================
// =======Getting Image Request==========
// ======================================

button.addEventListener('click', testcall)