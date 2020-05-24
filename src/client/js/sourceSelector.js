const errorText = document.getElementById('error-text');

export function sourceSelector(event) {

    event.preventDefault()

    let sourceValue = document.getElementById('source').value;
    errorText.style.display = "none";
    if (sourceValue == 'url') {
        document.querySelector('.source-text').style.display = "none";
        document.querySelector('.source-url').style.display = "block";
        document.querySelector('.results').style.display = "none";
    } else {
        document.querySelector('.source-text').style.display = "block";
        document.querySelector('.source-url').style.display = "none";
        document.querySelector('.results').style.display = "none";
    }
}