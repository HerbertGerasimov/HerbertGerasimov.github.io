document.addEventListener("DOMContentLoaded", function () {
  // Erzeuge das <a-entity>-Element
  const particleGeneratorEntity = document.createElement('a-entity');


  // Setze die Attribute für die particle-generator-Komponente
  particleGeneratorEntity.setAttribute('particle-generator', {
    count: 3000,
    form: "cylinder",
    size: 0.003,
    speed: 1,
    color: '#ffffff',
    direction: 'top',
    lifespan: 3000,
    rotation: "0 0 0",
    material: "opacity: 0.2; transparent: true"

  });

  // Füge das <a-entity>-Element zum DOM hinzu
  document.querySelector('a-scene').appendChild(particleGeneratorEntity);






  AFRAME.registerComponent('boost-boost2', {
    init: function () {

      var boost = document.querySelector('#aktivateboost');
      var rocket = document.querySelector("#RK")


      this.el.addEventListener('click', function () {
        var currentBoostValue = boost.getAttribute('src');
        var sky = document.querySelector('#BG');
        var rotationY = 0;

        function spin() {
          if (rotationY < -90) {
            return;
          }
          rotationY -= 1;
          sky.setAttribute('rotation', rotationY + '0 ' + '0 ');
          console.log(currentBoostValue)
        }

        console.log(currentBoostValue);

        if (currentBoostValue === '#boost') {
          boost.setAttribute('src', '#boost2');
          rocket.setAttribute("volume", "1");
          console.log(rocket);

          setInterval(spin, 16);

        } else if (currentBoostValue === '#boost2') {
          boost.setAttribute('src', '#boost');
          rocket.setAttribute("volume", "0");
        }
      });

    }
  });

  AFRAME.registerComponent('pause-play', {
    init: function () {
      var myVideo = document.querySelector('#VideoInter');
      var videoControls = document.querySelector('#videoControls');
      myVideo.pause();



      this.el.addEventListener('click', function () {
        if (myVideo.paused) {
          myVideo.play();
          videoControls.setAttribute('src', '#pause');
          console.log("Play");
        } else {
          myVideo.pause();
          videoControls.setAttribute('src', '#play');
          console.log("Pause");
        }
      });
    }
  });

});

