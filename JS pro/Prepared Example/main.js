
const youtube = document.getElementById("you");

const biggerContainer = document.querySelector(".bigger-contaier");
const container = document.querySelector(".container");
const done = document.getElementById("done")
const procontain =document.querySelector(".flex-pro")




const buy = document.querySelector(".JSbuy");
const addpro=document.getElementById("addpro")

addpro.addEventListener("click",(eo) => {
const newpro = ` <div class="card mycard" style="width: 18rem;">

<img style="border-radius: 5px; width: 100%;" src="pexels-cottonbro-3826678.jpg" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">Card title</h5>
 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<div class="bcenter">
    <a id="buy" href="#" style="width: 30%;"  class="JSbuy btn btn-primary">buy</a>
</div>
</div>
</div> `  
procontain.innerHTML+= newpro
})

procontain.addEventListener("click",(eo) => {
  if(eo.target.className =="JSbuy btn btn-primary" )
  biggerContainer.classList.add("active");
  container.style.display="block"
  eo.preventDefault();
  done.style.display="none"
})







const aywaa = document.querySelector(".ok");
aywaa.addEventListener("click", (eo) => {
  setTimeout(() => {
    biggerContainer.classList.remove("active");
  }, 2000);
  container.style.display="none"
  done.style.display="block"
});






// youtube.addEventListener("click", (eo) => {
//     eo.preventDefault()
// })

