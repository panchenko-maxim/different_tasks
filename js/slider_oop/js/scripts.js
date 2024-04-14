window.addEventListener('load', function(){
    new Slider('.gallery-1');
});


class Slider {
    constructor(selector){
        this.rootElem = document.querySelector(selector)
        this.btnPrev = this.rootElem.querySelector('.buttons .prev');
        this.btnNext = this.rootElem.querySelector('.buttons .next');
        this.images = this.rootElem.querySelectorAll('.gallery .photos img');
        this.i = 0
        this.animMoveToLeft = [
            { transform: 'translateX(0) scale(1)' },
            { transform: 'translateX(-100%) scale(0.8)' }
        ];
        this.animMoveToRight = [
            { transform: 'translateX(0) scale(1)' },
            { transform: 'translateX(100%) scale(0.8)' }
        ];

        this.btnNext.addEventListener('click', () => this.next())
        this.btnPrev.addEventListener('click', () => this.prev())
    }

    next(){
		let imgHide = this.images[this.i];
		this.i++;

		if(this.i >= this.images.length){
			this.i = 0;
		}

		this.toggleSlides(imgHide, this.images[this.i], true);
	}

    prev(){
		let imgHide = this.images[this.i];
		this.i--;

		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		this.toggleSlides(imgHide, this.images[this.i], false);
	}

	toggleSlides(imgHide, imgShow, isNext){
		imgHide.classList.remove('showed');
		imgHide.animate(isNext ? this.animMoveToLeft : this.animMoveToRight, { duration: 500 });

		imgShow.classList.add('showed');
		imgShow.animate(isNext ? this.animMoveToRight : this.animMoveToLeft, { duration: 500, direction: 'reverse' });
	}
}