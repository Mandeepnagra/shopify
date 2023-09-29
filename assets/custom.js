  var inView = false;
  var i = 0;

  function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)

      );
  }
  
  const counterBlock = document.querySelector('#counter');
  document.addEventListener('scroll', function () {
    if(isInViewport(counterBlock)){
       inView = true;
    }
    if(inView == true && i == 0){
      const counters = document.querySelectorAll('.counter_number');
      var count = 0;
      var speed = 1;
      for (let n of counters) {
        const updateCount = () => {
            const target = +n.getAttribute('data-target');
            const divider = 5000;
            ++count;
            ++i;
            if (count < target) {
                n.innerText = Math.ceil(count);
                setTimeout(updateCount, speed);
            } else {
                n.innerText = target;
            }
        };
        updateCount();
      } 
    }
  });
  

  
