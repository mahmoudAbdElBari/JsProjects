

randomhearts.addEventListener("click",(eo) => {

  // this two lines to clear the heart elements that made
  const parentHeart = document.createElement("div");
  containerheart.append(parentHeart);

  // the main code of design element (heart) 
  // five steps [create, add classList, content, animation style,
  // determine location "append"]
  const createRandomHeart = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#129505;";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
    parentHeart.append(heart);

// ( 0  +0.5)         => 0.5            *1.5   => 0.75
//  (0.9999999 +0.5)  => 1.4999999999   *1.5  => 2.25

    // if i want to make two types of heart
    const heart2 =document.createElement("div")
    heart2.classList.add("heart")
    heart2.innerHTML= " &#128156;";
    heart2.style.left= `${Math.random()*100}%`
    heart2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
    parentHeart.append(heart2)


  // to stop the effect after constant time
  }, 50);
  setTimeout(() => {
    clearInterval(createRandomHeart);
  }, 3000);

  // remove the parent element of heart "parentHeart" make all element is removed 
  // and regenerate this parent again in top to make the hearts again
  setTimeout(() => {
    parentHeart.remove();
  }, 5000); 
})