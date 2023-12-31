

//Handle contact form submission
const submitContact = (data) => {
  const url = `${baseURL}/hackathon/contact-form`;
  fetch(url, {
    method: 'post',
    body: data,
    redirect: 'follow',
    headers: { "Content-Type": "application/json" }
  })
    .then(responseValidate)
    .then(res => { return res.json(); })
    .then(data => {
      console.log(data);
      qs('.submission-loading').style.display = "none";
      qs('.contact-thanks').style.display = "flex";
      qs('#contact-form').reset();
    })
    .catch(error => {
      console.log('error', error);
      qs('.submission-loading').style.display = "none";
    })
}

//UI Interaction
(() => {
  //Reset form
  qs('#contact-form').reset();
  // back to the previous page
  qs('#c-back-btn').addEventListener('click', () => {
    history.back()
  })

  //Handle submit button
  qs('#submit-btn').addEventListener('click', e => {
    let formInput = new FormData(qs('#contact-form'));

    // check for empty or no input
    if (!cleanMyText(formInput.get('fname'))) return;
    if (!cleanMyText(formInput.get('email'))) return;
    if (!cleanMyText(formInput.get('message'))) return;

    let contactData = JSON.stringify({
      "first_name": formInput.get('fname'),
      "phone_number": formInput.get('phone'),
      "email": formInput.get('email'),
      "message": formInput.get('message')
    })

    submitContact(contactData);
    qs('.submission-loading').style.display = "flex";
    e.preventDefault();
  })

  qs('#close-thank-ms').addEventListener('click', () => {
    qs('.contact-thanks').style.display = "none"
  });

})();