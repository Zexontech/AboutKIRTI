function redirectOrStay() {
    var link = 'https://l.instagram.com/?u=http%3A%2F%2Fbit.ly%2Fkirtistemsago2023&e=AT0jFcQVyAeWl2fW_d7A-YMxFGvKnMe0yKAGX-vOiMK6ripseB9QtxTut2OCP_wtsjUEfl-A2iFXYlJhqCv2wdE6Dw6TjtEm'; // replace with your link
    var confirmText = 'Continue ' + '?';
    var stayText = 'Stay on this page';
    var continueText = 'Continue to ' + link;
  
    if (confirm(confirmText)) {
      window.location.href = link;
    }
  }