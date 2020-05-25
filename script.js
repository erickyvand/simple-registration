const btn = document.querySelector('#btn');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const occupation = document.querySelector('#occupation');
const table = document.querySelector('.table');
const message = document.querySelector('#message');

btn.addEventListener('click', e => {
  e.preventDefault();

  if (!firstName.value || !lastName.value || !occupation.value) {
    message.classList.add('error-message');
    message.innerHTML = 'All fields are required';
    setTimeout(() => message.remove(), 6000)
  } else {
    const row = table.insertRow(1)
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
  
    cell1.innerHTML = firstName.value,
    cell2.innerHTML = lastName.value,
    cell3.innerHTML = occupation.value;
    cell4.innerHTML = 'Delete';

    cell4.setAttribute('id', 'remove');
    document.querySelector('#remove').classList.add('delete')
    document.querySelector('#remove').addEventListener('click', () => {
      row.remove();
    })
  
    firstName.value = '',
    lastName.value = '',
    occupation.value = ''
  }
})
