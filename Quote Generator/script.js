const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const btnTwitter = document.getElementById('twitter');
const btnQuote = document.getElementById('generate-tweet');



let apiQuotes =[];

//show random quote at any time
function newQuote() {
    const quote  = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    if (!quoteAuthor){
        quoteAuthor ='Unkown';
    }else{
        quoteAuthor.textContent = quote.author;
    }
// change font-size on big quotes
    if(quote.text.length >120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    
}



//get quotes from API
async function getQuotes() {
    const apiUrl ='https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
       // Catch Error
    }
  
}

// Tweet Function
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl,'_blank');

}

//Event Listners
btnQuote.addEventListener('click',newQuote);
btnTwitter.addEventListener('click',tweetQuote);
getQuotes();
