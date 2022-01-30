function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var review = document.getElementById('review')
    
    if ((Name.value=="")|(email.value=="")|(review.value=="")){
		document.getElementById('danger').style.display = 'inline';
		document.getElementById('success').style.display = 'none';

	}
	else
	{
		document.getElementById('success').style.display = 'inline';
		document.getElementById('danger').style.display = 'none';
	
	}
}



// google spreadsheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwVO4nmZBIiG10q2GqGwA2wNwzzF8-MRLzXuKhH5mI47fZTa_CYczCNLIcPQwHXnIxR/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      document.getElementById("response").reset()
  })