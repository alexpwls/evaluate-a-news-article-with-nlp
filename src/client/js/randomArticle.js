const articles = ["https://techcrunch.com/2020/05/22/startup-battlefield-is-going-virtual-with-techcrunch-disrupt-2020/",
    "https://techcrunch.com/2020/05/22/minecraft-dungeons-has-charm-and-potential-but-needs-lot-more-time-in-the-furnace/",
    "https://techcrunch.com/2020/05/22/how-to-make-the-most-of-your-at-home-videoconference-setup-microphone-edition/",
    "https://techcrunch.com/2020/05/22/the-fbi-is-mad-because-it-keeps-getting-into-locked-iphones-without-apples-help/",
    "https://techcrunch.com/2020/05/24/china-roundup-a-blow-to-us-listed-chinese-firms-and-tiktoks-new-global-face/",
    "https://techcrunch.com/2020/05/23/hackers-iphone-new-jailbreak/",
    "https://techcrunch.com/2020/05/23/elon-musk-the-tesla-cybertruck-isnt-getting-any-smaller/"];

export function randomArticle(event) {
    event.preventDefault()
    let randomItem = articles[Math.floor(Math.random()*articles.length)];
    document.getElementById('sentiment-url').value = randomItem;
}