//  defining variable's in JavaScript 
const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
sendTweet = document.querySelector(".twitter"),
sendLinkedin = document.querySelector(".linkedin"),
sendFacebook = document.querySelector(".facebook"),
showCode = document.querySelector(".code");


// function to generate random quote 
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    // fetching random quotes from the API and parsing it into JavaScript object 
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "Get Fresh";
        quoteBtn.classList.remove("loading");
    });
};

quoteBtn.addEventListener("click", randomQuote);


// sound button JavaScript 
function playSound(){
    // SpeechSynthesisUtterance is a web API that represent a speech request 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utternance
}
soundBtn.addEventListener("click", playSound);


// copy button JavaScript 
function copyTxt(){
    //copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
    alert(`Quote Copied to clipboard`);
}

copyBtn.addEventListener("click", copyTxt);


//Twitter button JavaScript
function tweetQuote(){
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank"); // opening anew twitter tab with passing quote in the url
}
sendTweet.addEventListener("click", tweetQuote);


//Send quote to linkedin function
function linkedinQuote(){
    let linkedinUrl = `https://linkedin.com/intent/feed?url=${quoteText.innerText}`;
    window.open(linkedinUrl, "_blank");
}
sendLinkedin.addEventListener("click", linkedinQuote);



//Send quote to facebook function
function facebookQuote(){
    let facebookUrl = `https://facebook.com/intent/feed?url=${quoteText.innerText}`;
    window.open(facebookUrl, "_blank");
}
sendFacebook.addEventListener("click", facebookQuote);



//Show source code button javascript function
function sourceCodeShow(){
    let gitHubUrl = `https://github.com/itsashishsahu/Random-Quote-Generator`;
    window.open(gitHubUrl, "_blank");
}
showCode.addEventListener("click", sourceCodeShow);