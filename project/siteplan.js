document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById('currentyear').textContent = year;
    document.getElementById('lastdatemodified').textContent = document.lastModified;

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.nav-container');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Check if the counter has already been incremented during this session
    const incrementedFlag = sessionStorage.getItem("counterIncremented");
  
    if (!incrementedFlag) {
      // Retrieve the current count from localStorage or initialize it to 0
      let signupCount = localStorage.getItem("signupCount");
      signupCount = signupCount ? parseInt(signupCount, 10) : 0;
  
      // Increment the counter
      signupCount += 1;
  
      // Save the updated count back to localStorage
      localStorage.setItem("signupCount", signupCount);
  
      // Mark the counter as incremented in this session
      sessionStorage.setItem("counterIncremented", "true");
    }
  
    // Display the current count on the page
    const counterDisplay = document.getElementById("signupCounter");
    const signupCount = localStorage.getItem("signupCount") || 0;
    counterDisplay.textContent = `Signups Completed: ${signupCount}`;
  });