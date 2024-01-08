// This for videos:
{
  let i = 0;
  addvideo.addEventListener("click", (eo) => {
    videoArr = [
      `<iframe id="myframe" src="https://www.youtube.com/embed/a0ei7qwuGQY?si=9piZAo72FAhRlVNv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" src="https://www.youtube.com/embed/MSckDOa7ad8?si=-Un52zCKPtPQl9us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" src="https://www.youtube.com/embed/fB8TyLTD7EE?si=U3SgSTUHrdgsiGc1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      `<iframe id="myframe" src="https://www.youtube.com/embed/8CFcV_fv810?si=2wBfVzGUarOd6VvL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>`,
    ];

    // this in ordered way
    iframeContainer.innerHTML = videoArr[i];
    i++;
    if (i > videoArr.length - 1) {
      i = 0;
    }

    // another way of if condition
    // if (i==videoArr.length)
    // {i=0}

    // in random way
    // iframeContainer.innerHTML =  videoArr[Math.floor(Math.random() * videoArr.length  )]
  });
}

// This for quotes:
{let ind = 0;
addquot.addEventListener("click", (eo) => {
  quArr = [
    `  <blockquote class="Etext" dir="rtl" lang="ar" >
    <p>
      لا تُبرر أخطائك بل إجلطهم بالمزيد
      &#128127; &#128514;
      </p>
      <footer>    شخص عادى </footer>
    </blockquote> `,

    `<blockquote class="Etext" dir="rtl" lang="ar" >
      <p>
    لا تتعلق بأحد فالناس ليست أشجاراً وانت لست قرداً
    &#128514;
    </p>
      <footer>  انسان مجروح  </footer>
  </blockquote> `,

    `<blockquote class="Etext" dir="rtl" lang="ar" >
    <p>
  الحياة ليست سباق  ف إهدى كده و relax  يا صاحبى
  &#128526;
  </p>
      <footer> شخص رايق  </footer>
  </blockquote> `,

    `<blockquote class="Etext" dir="rtl" lang="ar" >
    <p>
  الحياة إما مغامرة جريئة أو لا شي
  &#129505; &#128170;
  </p>
      <footer> شخص مغامر </footer>
  </blockquote> `,

    `<blockquote class="Etext" dir="rtl" lang="ar" >
    <p>
  اللى ملوش قلب ملوش رزق
  &#129505; &#128170;
  </p>
      <footer> شخص شجاع</footer>
  </blockquote> `,

    `<blockquote class="Etext" dir="rtl" lang="ar" >
    <p>
  الثقة بالنفس تصنع المُعجزات
  &#128521;
  </p>
      <footer>   شخص عارف قيمة نفسة  </footer>
  </blockquote> `,

    `<blockquote class="Etext" dir="rtl" lang="ar" >
    <p>الثقة بالنفس تصنع المُعجزات
      &#128521;
      </p>
      <footer>   شخص عارف قيمة نفسة  </footer>  
  </blockquote>`,
  ];

  // this in ordered way
  quoteContainer.innerHTML = quArr[ind];
  ind++;
  if (ind > quArr.length - 1) {
    ind = 0;
  }
});}
