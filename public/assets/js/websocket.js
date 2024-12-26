'use strict';

import settings from './settings.js';
import render from './render.js';

const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', evt => { })

socket.addEventListener('message', evt => {
    let msg = JSON.parse(evt.data);
    // console.log(msg);

    if (msg.type == 'updateID') {
        settings.wsID = msg.payload.id
    } else if (msg.type == 'updateClient') {
        render.players(msg.payload)
    }

})