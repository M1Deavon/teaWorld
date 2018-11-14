var elShowed = false;

function callback(entry) {
  console.log(entry);

  if (entry.length > 0 && !elShowed) {
    var container = entry[0];
    var items = container.target.children;
		var ratio = Math.floor(container.intersectionRatio);
		
    if (ratio > 0) {
    	for (let i = 0; i < items.length; i++) {
      	items[i].className += (' ' + items[i].className + '-' + i);
      }
      elShowed = !elShowed;
    } 
  }
}

var config = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};

var observer = new IntersectionObserver(callback, config);
observer.observe(document.querySelector('#services'));