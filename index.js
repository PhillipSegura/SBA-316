// Cache elements by ID and querySelector
const form = document.getElementById("userForm");
const output = document.getElementById("output");
const generateBtn = document.querySelector("#generateBtn");
const dynamicContent = document.getElementById("dynamicContent");

// Set initial styles
form.style.backgroundColor = "lightblue";

// BOM Property: Check the browser info
console.log(`Browser Info: ${navigator.userAgent}`);
console.log(`Page URL: ${window.location.href}`); // Second BOM property

// Event listener for the form submission
form.addEventListener("submit", handleFormSubmit);

// Event listener for generating additional content
generateBtn.addEventListener("click", generateMoreContent);

function handleFormSubmit(event) {
  event.preventDefault(); // Prevent actual form submission

  // DOM Manipulation: Cache inputs using querySelector
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;

  // Basic email validation
  if (!email.includes("@")) {
    output.textContent = "Invalid email address!";
    output.style.color = "red";
    return;
  }

  // Output message
  output.textContent = `Welcome, ${username}!`;
  output.style.color = "green";

  // Clear form after submission
  form.reset();
}

// Function to generate new content
function generateMoreContent() {
  // DOM Manipulation: Create a new paragraph element
  const newPara = document.createElement("p");
  newPara.textContent = "Here is some dynamically generated content.";
  newPara.style.color = "blue";

  // Add a class and attribute to new content
  newPara.classList.add("dynamic-item");
  newPara.setAttribute("data-generated", "true");

  // Add the new paragraph to the dynamicContent section
  dynamicContent.appendChild(newPara);
}

// DOM Manipulation: Iterate over all dynamically generated items and change text on hover
dynamicContent.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("dynamic-item")) {
    event.target.textContent = "You hovered over dynamic content!";
  }
});
dynamicContent.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("dynamic-item")) {
    event.target.textContent = "Here is some dynamically generated content.";
  }
});
