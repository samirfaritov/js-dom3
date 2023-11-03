let width = document.querySelector('#width')
let height = document.querySelector('#height')
let bgColor = document.querySelector('#bgColor')
let add = document.querySelector('#add')
let item = document.querySelector('.item')
let br = document.querySelector('#br')
let position = document.querySelector('#position')
let left = document.querySelector('#left')
// let top = document.querySelector('#top')
let right = document.querySelector('#right')
let bottom = document.querySelector('#bottom')

 let w = 0
 let h = 0
 let bg = ``
 let b = 0
 let pos = ``
 let l = 0
 let t = 0
 let r = 0
 let bot = 0

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
left.addEventListener('keyup' , (event) => {
     l = event.target.value
    
})
top.addEventListener('keyup' , (event) => {
     t = event.target.value
    
})
right.addEventListener('keyup' , (event) => {
     r = event.target.value
    
})
bottom.addEventListener('keyup' , (event) => {
     bot = event.target.value
    
})
add.addEventListener('click',() =>{
    item.style.width = `${w}px`
    item.style.height = `${h}px`
    item.style.backgroundColor = bg
    item.style.borderRadius = `${b}px`
    item.style.position = pos
    item.style.left = `${l}px`
    item.style.top = `${t}px`
    item.style.right = `${r}px`
    item.style.bottom = `${bot}px`

    width.value = ``
    height.value =``
    bgColor.value = ``
    br.value = ``
    position.value = ``
    left.value = ``
    top.value = ``
    right.value = ``
    bottom.value = ``
})