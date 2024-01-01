console.log("Hello World");

let myName = "Sean";
myName = "Sean2";
console.log(myName);

console.log(typeof myName);

//Getting the url so we can parse out company ID, project ID, etc...
const url = window.location.toString();
console.log(url);

let data = new FormData();
data.append("grant_type", "client_credentials");
data.append(
  "client_id",
  "6d82867d0c89983b2392871923b98793fd4fd89018190952690e4e27d36a6f81"
);
data.append(
  "client_secret",
  "47967d9552a2f3eeb50b1e21edc0615b65e86955480bf6400615d45e09b6d0e7"
);

// body = {
//   grant_type: "client_credentials",
//   client_id: "6d82867d0c89983b2392871923b98793fd4fd89018190952690e4e27d36a6f81",
//   client_secret:
//     "47967d9552a2f3eeb50b1e21edc0615b65e86955480bf6400615d45e09b6d0e7",
// };

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: data,
};

fetch("https://login-sandbox.procore.com/oauth/token", options)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
