document.getElementById('referenceForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form values
  var name = document.getElementById('name').value;
  var relationship = document.getElementById('relationship').value;
  var reference = document.getElementById('reference').value;
  
  // Validate form
  if (!name || !relationship || !reference) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Display success message
  document.getElementById('successMessage').classList.remove('hidden');
  
  // Add reference to the list
  var referenceList = document.getElementById('referenceList');
  var listItem = document.createElement('li');
  listItem.textContent = name + ', ' + relationship + ': ' + reference;
  referenceList.appendChild(listItem);
  
  // Clear form fields
  document.getElementById('referenceForm').reset();
  
  // Hide success message after 2 seconds
  setTimeout(function() {
    document.getElementById('successMessage').classList.add('hidden');
  }, 2000);
});
