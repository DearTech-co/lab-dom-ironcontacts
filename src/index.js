// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
const createContactRow = (contact) => {
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  return contactRow;
}
threeContacts.forEach(contact => {
  const contactRow = createContactRow(contact);
  tableBody.appendChild(contactRow);
}
);

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...

document.querySelectorAll(".btn-delete").forEach((button) => {
  button.addEventListener('click', () => {
    const rowToDelete = button.closest("tr");
    rowToDelete.remove(); 
  });
});


  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  document.querySelectorAll(".btn-like").forEach((button) => {
    button.addEventListener('click', () => {
      const likedRow = button.classList.toggle("selected");
    });
  });
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

document.querySelector("#btn-add-random").addEventListener("click", () => {
  
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  const randomContact = splicedArr[0];

  const newRow = createContactRow(randomContact);

  // this would be the correct approach as i never added the event listeners

  newRow.querySelector(".btn-delete").addEventListener('click', () => {
    newRow.remove(); 
  });
  newRow.querySelector(".btn-like").addEventListener('click', () => {
    newRow.classList.toggle("selected");
  });

  tableBody.appendChild(newRow);
});
