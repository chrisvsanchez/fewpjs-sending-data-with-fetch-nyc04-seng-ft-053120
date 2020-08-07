function submitData(name, email) {
    let dataForm = {
        name: name,
        email: email
    };

    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dataForm)
    };

    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(data => {
            document.body.prepend(data.id);
        })
        .catch(error => {
            document.body.append(error.message);
        })
    }