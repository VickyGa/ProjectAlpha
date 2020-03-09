const api_key = "IQdXD0XvdrjA8Qi38n3yG1Qk1LXZp4yZuWaLkINc";


const testcall = async () => {
  const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`);

  console.log(resp.data)
  console.log(resp.data.photos[0].id)

}

testcall()

console.log("hello")