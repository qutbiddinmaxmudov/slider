# slider
!Создавай кнопки вместе между ними ничего не должно быть!

!Ты должен дать своему слайдеру класс "slider"!

!Внутри "slider" должен быть "slider__inner" а в нем фотки!

!Нужно дать слайдеру id и его передать в поле "name"!

Фукции которые ты настраеваешь:

1.name: '#slider' (Обязательно)

2.direction: 'x'  X По горизантали Y по вертикали написал что то иное он примет X (Не Обязательно)

3.transition: 1000 Минимально 500 сделаешь меньше он примет 500 (Не Обязательно)

4.autoPlay: true/false false по умолчнью Авто подкрутка (Не Обязательно)

5.autoPlayTime:3000 минимум 3000 если меньше по умолчанью возмет 5000 (Не Обязательно)

6.button: true/false если написал true но добавил свои кнопки он не добавит что чего не хватает класс содержимое(Не Обязательно)

ПРИМЕР:


JS:

const slider = new Slider({

  name: '#slider',
  
  direction: 'X',
  
  transition: 500,
  
  autoPlay: true,
  
  autoPlayTime: 3000,
  
  button: true;
  
})

HTML:

div class="slider" id="slider">

        <div class="slider__line">
        
            <img src="img/1.jpeg" alt="">
            
            <img src="img/2.jpg" alt="">
            
            <img src="img/3.jpg" alt="">
            
            <img src="img/4.jpg" alt="">
            
            <img src="img/5.jpg" alt="">
            
            <img src="img/6.jpg" alt="">
            
            <img src="img/7.jpg" alt="">
            
            <img src="img/8.jpg" alt="">
            
            <img src="img/9.jpg" alt="">
            
        </div>
        
    </div>
