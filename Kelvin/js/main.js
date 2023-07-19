const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav')
const navBtnImg = document.querySelector('#nav')

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
	navBtnImg.src = "./img/icons/nav-close.svg"
	} else {
	navBtnImg.src = "./img/icons/nav-open.svg
	}
}