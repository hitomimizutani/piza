const modal = document.getElementById('modal');
const main_wrapper = document.querySelector('.main-wrapper');
const botton = document.getElementById('botton');

const piza_wrapper = document.getElementById('piza-wrapper');

const Ingredients = document.querySelectorAll('[data-Ingredients]');
const Ingredients_wrapper = document.getElementById('Ingredients');
const piza_img = document.querySelectorAll('.piza-Ingredients img');
const data_main = document.querySelectorAll('[data-main]');

const bake = document.getElementById('bake');
const text = document.querySelector('.piza-main p');

const random = document.querySelectorAll('.random1-3');



const handleClick = (e) =>{
  
  text.style.display = 'none';
  
  const $this = e.target;
  const targetVal = $this.dataset.main;
  let cunt = 0;
  
  for(let i = 0; i < data_main.length; i ++){
    $this.style.display = 'none'; 
    document.querySelectorAll('[data-Ingredients="'+ targetVal + '"]')[0].style.display = 'block';
    cunt++;
    if(cunt === 7){
      bake.style.display = 'block';
    }
    bake.addEventListener('click',function(){
      bake.style.display = 'none';
      setTimeout(function(){
        main_wrapper.style.display = 'block';
        modal.classList.remove('active');
        
        setTimeout(function(){
          for(let i = 0; i < piza_img .length; i ++){
            piza_img[i].classList.add('rotate');
          }
          
          setTimeout(function(){
            piza_wrapper.style.opacity = '0';
            main_wrapper.style.display = 'none';
            
            setTimeout(function(){
              
              const imageArea = document.getElementById('imageArea');

              
              
              let images = ['../../javascript/piza/piza/piza1-min.png','../../javascript/piza/piza/piza2-min.png','../../javascript/piza/piza/piza3-min.png']
              
              let selectnum = Math.floor(Math.random() * images.length);
              
              let element = '<img src="' + images[selectnum] + ' "/>';

              const randomText = ['ピーマンピザの出来上がり！！','残念焦げちゃった！！','美味しいピザの出来上がり！！'];
              const Random = Math.floor(Math.random() * randomText.length);
              const p = document.getElementById('p').innerHTML = randomText[selectnum];
              
              imageArea.innerHTML = element;
              
              
              
            },500);
            
          },2000);
          
        },1000);
        
      },500);
      
    });
    
  }
  
  
}


// const randomText = ['ピーマンピザの出来上がり！！','残念焦げちゃった！！','美味しいピザの出来上がり！！'];
// const Random = Math.floor(Math.random() * randomText.length);
// const p = document.getElementById('p').innerHTML = randomText[Random];

for(let i = 0; i < data_main.length; i ++){
  data_main[i].addEventListener('click',(e)=> handleClick(e));
}


// modal
setTimeout(function(){
  modal.classList.add('active');
},2000);


botton.addEventListener('click',function(){
  botton.style.display = 'none';
  main_wrapper.style.display = 'none';
  piza_wrapper.style.display = 'block';
});

 
