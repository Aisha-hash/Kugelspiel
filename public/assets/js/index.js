'use strict';

import './websocket.js'
import { elements } from './settings.js';
import render from './render.js';

const domMapping = () => {
    elements.spielfeld = document.querySelector('#spielfeld');
}

const init = () => {
    domMapping();
    render.init();
}

init();