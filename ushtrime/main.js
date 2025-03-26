function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});


  
  let timer;
  let countdownSeconds = 30;
  
  function startCountdown() {
   
    document.getElementById('startTimerBtn').disabled = true;
  
    timer = setInterval(function() {
      if (countdownSeconds <= 0) {
        clearInterval(timer);
        document.getElementById('timer').textContent = "Time's Up!";
      } else {
        countdownSeconds--;
        let minutes = Math.floor(countdownSeconds / 60);
        let seconds = countdownSeconds % 60;
        document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
    }, 1000);
  }
  

  document.getElementById('startTimerBtn').addEventListener('click', startCountdown);

  document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
  
    if (userName && userEmail) {
      document.getElementById('formResponse').textContent = `Thank you, ${userName}! We've received your email: ${userEmail}`;
      document.getElementById('userName').value = '';
      document.getElementById('userEmail').value = '';
    } else {
      document.getElementById('formResponse').textContent = 'Please fill in both fields.';
    }
  });

  document.getElementById('toggleModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    document.getElementById('toggleModeBtn').textContent = `Switch to ${currentMode} Mode`;
  });
  

  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  

  openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });
  

  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });