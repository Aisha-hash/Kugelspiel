'use strict';

import { WebSocketServer } from 'ws';
import helpers from './helpers.js';
import settings from './settings.js';

// Klassen
import Player from './classes/Player.js'

// Websocket-Server vorbereiten. Wird in init gestartet
let wsServer;

const startWSEventListeners = () => {
    wsServer.on('listening', () => console.log('Websocket ist bereit'));

    wsServer.on('connection', socket => {
        let id = helpers.createID(settings.players);
        socket.id = id;

        // ID an Client senden
        socket.send(JSON.stringify({
            type: 'updateID',
            payload: { id }
        }))

        // Player mit ID anlegen
        let player = new Player({ id, socket });
        settings.players.push(player);

        // Auf Unterbrechen der Verbindung reagieren
        socket.on('close', () => {
            settings.players = settings.players.filter(p => p != player);
        })

    })

}

const updateClients = () => {
    // Zu übertragende Daten minimieren
    let payload = settings.players.map(player => {
        return {
            id: player.id,
            posX: player.posX,
            posY: player.posY,
            color: player.color
        }
    })

    wsServer.clients.forEach(socket => {
        socket.send(JSON.stringify({
            type: 'updateClient',
            payload
        }))
    })
}

export default {
    init() {
        return new Promise(resolve => {
            wsServer = new WebSocketServer({ port: 8080 });
            startWSEventListeners();

            setInterval(updateClients, 30);

            resolve();

        })
    }
}