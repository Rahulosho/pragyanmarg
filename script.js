        // Number Animation for 2nd Div
        const counter = document.getElementById('studentsCounter');
        let count = 1;
        const target = 10239;
        const increment = Math.ceil(target / 100);

        const updateCounter = () => {
            count += increment;
            if (count > target) {
                count = target;
                clearInterval(counterInterval);
            }
            counter.textContent = count.toLocaleString();
        };

        const counterInterval = setInterval(updateCounter, 200);



        // quote animation
        const quotes = document.querySelector(".animate-text").children;
        const quotesLen = quotes.length;
        let currentIndex = 0;
      
        const textInTimer = 3000; // Time for the quote to stay visible
        const textOutTimer = 2800; // Time before the quote slides out
      
        function animateQuotes() {
          // Remove active classes from all quotes
          for (let i = 0; i < quotesLen; i++) {
            quotes[i].classList.remove("text-in", "text-out");
          }
      
          // Add "text-in" class to the current quote
          quotes[currentIndex].classList.add("text-in");
      
          // Add "text-out" class after a delay
          setTimeout(() => {
            quotes[currentIndex].classList.add("text-out");
          }, textOutTimer);
      
          // Move to the next quote after the animation
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % quotesLen; // Loop back to the first quote
            animateQuotes();
          }, textInTimer);
        }
      
        // Start the animation on page load
        window.onload = animateQuotes;



        // for testimonials 
        
        
