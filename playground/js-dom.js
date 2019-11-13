

function changeHeadline() {
    const headline = document.getElementById('headline1');
    headline.innerHTML = 'Changed!';
    headline.style.color = 'red';
}

function hideHeadline() {
    const headline = document.getElementById('headline1');
    headline.style = 'display: none;';
}

function showHeadline() {
    const headline = document.getElementById('headline1');
    headline.style = 'display: block;';
}

function hideAllHeadlines() {
    const headlines = document.getElementsByTagName('h1');
    console.log(headlines);
    for (let i = 0; i < headlines.length; i ++) {
        const headline = headlines[i];
        headline.style = 'display: none;';
    }
}

function showAllHeadlines() {
    const headlines = document.getElementsByTagName('h1');
    console.log(headlines);
    for (let i = 0; i < headlines.length; i ++) {
        const headline = headlines[i];
        headline.style = 'display: block;';
    }
}

function hideAllGreenHeadlines() {
    const greenHeadlines = document.getElementsByClassName('greenHeadline');
    console.log(greenHeadlines);
    for (let i = 0; i < greenHeadlines.length; i ++) {
        const headline = greenHeadlines[i];
        headline.style = 'display: none;';
    }
}

function showAllGreenHeadlines() {
    const headlines = document.getElementsByClassName('greenHeadline');
    console.log(headlines);
    for (let i = 0; i < headlines.length; i ++) {
        const headline = headlines[i];
        headline.style = 'display: block;';
    }
}

function addNewHeadline() {
    const newH1 = document.createElement('h1');
    newH1.innerHTML = 'Artifical child';
    document.getElementById('headlines').appendChild(newH1);
}

function addNewGreenHeadline() {
    const newH1 = document.createElement('h1');
    newH1.innerHTML = 'Artifical child';
    newH1.classList.add('greenHeadline');
    document.getElementById('headlines').appendChild(newH1);
}



function breakLastButton() {
    document.getElementById('addHeadlineButton').onclick = function() {
        console.log('No longer working that way...');
    }
}

function fixLastButton() {
    document.getElementById('addHeadlineButton').onclick = addNewHeadline;
}



