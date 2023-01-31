// let gnb = document.querySelector('#gnb');
// let lnb = document.querySelectorAll('.lnb');
// let gnbbg = document.querySelector('.gnb_bg');
// gnb.addEventListener('mouseover',()=>{
//   lnb.style.display = 'block';
//   gnbbg.style.display = 'block';
// })

/* header hover */
let gnb = document.querySelector('#gnb');
let gnb_bg = document.querySelector('.gnb_bg');
let lnb = document.querySelectorAll('.lnb');

gnb.addEventListener('mouseenter',()=>{
  gnb_bg.style.height = '250px'
  for(i = 0; i < lnb.length; i++){
    lnb[i].style.height = '200px';
  }
})

gnb.addEventListener('mouseleave',()=>{
  gnb_bg.style.height = '0px'
  for(i = 0; i < lnb.length; i++){
    lnb[i].style.height = '0px';
  }
})
/* header hover */

// let m4img = document.querySelectorAll('#m4_img');

// m4img.addEventListener('mouseenter',()=>{
//   for(j = 0; j < m4img.length; j++){
//     m4img[j].innerHTML(`src="img/main3-on[${j}].jpg"`);
//   }
// })

/* main4 img hover */
let list = document.querySelectorAll('.list_3>li');
let on = document.querySelectorAll('.list.on');
let off = document.querySelectorAll('.list.off');

for(let i = 0; i < list.length; i++){
  list[i].addEventListener('mouseenter',()=>{
    on[i].className = 'list off';
    off[i].className = 'list on';
  });
};

for(let i = 0; i < list.length; i++){
  list[i].addEventListener('mouseleave',()=>{
    on[i].className = 'list on';
    off[i].className = 'list off';
  });
};
/* main4 img hover */

/* main5 scale_btn hover */
let floor = document.querySelectorAll('.floor');
let vr = document.querySelector('.vr')

for(let i = 0; i < floor.length; i++){
  floor[i].addEventListener('mouseenter',()=>{
    floor[i].style.backgroundImage = 'url(img/floorplan-icon-on.png)';
    floor[i].style.backgroundColor = '#fff';
    floor[i].style.color = '#333'
  })
}

for(let i = 0; i < floor.length; i++){
  floor[i].addEventListener('mouseleave',()=>{
    floor[i].style.backgroundImage = 'url(img/floorplan-icon.png)';
    floor[i].style.backgroundColor = '#8d7249';
    floor[i].style.color = '#fff'
  })
}

vr.addEventListener('mouseenter', ()=>{
  vr.style.backgroundImage = 'url(img/vr-icon-on.png)';
  vr.style.backgroundColor = '#fff';
  vr.style.color = '#333'
})

vr.addEventListener('mouseleave', ()=>{
  vr.style.backgroundImage = 'url(img/vr-icon.png)';
  vr.style.backgroundColor = '#59483f';
  vr.style.color = '#fff'
})
/* main5 scale_btn hover */