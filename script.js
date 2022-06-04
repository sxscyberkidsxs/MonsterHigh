let products = [
  {href: 'product1.html',image: 'doll1.jpg',name: 'Фрэнки Штейн',price: '7359', info: 'Фрэнки Штейн - дочь Чудовища Франкенштейна. Прожив столь мало времени, ей уже хочется узнать многое о мире вокруг неё, и она всегда готова пробовать новые вещи вместе с друзьями.'},
  {href: 'product2.html',image: 'doll2.jpg',name: 'Скелета Калаверас',price: '13 399', info: 'Скелита Скелита Калаверас — дочь мексиканских скелетов, Лос-Эскелетос. Скелита добрая, женственная и немного неуверенная. Скелита всегда может дать мудрый совет, когда её попросят.'},
  {href: 'product3.html',image: 'doll3.jpg',name: 'Купидон',price: '10 759', info: 'Си-Эй Кьюпид - существо неизвестного вида. Ее нашли на пороге храма Эроса еще младенцем и с радостью удочерили. Она не умеет работать с арбалетом и стрелами, зато хорошо разбирается в технике.'},
  {href: 'product4.html',image: 'doll4.jpg',name: 'Бонита Фемур',price: '12 459', info: 'Бонита Фемур - Она член группы в Школе Монстров, которую называют гибриды. Она дочь скелета и Человека-Мотылька. Бонита любит покупать одежду на блошином рынке. Когда она начинает нервничать, она жует свою собственную одежду.'},
  {href: 'product5.html',image: 'doll5.jpg',name: 'Дракулаура',price: '10 399', info: 'Дракулаура — вампир, дочь Дракулы. Дракулаура энергичная, дружелюбная, и легко ладит со всеми, хотя она может вести себя немного по-детски.'},
  {href: 'product5.html',image: 'doll6.jpg',name: 'Кэти Нуар',price: '14 999', info: 'Кэтти Нуар суеверна. Она перед каждым концертом за 2 часа ест 7 кусочков курицы, 5 долек яблока и 1 клубничный шейк, а также носит кусочек битого стекла.'},
  {href: 'product1.html',image: 'doll7.jpg',name: 'Клеолей',price: '8959', info: 'Клеолей - очаровательная кукла из коллекции Monster High "Монстрические мутации". В ее внешнем виде можно узнать черты двух персонажей Школы монстров - Клео де нил и Торалей.'},
  {href: 'product1.html',image: 'doll8.jpg',name: 'Мяулодия',price: '9159', info: 'Мяулодия — светловолосая кошка-оборотень. Она молчаливая, как и её сестра-близнец. Она не произносит ни слова, а только мяукает'},
  {href: 'product1.html',image: 'doll9.jpg',name: 'Поси Риф',price: '5999', info: 'Поси Риф — дочь Посейдона из Прекрасного Кошмарного рифа.'},
  {href: 'product1.html',image: 'doll10.jpg',name: 'Триза Торнвиллоу',price: '5949', info: 'Триза Торнвиллоу -дочь древесной нимфы или же дриады и разновидность растительного монстра. Она очень заботится о природе и является старшей сестрой Торны Торнвиллоу.'},
  {href: 'product1.html',image: 'doll11.jpg',name: 'Финнеган Вейк',price: '9859', info: 'Финнеган Вейк, известный, как Райдер — сын русалки (водяного). Финнеган любит плавать в школьном бассейне и ездить на своём кресле.'},
  {href: 'product1.html',image: 'doll12.jpg',name: 'Элизабэт',price: '7199', info: 'Элизабэт, а также известная, как Вероника Фон Вамп — дочь вампиров, которая стала Королевой Вампиров.'},
  {href: 'product1.html',image: 'doll13.jpg',name: 'Спектра Вондергейст',price: '7359', info: 'Спектра Вондергеист — дочь приведений, которая перешла из Школы Призраков в Школу Монстров. Она сплетница, которая исправилась из-за сплетен Ревенант. Верит любой выдумке.'},
  {href: 'product1.html',image: 'doll14.jpg',name: 'Сирена вон Бу',price: '8459', info: 'Сирена Вон Бу — гибрид, ребёнок русалки и призрака, и ученик Школы Монстров. Сирена любит мечтать и следовать её воображению. Она любит охоту за сокровищами в море и посещать антикварные магазины и на суше.'},
  {href: 'product1.html',image: 'doll15.jpg',name: 'Рошель Гойл',price: '15 659', info: 'Рошель Гойл - горгулья, которая учится в Школе Монстров. Рошель из Скарижа, Франция. Она занимала крышу великого собора (Нотрдам де Скари). Для большинства её жизни, её социальная атмосфера была занята исключительно другими горгульями.'},
  {href: 'product1.html',image: 'doll16.jpg',name: 'Ривер Стикс',price: '9549', info: 'Ривер Стикс — смерть, ну или та, кто готовится стать смертью. Она посещает Школу Призраков. Не похожая на традиционную версию смерти, Ривер крайне веселая, оптимистичная и живая. Ей нравятся светлые цвета и сладости.'},
  {href: 'product1.html',image: 'doll17.jpg',name: 'Нейтан Рот',price: '6399', info: 'Нейтан Рот — гибрид зомби и единорога. Нейтан неуклюжий, но он социальный монстр, который любит тусоваться со своими друзьями.'},
  {href: 'product1.html',image: 'doll18.jpg',name: 'Кьерсти Троллсон',price: '9599', info: 'Кирсти Троллсонн — ученица по обмену, прибывшая в Школу Монстров из Горвегии (Норвегии), Европа. Она — норвежский тролль.'},
  {href: 'product1.html',image: 'doll19.jpg',name: 'Клод Вульф',price: '7299', info: 'Клод Вульф — волк-оборотень. Клод очень дружелюбный, общительный и добрый к другим, особенно к своей подруге, Дракулауре. Он верный друг и прирожденный лидер, выступая в качестве капитана нескольких спортивных команд.'},
  {href: 'product1.html',image: 'doll20.jpg',name: 'Клео де Нил',price: '7359', info: 'Клео де Нил - учится в Школе Монстров. Также является самой известной девушкой этой школы. Клео была принцессой Египта более чем 5,842 года назад и росла со знанием того, что она никогда не станет королевой своего родного дома.'},
];

      function NotReadyAlert(event)
      {
        showModal('Sorry, not ready yet<br>Извините, еще не готово','Ладно');
        event.preventDefault();
        return false;
      }
      function showModal(messageText, buttonText){
        let modal = document.getElementsByClassName('modal')[0];
        modal.style.visibility = 'visible';
        modal.style.opacity ='1';

        let message = modal.getElementsByClassName('message')[0];
        message.innerHTML=messageText;
        // let button = modal.getElementsByTagName('button')[0];
        // button.innerHTML = buttonText;

        document.body.style.overflow = 'visible';
        let overlay = document.getElementsByClassName('overlay')[0];
        overlay.style.visibility = 'visible';
        overlay.style.opacity ='1';
      }
      function ShowProductInfo(product){
        showModal(`
          <div class="modalIMG"><img src="${product.image}"></div>
          <div><a>${product.name}</a></div>
          <div><a>${product.price} &#8381;</a></div>
          <div><i>${product.info}</i></div>
        `,"Ладно");
      }
      function Search() {
        let cards = document.getElementsByClassName('card');
        let name = document.getElementById('Search').value;
        let nameRegExp = new RegExp(name, 'i');
        for(let i = 0; i<products.length; i++) {
        let product = products[i];
        if(nameRegExp.test(product.name)) {
        let card = cards[i];
        card.style.border = '1px solid red';
        card.style.backgroundColor = 'yellow';
        setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
        }, 2000);
      }}}

      function GenerateMenu()
      {
        //ссылка на кусок где генерировать
        let menu = document.querySelector('nav.main-menu ul');
        menu.innerHTML = `<li>
        <div class="searchbox">
          <input type="search" placeholder="Поиск по котам" id="Search"> 
          <button onclick="Search()">&#x1F50E;</button>
        </div>
        </li>`;

        //массив с штукоми
        let items = [
          {href: 'index.html',text: 'Товары'},
          {href: '',text: 'Контакты'},
          {href: '',text: 'Доставка'},
          {href: '',text: 'Акции'},
          {href: '',text: 'О нас'},
        ];

        //создание штук
        for(let i = 0; i<items.length; i++){
          //Создает кусок <a></a>
          let link = document.createElement('a');
          //Задает параметры <a></a>
          link.innerText = items[i].text;
          link.href = items[i].href;
          //Нет ссылки
          if(items[i].href == ''){
            link.addEventListener('click', NotReadyAlert);
          }
          //Создает ссылку <li></li>
          let menuItem = document.createElement('li');
          menuItem.appendChild(link);

          menu.appendChild(menuItem);
        }
        
      }
      function addToCart(productNum, productCount){
        productCount = parseInt(productCount);
        if (products[productNum].countInCart == undefined)
              products[productNum].countInCart = productCount;
        else
              products[productNum].countInCart += productCount;
        let cartProductCount = 0;
        for(let i = 0; i<products.length; i++){
          if(products[i].countInCart !== undefined)
            cartProductCount += products[i].countInCart;
        }

        let count = document.getElementById('productCount');
        count.innerText = cartProductCount;
        count.style.display = 'inline';
      }
      function GenerateProducts()
      {
        let catalog = document.querySelector('div.catalog');
        // catalog.innerHTML = '';

        for(let i = 0; i<products.length; i++){
          let product = products[i];
          let card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = '<a href="#">' + 
          '<div class="product-name">'+ products[i].name +'</div>' +
          '<div class="image"><img src="'+ products[i].image +'"></div>' +
          '<div class="price">'+products[i].price +' &#8381;</div>' +
          '</a>' + 
          '<div>' +
            // '<input type ="number" value = "1" min = "1">'+
            '<button>В корзину</button>'+
          '<div>';

          card.querySelector('button').addEventListener('click',function(e){
              let input = e.target.previousElementSibling;
              let count = input.value;
              addToCart(i, count);
              return false;
          });

          card.querySelector('a').addEventListener('click',function(){
            ShowProductInfo(products[i]);
          });

          catalog.appendChild(card);
        }
      }
      function Loaded() {
        let searchbox = document.getElementById('Search');
        searchbox.addEventListener("keydown", function (key){
          if(key.key =='Enter')
            Search();
        });

        GenerateMenu();
        GenerateProducts();
      }
      function hideModal(){
          let modal = document.getElementsByClassName('modal')[0];
          setTimeout(function(){
            modal.style.visibility = 'hidden';
          },350);
          modal.style.opacity ='0';

          document.body.style.overflow = 'auto';
          let overlay = document.getElementsByClassName('overlay')[0];
          setTimeout(function(){
            overlay.style.visibility = 'hidden';
          },200);
          modal.style.visibility = 'hidden';
          modal.style.opacity ='0';
      }
      
