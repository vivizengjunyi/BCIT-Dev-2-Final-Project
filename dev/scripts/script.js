/* change banner images and show indicators start */
const slides = document.querySelectorAll('.slider .slide');
const indicator = document.querySelector('.indicator')

 let index=0;

   // create circle indicators
    function circleIndicator(){
        for(let i=0; i< slides.length; i++){
        	const div=document.createElement("div");
                div.setAttribute("onclick","indicateSlide(this)")
                div.id=i;
                if(i==0){
                	div.className="active";
                }
               indicator.appendChild(div);
        }
    }
    circleIndicator();

    function indicateSlide(element){
         index=element.id;
         changeSlide();
         updateCircleIndicator();
         resetTimer();
    }
     
    function updateCircleIndicator(){
    	for(let i=0; i<indicator.children.length; i++){
    		indicator.children[i].classList.remove("active");
    	}
    	indicator.children[index].classList.add("active");
    }

   function prevSlide(){
   	 if(index==0){
   	 	index=slides.length-1;
   	 }
   	 else{
   	 	index--;
   	 }
   	 changeSlide();
   }

   function nextSlide(){
      if(index==slides.length-1){
      	index=0;
      }
      else{
      	index++;
      }
      changeSlide();
   }

   function changeSlide(){
   	       for(let i=0; i<slides.length; i++){
   	       	 slides[i].classList.remove("active");
   	       }

       slides[index].classList.add("active");
   }

   function resetTimer(){
   	  // when click to indicator or controls button 
   	  // stop timer 
   	  clearInterval(timer);
   	  // then started again timer
   	  timer=setInterval(autoPlay,2000);
   }
 
  
  function autoPlay(){
      nextSlide();
      updateCircleIndicator();
  }

  let timer=setInterval(autoPlay,2000);
/* change banner images and show indicators end */

/* dropdown menu start */
// Responsive Menu - Dropdown
const bar = document.querySelector('.bar');
const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');

btnMenu.addEventListener('click', openMenu);

btnMenu.addEventListener('mousedown', function (e) {
    e.preventDefault();
});

function openMenu() {
    if(bar.classList.contains('showUp') && nav.classList.contains('show')) {
        bar.classList.remove('showUp');
        nav.classList.remove('show');
    } else {
        bar.classList.add('showUp');
        nav.classList.add('show');
    }
    
}
/* dropdown menu end */






 



