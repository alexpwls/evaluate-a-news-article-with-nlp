function textHandleSubmit(event) {
    const errorText = document.getElementById('error-text');
    event.preventDefault()
    errorText.style.display = "none";
    let sentimentText = document.getElementById('sentiment-text').value;
    if (sentimentText) {
        const url = 'http://localhost:8081/sentiment-text';
        fetch(url, {
            method: 'POST', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({sentimentText}),
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('text').innerHTML = res.text;
            document.getElementById('polarity').innerHTML = res.polarity;
            document.getElementById('polarity-confidence').innerHTML = res.polarity_confidence;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
            document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity_confidence;
            document.querySelector('.results').style.display = "block";
        })
    } else {
        errorText.textContent = "Please fill in some text.";
        errorText.style.display = "block";
    }

}

export { textHandleSubmit };