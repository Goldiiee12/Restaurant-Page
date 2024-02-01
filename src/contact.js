function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact-container');

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');

  const email = document.createElement('p');
  email.innerHTML = '<strong>E-mail:</strong> <a href="mailto:123@email.com">123@email.com</a>';
  email.classList.add('contact-detail');

  const address = document.createElement('p');
  address.innerHTML = '<strong>Address:</strong> 1233 Boulevard Ave';
  address.classList.add('contact-detail');

  const phone = document.createElement('p');
  phone.innerHTML = '<strong>Phone number:</strong> 111-111-1111';
  phone.classList.add('contact-detail');

  contactInfo.appendChild(email);
  contactInfo.appendChild(address);
  contactInfo.appendChild(phone);

  const title = document.createElement('h2');
  title.textContent = 'Get in Touch';
  title.classList.add('contact-title');

  const form = document.createElement('form');
  form.classList.add('contact-form');
  form.innerHTML = `
    <input type="text" id="name" name="name" placeholder="Your name" required>
    <input type="email" id="email" name="email" placeholder="Your e-mail" required>
    <input type="text" id="subject" name="subject" placeholder="Subject">
    <textarea id="message" name="message" placeholder="Message" required></textarea>
    <button type="submit" class="contact-button">Send a message</button>
  `;

  contact.appendChild(contactInfo);
  contact.appendChild(title);
  contact.appendChild(form);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;

