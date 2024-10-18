function mobileNav() {
  const navBtnOpen = document.querySelector('#mobile-nav-btn')
  const navBtnClose = document.querySelector('#close-nav-btn')
  const mobileNavFade = document.querySelector('.mobile-nav-fade')
  const nav = document.querySelector('.mobile-nav')

  navBtnOpen.addEventListener('click', open)
  navBtnClose.addEventListener('click', close)
  mobileNavFade.addEventListener('click', close)
  nav.addEventListener('click', stopProp)

  function open(event) {
    event.preventDefault()

    nav.classList.add('mobile-nav--open')
    mobileNavFade.classList.add('mobile-nav-fade--open')
    document.body.classList.toggle('no-scroll')
  }

  function close(event) {
    event.preventDefault()

    nav.classList.remove('mobile-nav--open')
    mobileNavFade.classList.remove('mobile-nav-fade--open')
    document.body.classList.toggle('no-scroll')
  }

  function stopProp(event) {
    event.stopPropagation()
  }
}

export default mobileNav;