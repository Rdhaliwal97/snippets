const notificationSidebar = document.querySelector('#notification .notificationSidebar'),
  notificationIcon = document.querySelector('#notification .notificationIcon'),
  notificationCrossBtn = document.querySelector('#notification .notificationCross');

function showNotification(obj = {}) {
  document.querySelector('#notification .notificationTitle').textContent = obj.title || 'notification';
  document.querySelector('#notification .notificationMessage').textContent = (obj.msg && obj.msg.length > 80) ? obj.msg.substring(0, 80) + '...' : obj.msg || 'error while displaying notification';
  if (obj.type == 'success') {
    notificationSidebar.style.backgroundColor = 'green';
    notificationIcon.style.backgroundColor = 'green';
    notificationIcon.innerHTML = '&#x2714;';
  } else if (obj.type == 'warning') {
    notificationSidebar.style.backgroundColor = 'yellow';
    notificationIcon.style.backgroundColor = 'yellow';
    notificationIcon.innerHTML = '&#33;';
  } else {
    notificationSidebar.style.backgroundColor = 'blue';
    notificationIcon.style.backgroundColor = 'blue';
    notificationIcon.innerHTML = '&#8505;';
  }
  document.querySelector('#notification').style.visibility = 'initial';
  if (obj.duration) {
    notification.animate([
      { opacity: 1 },
      { opacity: .9 },
      { opacity: .8 },
      { opacity: .7 },
      { opacity: .6 },
      { opacity: .5 },
      { opacity: .4 },
      { opacity: .3 },
      { opacity: .2 },
      { opacity: .1 },
      { opacity: 0 }
    ], {
      easing: 'ease-out',
      duration: obj.duration,
      iterations: 1
    });
  }
}

notificationCrossBtn.addEventListener('click', () => {
  document.querySelector('#notification').style.visibility = 'hidden'
});