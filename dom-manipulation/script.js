const quoteDisplay = [
    {text:"This man who says his wife can't take a joke, forgets that she took him.", category:"Funny"},
    {text:"History is a set of lies agreed upon", category:"Historical"},
    {text:"Education is not theh filling of a pail, but the lighting of a fire", category:"educational"},
    {text:"To love is and be loved is to feel the sun from both sides.", category:"Romantic",}
];
/*
const btn = document.getElementById("newQuote");
btn.addEventListener('click', function() {
})*/

//const newQuote = [];
//newQuote.push(quoteDisplay);

/*function showRadomQuote() {
    const btn = document.getElementById('newQuote');
    newQuote.addEventListener('click', function() {
        const p = document.createElement("p");
        p.classList.add("note");
        quoteDisplay.appendChild(p);
    })
}*/
/*function showRadomQuote() {
    const quote = Math.floor(Math.random() * quoteDisplay.length);
    const randomQuote = quoteDisplay[quote];
    const quoteElement = document.getElementById('newQuote');
    quoteElement.textContent = `${randomQuote.text} (${randomQuote.category})`;
}

function createAddQuoteForm() {
    const formElement = document.createElement("form");
    formElement.innerHTML = `<label for="quote-text">Quote:</label>
                            <input type="text" id="quote-text" name="quote-text"><br><br>
                            <label for="quote-category">Category:</label>
                            <input type="text" id="quote-category" name="quote-category"><br><br>
                            <input type="submit" value="Add Quote">`;
    const quoteFormContainer = document.getElementsByTagName("quote-form-container");
    quoteFormContainer.appendChild(formElement);
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const quoteText = document.getElementById("quote-text").value;
        const quoteCategory = document.getElementById("quote-category").value;
        quoteDisplay.push({text:quoteText, category:quoteCategory});
        formElement.reset();
    });
}
showRadomQuote();
createAddQuoteForm();*/

/*function showRadomQuote() {
    const randomIndex = Math.floor(Math.random() * quoteDisplay.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = documnet.getElementById("quoteDisplay");
    quoteDisplay.textContent = `${randomQuote.text} (${randomQuote.category})`;
}
function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    if(newQuoteText && newQuoteCategory) {
        const newQuote = {text: newQuoteText, category: newQuoteCategory};
        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";
        console.log("Update Quotes List", quotes);
    } else {
        alert ("Please fill  in both fields to add a quotes.");
    }
}
showRadomQuote();*/

let quotes = [
    { text: "This man who says his wife can't take a joke, forgets that she took him.", category: "Funny" },
    { text: "History is a set of lies agreed upon", category: "Historical" },
    { text: "Education is not the filling of a pail, but the lighting of a fire", category: "Educational" },
    { text: "To love is and be loved is to feel the sun from both sides.", category: "Romantic" }
  ];

  function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `${randomQuote.text} (${randomQuote.category})`;
  }
  
  function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    if (newQuoteText && newQuoteCategory) {
      const newQuote = { text: newQuoteText, category: newQuoteCategory };
      quotes.push(newQuote);
      document.getElementById("newQuoteText").value = "";
      document.getElementById("newQuoteCategory").value = "";
      console.log("Updated Quotes List", quotes);
    } else {
      alert("Please fill in both fields to add a quote.");
    }
  }
  
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

  const quoteDisplayElement = document.createElement("div");
quoteDisplayElement.id = "quoteDisplay";
document.body.appendChild(quoteDisplayElement);

// Dynamically add the form elements
const formContainer = document.createElement("div");
const newQuoteTextElement = document.createElement("input");
newQuoteTextElement.id = "newQuoteText";
newQuoteTextElement.type = "text";
newQuoteTextElement.placeholder = "Enter a new quote";

const newQuoteCategoryElement = document.createElement("input");
newQuoteCategoryElement.id = "newQuoteCategory";
newQuoteCategoryElement.type = "text";
newQuoteCategoryElement.placeholder = "Enter quote category";

const addQuoteButton = document.createElement("button");
addQuoteButton.textContent = "Add Quote";
addQuoteButton.onclick = addQuote;

formContainer.appendChild(newQuoteTextElement);
formContainer.appendChild(newQuoteCategoryElement);
formContainer.appendChild(addQuoteButton);
document.body.appendChild(formContainer);


  showRandomQuote();
  
  