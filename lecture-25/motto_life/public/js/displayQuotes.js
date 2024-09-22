//Input: data fetched from fetchAPI- type: Object
//Process:
//- call displayQuote when have data fetched
//- get element by Id from index.html
//- inner new data text to elements
//Output: display data fetched to screen (index.html)
const displayQuote = (data) => {
  //step1: get element by id to handle
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  //inner data text to element to display the screen
  quoteElement.innerText = data.quote;
  authorElement.innerText = `— ${data.author}`;
};

//export display function
export default displayQuote;
