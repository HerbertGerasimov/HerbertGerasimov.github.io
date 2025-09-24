document.addEventListener("DOMContentLoaded", function () {
  // Erzeuge das <a-entity>-Element
  const particleGeneratorEntity = document.createElement('a-entity');


  // Setze die Attribute für die particle-generator-Komponente
  particleGeneratorEntity.setAttribute('particle-generator', {
    count: 1000,
    form: "sphere",
    size: 0.01,
    speed: 2,
    color: '#ffffff',
    direction: 'front',
    lifespan: 5000,
    rotation: "0 0 0"
  });

  // Füge das <a-entity>-Element zum DOM hinzu
  document.querySelector('a-scene').appendChild(particleGeneratorEntity);


  var sky = document.querySelector('#BG');
  var rotationY = 0;

  console.log(sky)

  setInterval(function () {
    rotationY -= 0.05;
    sky.setAttribute('rotation', '0 ' + rotationY + ' 0');
  }, 16);


  AFRAME.registerComponent('boost-boost2', {
    init: function () {

      var boost = document.querySelector('#aktivateboost');
      var rocket = document.querySelector("#RK")


      this.el.addEventListener('click', function () {
        const particleGeneratorEntity2 = document.createElement('a-entity');
        var currentBoostValue = boost.getAttribute('src');

        if (currentBoostValue === '#boost') {
          boost.setAttribute('src', '#boost2');
          rocket.setAttribute("volume", "1")
          console.log(rocket);

          particleGeneratorEntity.setAttribute('particle-generator', {
            count: 1000,
            form: "cylinder",
            size: 0.005,
            speed: 0.5,
            color: '#ffffff',
            direction: 'front',
            lifespan: 5000,
            rotation: "0 -90 90"
          });

        } else if (currentBoostValue === '#boost2') {

          particleGeneratorEntity.setAttribute('particle-generator', {
            count: 1000,
            form: "sphere",
            size: 0.01,
            speed: 2,
            color: '#ffffff',
            direction: 'front',
            lifespan: 5000,
            rotation: "0 0 0",
          });
          boost.setAttribute('src', '#boost');
          rocket.setAttribute("volume", "0")
        }

        document.querySelector('a-scene').appendChild(particleGeneratorEntity2);
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

