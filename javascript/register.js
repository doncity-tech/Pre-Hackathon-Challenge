
//Fetch categories
(() => {
  let url = `${baseURL}/hackathon/categories-list`
  fetch(url, {
    method: 'get',
    redirect: 'follow',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(responseValidate)
    .then(res => { return res.json() })
    .then(data => {
      console.log(data);
      getCategories(data);
      qs('.submission-loading').style.display = "none";
    })
    .catch(error => {
      console.log('error', error);
      qs('.submission-loading').style.display = "none";
    })
})();

//Handle categories
const getCategories = (categories) => {
  let child = `<option value="">Select your category</option>`
  categories.forEach(item => {
    child += `<option value="${item.id}">${item.name}</option>`;
  })
  qs('#reg-categories').innerHTML = child;
}

//Handle contact form submission
const submitRegister = (data) => {
  const url = `${baseURL}/hackathon/registration`;
  fetch(url, {
    method: 'post',
    body: data,
    redirect: 'follow',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => { return res.json(); })
    .then(data => {
      console.log(data);
      qs('#register-form').reset();
      qs('.submission-loading').style.display = "none";
      qs('.reg-success').style.display = "flex";
    })
    .catch(error => {
      console.log('error', error);
      qs('.submission-loading').style.display = "none";
    })
}
//UI Interaction
(() => {
  //Reset form
  qs('#register-form').reset();
  // back to the previous page
  qs('#reg-back-btn').addEventListener('click', () => {
    history.back()
  })

  //Handle register button
  qs('#register-btn').addEventListener('click', e => {
    let formInput = new FormData(qs('#register-form'));
    let privacayStatus = (formInput.get('privacy_poclicy_accepted') === 'on')
      ? true : false;

    //check for empty or no input
    if (!cleanMyText(formInput.get('team_name'))) return;
    if (!cleanMyText(formInput.get('phone_number'))) return;
    if (!cleanMyText(formInput.get('email'))) return;
    if (!cleanMyText(formInput.get('group_size'))) return;
    if (!cleanMyText(formInput.get('project_topic'))) return;

    let regData = JSON.stringify({
      "team_name": formInput.get('team_name'),
      "phone_number": formInput.get('phone_number'),
      "email": formInput.get('email'),
      "group_size": formInput.get('group_size'),
      "project_topic": formInput.get('project_topic'),
      "category": formInput.get('category'),
      "privacy_poclicy_accepted": privacayStatus
    })
    submitRegister(regData);
    qs('.submission-loading').style.display = "flex";
    e.preventDefault();
  })
  qs('.s-back-btn').addEventListener('click', () => {
    qs('.reg-success').style.display = "none";
  })
})();

