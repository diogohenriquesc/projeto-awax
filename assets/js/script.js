var button = window.document.querySelector('.menu-buttom')
button.addEventListener('click', abrirMenu)

var isOpen = false

function abrirMenu() {
    var menu = window.document.querySelector('.menu')

    if (isOpen == false){
        menu.style = 'display: block;'
        isOpen = true
    } else {
        menu.style = 'display: none'
        isOpen = false
    }
    
}
