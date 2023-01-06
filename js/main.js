document.querySelector('.nav_btn').addEventListener('click', (e) => {
	if(e.target.classList.contains('menu')){
		let img = document.querySelectorAll('.menu')
		if(img[0].style.opacity !== '0'){
			img[0].style.opacity = '0'
			img[1].style.opacity = '1'
		}
		else{
			img[0].style.opacity = '1'
			img[1].style.opacity = '0'
		}
		document.querySelector('.div_nav_ul').classList.toggle('navbar_ul_visible');
		document.querySelector('.navbar_ul').classList.toggle('navbar_li_visible');
	}
})