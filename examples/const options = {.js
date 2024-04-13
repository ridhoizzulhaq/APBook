const options = {
    method: "POST",
    headers: {
      "X-API-KEY": "sk_production_5djWMYDwYXH5Z8gj1e3FQGofzLZpqpqKfFv9kpV6WPLJk8qFh9Mi9Fqf1TpaxTLud5YZQ8fzmXrGBVvJ8rHZv4cwFXFXwGoWC6VM83hLnJqoEZoPcJQJ2ncGbiUyuEz3Zdp3UP38F3Di7WYPzkShAmnMKSoLj1mqacLTKA1ycxhNQ763zXKP1GLFUVgSryfKbZwfy1sb5wBtH8pMg1Fwkeys",
      "Content-Type": "application/json",
    },
    body: '{"chain":"aptos","fungibility":"non-fungible","metadata":{"description":"This is a test collection created on Aptos using Crossmint","imageUrl":"https://www.crossmint.com/assets/crossmint/logo.png","name":"Aptos Test"}',
  };
  
  fetch("https://www.crossmint.com/api/2022-06-09/collections/", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
