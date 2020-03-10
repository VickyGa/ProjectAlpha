const api_key = "IQdXD0XvdrjA8Qi38n3yG1Qk1LXZp4yZuWaLkINc";
const select = document.querySelector("select");
const input = document.querySelector ("input")
const button = document.querySelector("#launch");


const testcall = async () => {
  const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`);

  console.log(resp.data)
  console.log(resp.data.photos[0].id)

}

testcall()
// ===================================
// ==========select dropdown==========
// ===================================

const getRover = async () => {
  const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers, api_key=${api_key}`);

  resp.data.forEach((rover) => {
    select.innerHTML += `
    <option value=${rover.id}>${rover.name}</option>`
  })
}

getRover();

// ======================================
// =======Getting Image Request==========
// ======================================

button.addEventListener('click', async () => {
  const resp = await axios.get(https://api.nasa.gov/mars-photos/api/v1/rovers/api_key)
})