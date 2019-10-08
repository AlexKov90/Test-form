const formElement = document.getElementById('form');
formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = [...formElement.elements]
        .filter(el => el.name);

    let isFormInvalid = false;

    inputs.forEach(element => {
        if (!element.value) {
            isFormInvalid = true;
            element.classList.add('formInvalid');
        } else {
            element.classList.remove('formInvalid');
        }
    });

    if (isFormInvalid) {
        formElement.classList.add('formInvalid');
        return;
    } else {
        formElement.classList.remove('formInvalid');
    }

    const params = [...formElement.elements]
        .filter(function (el) { return el.name && el.value; })
        .reduce((accum, el) => ({ ...accum, [el.name]: el.value }), {});
        
    fetch('https://myurl', {
        method: 'POST',
        body: JSON.stringify(params),
    })
        .then(response => console.log(response.json()));
})