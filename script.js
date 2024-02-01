const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

const urls = [
  'https://tse3.mm.bing.net/th?id=OIP.b3HOILaJIz9SO6YK4H7MlAHaFj&pid=Api&P=0&h=180',
  'https://www.solidbackgrounds.com/images/3840x2160/3840x2160-buff-solid-color-background.jpg',
  'https://images.freecreatives.com/wp-content/uploads/2016/02/Free-Baby-Blue-Solid-Color-Background.jpg',
  'https://www.solidbackgrounds.com/images/2732x2732/2732x2732-bronze-solid-color-background.jpg',
  'https://tse2.mm.bing.net/th?id=OIP.KU3KO9xDTagrPwFDeBRyDAHaFj&pid=Api&P=0&h=180'
];

let cardCount = 0;

function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

for (let i = 0; i < 3; i++) {
  appendNewCard();
}

