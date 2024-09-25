
function showEvent(){
  let inputValue = document.querySelector("input").value
  
  let listAnnotation = document.createElement('li')

  listAnnotation.innerHTML = inputValue + "<span onclick='deleteAnnontation(this)'>❌</span>"

  const ul = document.querySelector('ul').appendChild(listAnnotation)
  
  document.querySelector("input").value = ''
}


function deleteAnnontation(li){
 li.parentElement.remove()
}

