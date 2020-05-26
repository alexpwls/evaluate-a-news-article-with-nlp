const errorText = document.getElementById('error-text');

function urlHandleSubmit(event) {
    event.preventDefault()
    errorText.style.display = "none";
    let sentimentUrl = document.getElementById('sentiment-url').value;
    if (Client.checkURL(sentimentUrl)) {
        const url = 'http://localhost:8081/sentiment-url';
        // const url = 'http://206.189.229.116:8081/sentiment-url';
        fetch(url, {
            method: 'POST', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({sentimentUrl}),
        })
        .then(res => res.json())
        .then(function(res) {
            if (res == false) {
                errorText.textContent = "Something went wrong, it could be an invalid URL or the provided URL has no data for us to read.";
                errorText.style.display = "block";
            } else {
                document.getElementById('text').innerHTML = res.text;
                document.getElementById('polarity').innerHTML = res.polarity;
                document.getElementById('polarity-confidence').innerHTML = res.polarity_confidence;
                document.getElementById('subjectivity').innerHTML = res.subjectivity;
                document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity_confidence;
                document.querySelector('.results').style.display = "block";
            }
        })
    } else {
        errorText.textContent = "Please enter a valid URL.";
        errorText.style.display = "block";
    }
}

export { urlHandleSubmit };