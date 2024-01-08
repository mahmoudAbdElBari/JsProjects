
  // consist of the hover of change color li 
  // we prepare the hover li and the list will show 
{const chcolor = document.getElementById("chcolor");
const hiddenul= document.getElementById("hiddenul");

chcolor.addEventListener("mousemove",(eo) => {
  hiddenul.style.display="block"
})

chcolor.addEventListener("mouseout",(eo) => {
  hiddenul.style.display="none"
})}

// we will change the header color using hsl() color type
// and using addEventListener

//1.
// (IMPORTANT) Here we must make the varaible "random" outside headerbg
// because i will use it in anothere titlebg and it must be a global
// scope not a local scope or one for each type
// the hue of range from [0:360]
{headerbg.addEventListener("click",(eo) => {
  const random = Math.round(Math.random()*360)
header.style.backgroundColor = `hsl(${random},44%,55%)`
header.style.boxShadow = `4px 5px 25px hsl(${random},44%,55%)`
headerTitle.style.backgroundColor = `hsl(${random},44%,55%)`
dark.style.backgroundColor =  `hsl(${Math.round(Math.random()*360)},44%,55%)` 
})}

//2.
// now we will change the other sub titles background color
titlebg.addEventListener("click",(eo) => {
  const random = Math.round(Math.random()*360)
  const allTitle =document.querySelectorAll("h1:not(#header > h1)")
  allTitle.forEach(item => {
  item.style.backgroundColor = `hsl(${random},44%,55%)`
  item.style.boxShadow = `4px 5px 25px hsl(${random},44%,55%)`
  });
})

//3.
// change the color of title text using function "changeColor"
//but the problem is different from each other because:
//for each repeat the function when effect is happen on second title
//solvig: to store function in varaible then use it in foreach.
{const changeColor = () => {
  return Math.round( Math.random() * 360 )
}
titlecolor.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#header > h1)")
//solving
  const chC = changeColor()
  allTitle.forEach(item => {
    item.style.color = `hsl(${chC}, 44%, 55%)`
  });
})}

//4.
// we use in css transition in changing color give a good style
// we will make the "sectionbg" color with limited number of color 
// only three colors using array for storing and foreach for repeat
// and to go to start the frist array color again use if condition.

// {const arrColors = ["#A0E7E5", "#FBE7C6", "#ffafcc"];
// let i =0

// sectionbg.addEventListener("click",(eo) => {
// const allSections = document.querySelectorAll("section")

//   allSections.forEach(item => {
//   item.style.backgroundColor = arrColors[i]
//   });
//   i<arrColors.length - 1 ? i++ : i = 0
// })}

//4.2
// another way for "sectionbg" using same colors but in random way
// but random in this example can reapeat number twice
// so use the above if you start pro and secon if edit on site 
// {const arrColors = ["#A0E7E5", "#FBE7C6", "#ffafcc"];

// sectionbg.addEventListener("click",(eo) => {
//   const allSections = document.querySelectorAll("section")
//   const random = Math.floor( Math.random()*arrColors.length)

//     allSections.forEach(item => {
//     item.style.backgroundColor = arrColors[random]
//     });
//   })}

//4.3
// change SECTION-BG using rgb & Math.random() & return function
// {const random255 = () => {
//   return Math.round(Math.random() * 255);
// };

// sectionbg.addEventListener("click", (eo) => {
//   const allSections = document.querySelectorAll("section");

//   const rgb1 = random255();
//   const rgb2 = random255();
//   const rgb3 = random255();

//   allSections.forEach((item) => {
//     item.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//   });
// });}

//4.4
//change SECTION-BG using random hexadecimal number & same with return function
{sectionbg.addEventListener("click", (eo) => {
    const allSections = document.querySelectorAll("section");
    const randomhex = Math.random().toString(16).slice(2,8)
  
    allSections.forEach((item) => {
      item.style.backgroundColor = `#${randomhex}`;
    });
  });}
  
//4.4
//change SECTION-BG using for & hexadecimal number
// {sectionbg.addEventListener("click", (eo) => {
//       const allSections = document.querySelectorAll("section");
//       const randomhex = Math.random().toString(16).slice(2,8)
    
//       for (let i = 0; i < allSections.length; i++) {
//         const item = allSections[i];
//         item.style.backgroundColor = `#${randomhex}`;
//       }
//     });}

//for of & in & while & do while & for(;;)