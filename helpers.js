'use strict';

const helpers = {
    createNumber(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    },
    createID(coll) {
        // coll ist das Array, für welches die neue ID erzeugt wird
        // Wir gehen davon aus, dass in der coll nur Objekte liegen, die eine id als Attribut tragen
        let id = helpers.createNumber(0, 1e17).toString(36);

        while (coll.includes(id)) {
            id = helpers.createNumber(0, 1e17).toString(36);
        }

        return id;
    }
}

export default helpers;