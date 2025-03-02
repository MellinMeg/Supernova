import gsap from "gsap";

export function setupClientHeaderQuotes() {
  const quotes = document.querySelectorAll(".HeaderQuotes__Quote");

  if(quotes) {  
    let index = 0;
    
    quotes.forEach((slide, i) => {
      if (i !== 0) {
          gsap.set(slide, { y: "100%", opacity: 0 });
      }
  });
  
  function nextSlide() {
      const currentSlide = quotes[index];
      index = (index + 1) % quotes.length;
      const nextSlide = quotes[index];

      gsap.to(currentSlide, { y: "-100%", opacity: 0, duration: 1 });
      gsap.fromTo(nextSlide, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1 });
  }
  
  setInterval(nextSlide, 3000);
  }
}

setupClientHeaderQuotes();
