const myHeaders = new Headers();
myHeaders.append("apiKey", "0254153c3712a9a0373f4a1ddaa620b1");
const apiKey = "0254153c3712a9a0373f4a1ddaa620b1";

const requestOptions = {
  method: `GET`,
  headers: myHeaders,
  redirect: `follow`,
};

try {
  const result = await fetch(
    `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`,
    requestOptions
  );
  const resultObj = await result.json();
  console.log(JSON.stringify(resultObj, null, 2));
} catch (err) {
  console.error("Could not fetch currency data!!");
  throw err;
}
