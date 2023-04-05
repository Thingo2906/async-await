//part 1
async function getCard(){
    let URL ='https://deckofcardsapi.com/api/deck';
    let card = await axios.get(`${URL}/new/draw/`)
    console.log(`${card.data.cards[0].value.toLowerCase()} of ${card.data.cards[0].suit.toLowerCase()}`)
}
getCard();
//part 2
/*async function getTwoCards(){
    let URL ='https://deckofcardsapi.com/api/deck';
    let card1 = await axios.get(`${URL}/new/draw/`);
    let deckId = card1.deck_id;
    let card2 = await axios.get(`${URL}/${deckId}/draw/`);
    [card1, card2].forEach(function(card){
       console.log(`${card.cards[0].value.toLowerCase()} of ${card.cards[0].suit.toLowerCase()}`)

    })

}
getTwoCards()*/
 // 2.
async function getCards() {
  let baseURL ='https://deckofcardsapi.com/api/deck';
  let card1 = await $.getJSON(`${baseURL}/new/draw/`);
  let deckId = card1.deck_id;
  let card2= await $.getJSON(`${baseURL}/${deckId}/draw/`);
  [card1, card2].forEach(card => {
    console.log(`${card.cards[0].value.toLowerCase()} of ${card.cards[0].suit.toLowerCase()}`);
  });
}
getCards();

//part 3
/*async function getAllCards(){
    let $btn = $('button');
    let $cardArea = $('#card-area');
    let URL ='https://deckofcardsapi.com/api/deck';
    let deckData = await axios.get(`${URL}/new/shuffle/`);
    let deckId = deckData.deck_id;
    $btn.show();
    $btn.on('click', async function() {
        let card = await axios.get(`${URL}/${deckId}/draw/`);
        let cardSrc = card.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 60 - 20;
        let randomY = Math.random() * 60 - 20;
        $cardArea.append(
          $('<img>', {
           src: cardSrc,
           css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
           }
          })
        );
        if (card.remaining === 0) {
          $btn.remove();
        }
    });
  };
  getAllCards()*/
  async function getAllCards() {
    let $btn = $('button');
    let $cardArea = $('#card-area');
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    let deckId = deckData.deck_id;
    $btn.show()
    $btn.on('click', async function() {
      let cardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  getAllCards()
