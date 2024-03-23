window.addEventListener('load', function(){
	let menu = document.querySelector('.menu');
    let btn_go_top = document.querySelector('.btn_go_top')

	btn_go_top.addEventListener('click', ()=>{
		scrollToY(0);
	})

	document.addEventListener('scroll', function(){
		const scrollPosition = document.documentElement.scrollTop;
		let cl = btn_go_top.classList
		scrollPosition > 100 ? cl.add('btn_block') : cl.remove('btn_block');
	});
    	
	delegate(menu, 'a', 'click', function(e){
		e.preventDefault();

		let target = document.querySelector(this.hash);
		scrollToElem(target);
		setActiveMenuItem(menu, this);
	});

	let hash = window.location.hash;
	let autoTarget = hash.length > 0 ? document.querySelector(hash) : null;

	if(autoTarget !== null){
		scrollToElem(autoTarget);
		setActiveMenuItem(menu, menu.querySelector(`[href$="${hash}"]`));
	}
});

function delegate(box, selector, eventName, handler){
	box.addEventListener(eventName, function(e){
		let elem = e.target.closest(selector);

		if(elem !== null && box.contains(elem)){
			handler.call(elem, e);
		}
	});
}

function setActiveMenuItem(menu, item){
	menu.querySelectorAll('a').forEach(link => link.classList.remove('menu__link-active'));
	item.classList.add('menu__link-active');
}

function scrollToElem(el){
	let coords = el.getBoundingClientRect();
	let contentStyles = window.getComputedStyle(document.querySelector('.content'));
	let shift = parseInt(contentStyles.marginTop);
	let top = window.scrollY + coords.top - shift;
	scrollToY(top);
}


function scrollToY(top){
	window.scrollTo({
		top,
		behavior: "smooth"
	});
}

/*
	let a;

	if(some){
		a = 1;
	}
	else{
		a = 0;
	}

	let a = some ? 1 : 0;
*/