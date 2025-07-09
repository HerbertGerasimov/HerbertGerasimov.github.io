document.addEventListener("DOMContentLoaded", function () {
  // Erzeuge das <a-entity>-Element
  const particleGeneratorEntity = document.createElement('a-entity');
  const particleGeneratorEntity2 = document.createElement('a-entity');


  // Setze die Attribute für die particle-generator-Komponente
  particleGeneratorEntity.setAttribute('particle-generator', {
    count: 100,
    form: "sphere",
    size: 0.2,
    speed: 3,
    color: '#ffffff',
    direction: 'bottom',
    lifespan: 10000,
    rotation: "0 0 0",
    material: "opacity: 0.2; transparent: true",
  });

  particleGeneratorEntity2.setAttribute('particle-generator', {
    count: 1000,
    form: "sphere",
    size: 0.04,
    speed: 1.5,
    color: '#479152',
    direction: 'bottom',
    lifespan: 5000,
    rotation: "0 0 0",
    material: "opacity: 0.2; transparent: true",
  });

  // Füge das <a-entity>-Element zum DOM hinzu
  document.querySelector('a-scene').appendChild(particleGeneratorEntity);
  document.querySelector('a-scene').appendChild(particleGeneratorEntity2);






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
