let dragIteams=document.querySelectorAll('li')

let ul=document.querySelector('ul')


dragIteams.forEach((dragIteams)=>{

    dragIteams.addEventListener('dragstart',(e)=>{
        setTimeout(()=>{
            dragIteams.classList.add('dragging')
        },0)

    })

    dragIteams.addEventListener('dragend',(e)=>{
        // e.stopPropagation()
        dragIteams.classList.remove('dragging')
    })


    ul.addEventListener('dragover',(e)=>{
        e.preventDefault()
        let selectedElement=document.querySelector('.dragging')

        let nextSiblings= Array.from(document.querySelectorAll('li:not(.dragging)'))

        for(let a in nextSiblings){

            let touchPoint= nextSiblings[a].offsetTop+nextSiblings[a].offsetHeight/2

            let lastElement=nextSiblings[nextSiblings.length-1]

             
            if( touchPoint >= e.clientY){
                nextSiblings[a].insertAdjacentElement("beforebegin", selectedElement)
                break
            } 


            else if(nextSiblings[a]==lastElement){
                ul.appendChild(selectedElement)
            }
        }
    })
})

