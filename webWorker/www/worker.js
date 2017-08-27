var i = 0; 
setInterval(function () {
  i = i + 1;
  postMessage(i);
}, 1000);