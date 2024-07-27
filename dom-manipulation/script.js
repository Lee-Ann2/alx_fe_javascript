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
showRadomQuote();

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
 
  let quotes = JSON.parse(localStorage.getItem('quotes')) || [
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
    sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
  }
  
  function displayLastViewedQuote() {
    const lastViewedQuote = sessionStorage.getItem('lastViewedQuote');
    if (lastViewedQuote) {
      const quoteDisplay = document.getElementById("lastViewedQuote");
      quoteDisplay.textContent = `Last viewed quote: ${JSON.parse(lastViewedQuote).text}`;
    }
  }
  
  function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    if (newQuoteText && newQuoteCategory) {
      const newQuote = { text: newQuoteText, category: newQuoteCategory };
      quotes.push(newQuote);
      localStorage.setItem('quotes', JSON.stringify(quotes));
      document.getElementById("newQuoteText").value = "";
      document.getElementById("newQuoteCategory").value = "";
      console.log("Updated Quotes List", quotes);
    } else {
      alert("Please fill in both fields to add a quote.");
    }
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    const existingOption = categoryFilterSelect.querySelector(`option[value="${newQuoteCategory}"]`);
    if (!existingOption) {
      const newOption = document.createElement("option");
      newOption.value = newQuoteCategory;
      newOption.textContent = newQuoteCategory;
      categoryFilterSelect.appendChild(newOption);
    }
    // ...
  }
  
  }
  
  function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }
  function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      try {
        const importedQuotes = JSON.parse(event.target.result);
        quotes.push(...importedQuotes);
        saveQuotes();
        alert('Quotes imported successfully!');
      } catch (error) {
        alert('Error importing quotes: ' + error.message);
      }
    };
    fileReader.readAsText(event.target.files[0]);
  }

  function exportFromJsonFile(event) {
    const fileReader = new FileReader("application/json", "Blob");
    fileReader.onload = function(event) {
      try {
        const exportedQuotes = JSON.parse(event.target.result);
        quotes.push(...exportedQuotes);
        saveQuotes();
        alert('Quotes exported successfully!');
      } catch (error) {
        alert('Error exporting quotes: ' + error.message);
      }
    };
    fileReader.readAsText(event.target.files[0]);
  }
  
  document.getElementById("newQuote").addEventListener("click", addQuote);
  
  const quoteDisplayElement = document.createElement("div");
  quoteDisplayElement.id = "quoteDisplay";
  document.body.appendChild(quoteDisplayElement);
  
  const lastViewedQuoteDisplay = document.createElement("div");
  lastViewedQuoteDisplay.id = "lastViewedQuote";
  document.body.appendChild(lastViewedQuoteDisplay);
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
  
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".json";
  fileInput.id = "importFile";
  fileInput.onchange = importFromJsonFile;
  document.body.appendChild(fileInput);
  const fileLabel = document.createElement("label");
  fileLabel.textContent = "Upload quotes JSON file";
  fileLabel.htmlFor = "importFile";
  document.body.appendChild(fileLabel);
  
  const categoryFilterSelect = document.getElementById("categoryFilter");

// Populate the category filter select element
const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
uniqueCategories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilterSelect.appendChild(option);
});

// Add an "All Categories" option
const allOption = document.createElement("option");
allOption.value = "all";
allOption.textContent = "All Categories";
categoryFilterSelect.insertBefore(allOption, categoryFilterSelect.firstChild);

const lastSelectedCategory = localStorage.getItem("lastSelectedCategory");
if (lastSelectedCategory) {
  categoryFilterSelect.value = lastSelectedCategory;
}

// Implement the filterQuotes function
function filterQuotes() {
  const selectedCategory = categoryFilterSelect.value;
  localStorage.setItem("lastSelectedCategory", selectedCategory);
  const filteredQuotes = selectedCategory === "all" ? quotes : quotes.filter(quote => quote.category === selectedCategory);
  // Update the displayed quotes
}

categoryFilterSelect.addEventListener("change", filterQuotes);


  showRandomQuote();
  displayLastViewedQuote();
  

  
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
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
  sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
}

function displayLastViewedQuote() {
  const lastViewedQuote = sessionStorage.getItem('lastViewedQuote');
  if (lastViewedQuote) {
    const quoteDisplay = document.getElementById("lastViewedQuote");
    quoteDisplay.textContent = `Last viewed quote: ${JSON.parse(lastViewedQuote).text}`;
  }
}

function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  if (newQuoteText && newQuoteCategory) {
    const newQuote = { text: newQuoteText, category: newQuoteCategory };
    quotes.push(newQuote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    console.log("Updated Quotes List", quotes);
  } else {
    alert("Please fill in both fields to add a quote.");
  }
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  const existingOption = categoryFilterSelect.querySelector(`option[value="${newQuoteCategory}"]`);
  if (!existingOption) {
    const newOption = document.createElement("option");
    newOption.value = newQuoteCategory;
    newOption.textContent = newQuoteCategory;
    categoryFilterSelect.appendChild(newOption);
  }
  // ...
}



function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    try {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    } catch (error) {
      alert('Error importing quotes: ' + error.message);
    }
  };
  fileReader.readAsText(event.target.files[0]);
}

function exporttoJsonFile(event) {
  const fileReader = new FileReader("application/json", "Blob");
  fileReader.onload = function(event) {
    try {
      const exportedQuotes = JSON.parse(event.target.result);
      quotes.push(...exportedQuotes);
      saveQuotes();
      alert('Quotes exported successfully!');
    } catch (error) {
      alert('Error exporting quotes: ' + error.message);
    }
  };
  fileReader.readAsText(event.target.files[0]);
}

document.getElementById("newQuote").addEventListener("click", addQuote);

const quoteDisplayElement = document.createElement("div");
quoteDisplayElement.id = "quoteDisplay";
document.body.appendChild(quoteDisplayElement);

const lastViewedQuoteDisplay = document.createElement("div");
lastViewedQuoteDisplay.id = "lastViewedQuote";
document.body.appendChild(lastViewedQuoteDisplay);
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

const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = ".json";
fileInput.id = "importFile";
fileInput.onchange = importFromJsonFile;
document.body.appendChild(fileInput);
const fileLabel = document.createElement("label");
fileLabel.textContent = "Upload quotes JSON file";
fileLabel.htmlFor = "importFile";
document.body.appendChild(fileLabel);

const categoryFilterSelect = document.getElementById("categoryFilter");

// Populate the category filter select element
const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
uniqueCategories.forEach(category => {
const option = document.createElement("option");
option.value = category;
option.textContent = category;
categoryFilterSelect.appendChild(option);
});

// Add an "All Categories" option
const allOption = document.createElement("option");
allOption.value = "all";
allOption.textContent = "All Categories";
categoryFilterSelect.insertBefore(allOption, categoryFilterSelect.firstChild);

const lastSelectedCategory = localStorage.getItem("lastSelectedCategory");
if (lastSelectedCategory) {
categoryFilterSelect.value = lastSelectedCategory;
}

// Implement the filterQuotes function
function filterQuotes() {
const selectedCategory = categoryFilterSelect.value;
localStorage.setItem("lastSelectedCategory", selectedCategory);
const filteredQuotes = selectedCategory === "all" ? quotes : quotes.filter(quote => quote.category === selectedCategory);
// Update the displayed quotes
}

categoryFilterSelect.addEventListener("change", filterQuotes);


showRandomQuote();
displayLastViewedQuote();

let quotes = JSON.parse(localStorage.getItem('quotes')) || [
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
  sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
}

function displayLastViewedQuote() {
  const lastViewedQuote = sessionStorage.getItem('lastViewedQuote');
  if (lastViewedQuote) {
    const quoteDisplay = document.getElementById("lastViewedQuote");
    quoteDisplay.textContent = `Last viewed quote: ${JSON.parse(lastViewedQuote).text}`;
  }
}

function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  if (newQuoteText && newQuoteCategory) {
    const newQuote = { text: newQuoteText, category: newQuoteCategory };
    quotes.push(newQuote);
    updateCategories(newQuoteCategory);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    console.log("Updated Quotes List", quotes);
  } else {
    alert("Please fill in both fields to add a quote.");
  }
}

function updateCategories(newCategory) {
  const categoryFilterSelect = document.getElementById("categoryFilter");
  const existingOption = categoryFilterSelect.querySelector(`option[value="${newCategory}"]`);
  if (!existingOption) {
    const newOption = document.createElement("option");
    newOption.value = newCategory;
    newOption.textContent = newCategory;
    categoryFilterSelect.appendChild(newOption);
  }
}

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    try {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    } catch (error) {
      alert('Error importing quotes: ' + error.message);
    }
  };
  fileReader.readAsText(event.target.files[0]);
}

document.getElementById("newQuote").addEventListener("click", addQuote);

const quoteDisplayElement = document.createElement("div");
quoteDisplayElement.id = "quoteDisplay";
document.body.appendChild(quoteDisplayElement);

const lastViewedQuoteDisplay = document.createElement("div");
lastViewedQuoteDisplay.id = "lastViewedQuote";
document.body.appendChild(lastViewedQuoteDisplay);

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

const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = ".json";
fileInput.id = "importFile";
fileInput.onchange = importFromJsonFile;
document.body.appendChild(fileInput);

const fileLabel = document.createElement("label");
fileLabel.textContent = "Upload quotes JSON file";
fileLabel.htmlFor = "importFile";
document.body.appendChild(fileLabel);

const categoryFilterSelect = document.getElementById("categoryFilter");

// Populate the category filter select element
const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
uniqueCategories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilterSelect.appendChild(option);
});

// Add an "All Categories" option
const allOption = document.createElement("option");
allOption.value = "all";
allOption.textContent = "All Categories";
categoryFilterSelect.insertBefore(allOption, categoryFilterSelect.firstChild);

const lastSelectedCategory = localStorage.getItem("lastSelectedCategory");
if (lastSelectedCategory) {
  categoryFilterSelect.value = lastSelectedCategory;
}

// Implement the filterQuotes function
function filterQuotes() {
  const selectedCategory = categoryFilterSelect.value;
  localStorage.setItem("lastSelectedCategory", selectedCategory);
  const filteredQuotes = selectedCategory === "all" ? quotes : quotes.filter(quote => quote.category === selectedCategory);
  // Update the displayed quotes based on the filteredQuotes
  // ...
}

showRandomQuote();
displayLastViewedQuote();


document.addEventListener('DOMContentLoaded', () => {
  const newQuotebtn = document.getElementById('newQuote');
  const newQuoteText = document.getElementById('newQuoteText');
  const newQuoteCategory = document.getElementById('newQuoteCategory');
  const addQuoteBtn = document.getElementById('addQuote');
  const quoteDisplay = document.getElementById('quoteDisplay');
  const importQuote = document.getElementById('importFile');
  const exportQuote = document.getElementById('exportQuote');
  const categoryFilter = document.getElementById('categoryFilter');
  function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }
  newQuotebtn.addEventListener('click', () => {
    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      if (quoteDisplay) {
        quoteDisplay.innerHTML = `${randomQuote.text} — ${randomQuote.category}`;
      }
    }
   
  });
  addQuoteBtn.addEventListener('click', () => {
    function createAddQuoteForm() {
      const newQuote = newQuoteText.value.trim();
      const newCategory = newQuoteCategory.value.trim();

      if (newQuote && newCategory) {
        quotes.push({
          text: newQuote,
          category: newCategory
        });
        saveQuotes();
        populateCategories();
        console.log(quotes)
        newQuoteText.value = '';
        newQuoteCategory.value = '';
        alert('New quote successfully added!');
      } else {
        alert('Please fill in both the quote and category fields!');
      }
    }
    createAddQuoteForm();
  });
  function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
      populateCategories(); 
    };
    fileReader.readAsText(event.target.files[0]);
  }

  function exportToJsonFile() {
    const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    a.click();
    alert('Quotes exported successfully!');
  }
  function populateCategories() {
    categoryFilter.innerHTML = '<option value="All">All Categories</option>';
    const categories = [...new Set(quotes.map(quote => quote.category))];
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });

    const lastSelectedCategory = localStorage.getItem('selectedCategory');
    if (lastSelectedCategory) {
      categoryFilter.value = lastSelectedCategory;
    } else {
      categoryFilter.value = 'All'; 
    }
    filterQuotes();
  function filterQuotes() {
    const selectedCategory = categoryFilter.value;
    const filteredQuotes = quotes.filter(quote => selectedCategory === 'All' || quote.category === selectedCategory);

    quoteDisplay.innerHTML = '';
    filteredQuotes.forEach(quote => {
      const quoteElement = document.createElement('p');
      quoteElement.textContent = `${quote.text} — ${quote.category}`;
      quoteDisplay.appendChild(quoteElement);
    });
    localStorage.setItem('selectedCategory', selectedCategory);
  }

  const urlApi = 'https://jsonplaceholder.typicode.com/posts'

  async function fetchQuotesFromServer () {
    const fetchQuotes = await fetch(urlApi);
    const data = await fetchQuotes.json();
    localStorage.setItem('data',JSON.stringify(data) ) 
    quotes.push(...data);
    console.log(quotes);
    
  }
  
  async function postQuoteToServer(quote) {
    await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    });
  }
  
  function syncQuotes() {
    alert(`Quotes synced with server!`);
  }

  fetchQuotesFromServer();
  postQuoteToServer();
  setInterval(fetchQuotesFromServer, 300000)
  populateCategories(); 
  filterQuotes(); 
  importQuote.addEventListener('change', importFromJsonFile);
  exportQuote.addEventListener('click', exportToJsonFile);
  categoryFilter.addEventListener('change', filterQuotes);
  });
showRandomQuote();*/

let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  {text: "This man who says his wife can't take a joke, forgets that she took him.", category: "Funny"},
  { text: "History is a set of lies agreed upon", category: "Historical" },
  { text: "Education is not the filling of a pail, but the lighting of a fire", category: "Educational" },
  { text: "To love is and be loved is to feel the sun from both sides.", category: "Romantic" }
];

function showRadomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.textContent = `${randomQuote.text} (${randomQuote.category})`;
  sessionStorage.setItem("laastViewQuote", JSON.stringify(randomQuote));
}

function displayLastViewedQuote() {
  const lastViewedQuote = sessionStorage.getItem("lastViewedQuote");
  if(lastViewedQuote) {
    const quoteDisplay = document.getElementById("lastViewedQuote");
    quoteDisplay.textContent = `Last viewed quote: ${JSON.parse(lastViewedQuote).text}`;
  }
}

function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  if (newQuoteText && newQuoteCategory) {
    const newQuote = { text: newQuoteText, category: newQuoteCategory };
    quotes.push(newQuote);
    updateCategories(newQuoteCategory);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    console.log("Updated Quotes List", quotes);
  } else {
    alert("Please fill in both fields to add a quote.");
  }
}

function updateCategories(newCategory) {
  const categoryFilterSelect = document.getElementById("categoryFilter");
  const existingOption = categoryFilterSelect.querySelector(`option[value="${newCategory}"]`);
  if (!existingOption) {
    const newOption = document.createElement("option");
    newOption.value = newCategory;
    newOption.textContent = newCategory;
    categoryFilterSelect.appendChild(newOption);
  }
}
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    try {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    } catch (error) {
      alert('Error importing quotes: ' + error.message);
    }
  };
 fileReader.readAsText(event.target.files[0]);
}
document.getElementById("newQuote").addEventListener("click", addQuote);

const quoteDisplayElement = document.createElement("div");
quoteDisplayElement.id = "quoteDisplay";
document.body.appendChild(quoteDisplayElement);

const lastViewedQuoteDisplay = document.createElement("div");
lastViewedQuoteDisplay.id = "lastViewedQuote";
document.body.appendChild(lastViewedQuoteDisplay);

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
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = ".json";
fileInput.id = "importFile";
fileInput.onchange = importFromJsonFile;
document.body.appendChild(fileInput);

const fileLabel = document.createElement("label");
fileLabel.textContent = "Upload quotes JSON file";
fileLabel.htmlFor = "importFile";
document.body.appendChild(fileLabel);

const categoryFilterSelect = document.getElementById("categoryFilter");

// Populate the category filter select element
const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
uniqueCategories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilterSelect.appendChild(option);
});
const allOption = document.createElement("option");
allOption.value = "all";
allOption.textContent = "All Categories";
categoryFilterSelect.insertBefore(allOption, categoryFilterSelect.firstChild);

const lastSelectedCategory = localStorage.getItem("lastSelectedCategory");
if (lastSelectedCategory) {
  categoryFilterSelect.value = lastSelectedCategory;
}
function filterQuotes() {
  const selectedCategory = categoryFilterSelect.value;
  localStorage.setItem("lastSelectedCategory", selectedCategory);
  const filteredQuotes = selectedCategory === "all" ? quotes : quotes.filter(quote => quote.category === selectedCategory);
}
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
      populateCategories(); 
    };
    fileReader.readAsText(event.target.files[0]);
  }

 function exportToJsonFile() {
    const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: 'application/json', 'Blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    a.click();
    alert('Quotes exported successfully!');
  }
  function populateCategories() {
    categoryFilter.innerHTML = '<option value="All">All Categories</option>';
    const categories = [...new Set(quotes.map(quote => quote.category))];
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
  });
}
 const urlApi = 'https://jsonplaceholder.typicode.com/posts'

  async function fetchQuotesFromServer () {
    const fetchQuotes = await fetch(urlApi);
    const data = await fetchQuotes.json();
    localStorage.setItem('data',JSON.stringify(data) ) 
    quotes.push(...data);
    console.log(quotes);
    
  }
  
  async function postQuoteToServer(quote) {
    await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    });
  }
  
  function syncQuotes() {
    alert(`Quotes synced with server!`);
  }

  fetchQuotesFromServer();
  postQuoteToServer();
  setInterval(fetchQuotesFromServer, 300000)
  populateCategories(); 
  filterQuotes(); 
  importQuote.addEventListener('change', importFromJsonFile);
  exportQuote.addEventListener('click', exportToJsonFile);
  categoryFilter.addEventListener('change', filterQuotes);
  showRandomQuote();
  displayLastViewedQuote();
  
