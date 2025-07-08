AFRAME.registerComponent('particle-generator', {
    schema: {
        count: { default: 100 },
        form: { default: "sphere" },
        size: { default: 0.1 },
        speed: { default: 1.0 },
        color: { default: '#ffffff' },
        direction: { default: 'bottom' },
        length: { default: 5 },
        lifespan: { default: 5000 },
        rotation: { default: '0 0 0' },
        material: { default: "opacity: 1; transparent: true" },
        scale: { default: "1 1 1" }
    },

    init: function () {
        this.generatedParticles = 0;
        this.generateParticles();
    },

    generateParticles: function () {
        const { count, form, size, speed, color, direction, length, lifespan, rotation, material, scale } = this.data;

        for (let i = 0; i < count && this.generatedParticles < count; i++, this.generatedParticles++) {
            const particle = document.createElement('a-entity');
            const position = this.getRandomPosition(direction);

            particle.setAttribute('geometry', { primitive: form, radius: size });
            particle.setAttribute('material', { color: color });
            particle.setAttribute('position', position);
            particle.setAttribute('rotation', rotation); // Set rotation
            particle.setAttribute('material', material);
            particle.setAttribute('scale', scale);
            this.el.appendChild(particle);

            const animationStartDelay = Math.random() * 5000;
            particle.setAttribute('animation__position', {
                property: 'position',
                to: this.getDestination(position, direction, length),
                dur: length * speed * 1000,
                easing: 'linear',
                loop: false,
                delay: animationStartDelay
            });

            particle.addEventListener('animationcomplete', () => {
                this.el.removeChild(particle);
                this.generatedParticles--;
                this.generateParticles();
            });

            setTimeout(() => {
                this.el.removeChild(particle);
                this.generatedParticles--;
                this.generateParticles();
            }, lifespan + animationStartDelay);
        }
    },

    getRandomPosition: function (direction) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10;

        switch (direction) {
            case 'bottom':
                return `${x} ${y - 25} ${z}`;
            case 'top':
                return `${x} ${y + 25} ${z}`;
            case 'front':
                return `${x} ${y} ${z - 50}`;
            default:
                return `${x} ${y} ${z}`;
        }
    },

    getDestination: function (position, direction, length) {
        const [x, y, z] = position.split(' ').map(parseFloat);

        switch (direction) {
            case 'bottom':
                return `${x} ${y + 75} ${z}`;
            case 'top':
                return `${x} ${y - 50} ${z}`;
            case 'front':
                return `${x} ${y} ${z + 100}`;
            default:
                return position;
        }
    }
})
