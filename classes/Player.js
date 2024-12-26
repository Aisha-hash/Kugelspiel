'use strict';

import helpers from '../helpers.js';

class Player {
    constructor({ id = null, socket = null }) {
        Object.assign(this, { id, socket });

        this.posX = Math.random();
        this.posY = Math.random();

        this.color = `hsl(${helpers.createNumber(0,360)},100%,50%)`;

        this.speed = .001;
    }
}

export default Player;