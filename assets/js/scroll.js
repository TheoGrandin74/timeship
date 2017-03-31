var container = {
  body: document.querySelector('body'),
  scrollX: 0,
  footer: document.querySelector('.footer'),
  date_timeline: document.querySelectorAll('.date-timeline'),
  width: window.innerWidth
}

container.footer.anchor = container.footer.querySelectorAll('.anchor');

container.body.addEventListener('mousewheel', (e) => {
  if(window.scrollX < container.width)
  {
    if(container.date_timeline[0].classList.contains('active-p')){
      container.date_timeline[0].classList.remove('active-p');
      container.date_timeline[0].classList.add('hidden'); 
    }
    if(container.footer.anchor[1].classList.contains('active'))
      container.footer.anchor[1].classList.remove('active')
      container.footer.anchor[0].classList.add("active");
  }
  else if(window.scrollX >= container.width && window.scrollX < container.width*2){
    active_timeline_dot(0);
  }
  else if(window.scrollX >= container.width*2 && window.scrollX < container.width*3){
    active_timeline_dot(1);
  }
  else if(window.scrollX >= container.width*3 && window.scrollX < container.width*4){
    active_timeline_dot(2);
  }
  else if(window.scrollX >= container.width*4 && window.scrollX < container.width*5){
    active_timeline_dot(3);
  }
  else
  {
    if(container.date_timeline[3].classList.contains('active-p')){
      container.date_timeline[3].classList.remove('active-p');
      container.date_timeline[3].classList.add('hidden'); 
    }
    if(container.footer.anchor[4].classList.contains('active'))
      container.footer.anchor[4].classList.remove('active');
    container.footer.anchor[5].classList.add('active');
  }

});

container.body.addEventListener('keydown', () => {
  if(window.scrollX < container.width)
  {
    if(container.date_timeline[0].classList.contains('active-p')){
      container.date_timeline[0].classList.remove('active-p');
      container.date_timeline[0].classList.add('hidden'); 
    }
    if(container.footer.anchor[1].classList.contains('active'))
      container.footer.anchor[1].classList.remove('active')
      container.footer.anchor[0].classList.add("active");
  }
  else if(window.scrollX >= container.width && window.scrollX < container.width*2){
    active_timeline_dot(0);
  }
  else if(window.scrollX >= container.width*2 && window.scrollX < container.width*3){
    active_timeline_dot(1);
  }
  else if(window.scrollX >= container.width*3 && window.scrollX < container.width*4){
    active_timeline_dot(2);
  }
  else if(window.scrollX >= container.width*4 && window.scrollX < container.width*5){
    active_timeline_dot(3);
  }
  else
  {
    if(container.date_timeline[3].classList.contains('active-p')){
      container.date_timeline[3].classList.remove('active-p');
      container.date_timeline[3].classList.add('hidden'); 
    }
    if(container.footer.anchor[4].classList.contains('active'))
      container.footer.anchor[4].classList.remove('active');
    container.footer.anchor[5].classList.add('active');
  }
});

var active_timeline_dot = (i) =>{
  if(i !=0){
    if(container.date_timeline[i-1].classList.contains('active-p')){
      container.date_timeline[i-1].classList.remove('active-p');
      container.date_timeline[i-1].classList.add('hidden'); 
    }
  }
  if(i+1 != container.date_timeline.length){
    if(container.date_timeline[i+1].classList.contains('active-p')){
      container.date_timeline[i+1].classList.remove('active-p');
      container.date_timeline[i+1].classList.add('hidden'); 
    }
  }
  if(container.footer.anchor[i].classList.contains('active'))
    container.footer.anchor[i].classList.remove('active');
  else if(container.footer.anchor[i+2].classList.contains('active'))
    container.footer.anchor[i+2].classList.remove('active');
  container.footer.anchor[i+1].classList.add('active');
  container.date_timeline[i].classList.add('active-p')
  container.date_timeline[i].classList.remove('hidden');
} 

for(let i = 0; i < container.footer.anchor.length;i++){
  container.footer.anchor[i].addEventListener('click', ()=>{
    window.scroll({
      top: 0, 
      left: container.width*i, 
      behavior: 'smooth' 
    });
    var active_anchor = document.querySelector('.active');
    var active_p = document.querySelector('.active-p');
    active_anchor.classList.remove('active');
    if(active_p != null){
      active_p.classList.remove('active-p');
      active_p.classList.add('hidden');
    }
    if(i!=0 && i!=5){
      container.date_timeline[i-1].classList.remove('hidden');
      container.date_timeline[i-1].classList.add('active-p');
    }
    container.footer.anchor[i].classList.add('active');
  });
}