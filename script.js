var lines=document.querySelectorAll('.lines')

lines.forEach(function(ele){
      ele.addEventListener('mouseenter',function(){
        ele.childNodes[3].style.opacity='1'
        ele.childNodes[3].style.transform=`translate(-50%,-50%) scale(1)`

      })

      ele.addEventListener('mouseleave',function(){
        ele.childNodes[3].style.opacity='0'
        ele.childNodes[3].style.transform=`translate(-50%,-50%) scale(0)`
      })
      ele.addEventListener('mousemove',function(dets){
        ele.childNodes[3].style.left=`${dets.x-ele.getBoundingClientRect().x}px`
        ele.childNodes[3].style.top=`${dets.y-ele.getBoundingClientRect().y}px`
      })
      
})

