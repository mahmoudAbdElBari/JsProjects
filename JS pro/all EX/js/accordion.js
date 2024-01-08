const allPlus = document.querySelectorAll(".plus");

allPlus.forEach((item) => {
  item.addEventListener("click", (eo) => {

  const content =  
    eo.target.parentElement.parentElement.getElementsByClassName(
      "content"
    )[0];

      content.classList.toggle("active");

// replace the icon by making new class to help
    content.classList.toggle("hidePlus");
    if (content.classList.contains("active"))
    { item.innerText="-"}
    else{item.innerText="+"}

// want  to be on size of text not longer or shorter than
// we will use scroll height
    if(content.classList.contains("active"))
      {
        content.style.height = `${content.scrollHeight}px `
      }
      else{content.style.height = `${0}px`}


  });
});
