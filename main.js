let width = document.querySelector('#width')
let height = document.querySelector('#height')
let bgColor = document.querySelector('#bgColor')
let add = document.querySelector('#add')
let item = document.querySelector('.item')
let br = document.querySelector('#br')
let position = document.querySelector('#position')
let right = document.querySelector('#right')
let left = document.querySelector('#left')
let bottom = document.querySelector('#bottom')
// let top = document.querySelector('#top')

 let w = 0
 let h = 0
 let bg = ``
 let b = 0
 let pos = ``
 let r = 0
 let l = 0
 let bot = 0
 let t = 0

width.addEventListener('keyup' , (event) => {
     w = event.target.value
})
height.addEventListener('keyup' , (event) => {
    h = event.target.value
    
})
bgColor.addEventListener('keyup' , (event) => {
     bg = event.target.value
    
})
br.addEventListener('keyup' , (event) => {
     b = event.target.value
    
})
position.addEventListener('keyup' , (event) => {
     pos = event.target.value
    
})
right.addEventListener('keyup' , (event) => {
     r = event.target.value
    
})
left.addEventListener('keyup' , (event) => {
     l = event.target.value
    
})
bottom.addEventListener('keyup' , (event) => {
     bot = event.target.value
    
})
top.addEventListener('keyup' , (event) => {
     t = event.target.value
    
})
add.addEventListener('click',() =>{
    item.style.width = `${w}px`
    item.style.height = `${h}px`
    item.style.backgroundColor = bg
    item.style.borderRadius = `${b}px`
    item.style.position = pos
    item.style.right = `${r}px`
    item.style.left = `${l}px`
    item.style.bottom = `${bot}px`
    item.style.top = `${t}px`

    width.value = ``
    height.value =``
    bgColor.value = ``
    br.value = ``
    position.value = ``
    right.value = ``
    left.value = ``
    bottom.value = ``
    top.value = ``
})