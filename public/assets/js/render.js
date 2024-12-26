'use strict';

import settings, { elements } from './settings.js'

const render = {
    init() {
        let c = elements.spielfeld;
        c.width = window.innerWidth - 10;
        c.height = window.innerHeight - 10;

    },
    players(data) {
        let c = elements.spielfeld;
        let ctx = c.getContext('2d');

        ctx.clearRect(0, 0, c.width, c.height);

        data.forEach(player => {
            ctx.beginPath();

            if (player.id == settings.wsID) {
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'rgba(0,0,0,1)';
            } else {
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(0,0,0,0.5)';
            }
            
            ctx.fillStyle = player.color;

            ctx.arc(
                player.posX * c.width,
                player.posY * c.height,
                10,
                0,
                2 * Math.PI
            )

            ctx.fill();
            ctx.stroke();
        })
    }
}

export default render;