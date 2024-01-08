const inspirationalQuotes = {
    Einstein: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    Mandela: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    Lincoln: "The best way to predict the future is to create it.",
    Roosevelt: "Believe you can and you're halfway there.",
    Earhart: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    King: "Life's most persistent and urgent question is, 'What are you doing for others?'",
    Gandhi: "Be the change that you wish to see in the world.",
    Curie: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
};

const getRandQuote = () => {
    let authorArr = Object.keys(inspirationalQuotes);
    let quoteArr = Object.values(inspirationalQuotes);
    let randIndex = Math.floor(Math.random() * quoteArr.length)
    let quote = quoteArr[randIndex]
    let author = authorArr[randIndex]
    return quote + ' - ' + author
}
console.log(getRandQuote())
 