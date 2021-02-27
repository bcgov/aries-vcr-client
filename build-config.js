'use strict';

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join('src', 'assets', 'config.json');
const THEME_NAME = process.env.THEME || 'base';

function updateConfig() {
    let config = {};
    if (fs.existsSync(CONFIG_PATH)) {
        config = require('./' + CONFIG_PATH);
    }
    let result = {};
    for (let k in config) {
        let v = config[k];
        result[k] = v.replace(/\$[A-Z_]+|\$\{.+?\}/g, found => {
            found = found.substring(1);
            if (found[0] === '{') {
                found = found.substring(1, found.length - 1);
            }
            let foundval = '';
            let splitPos = found.indexOf('-');
            if (~splitPos) {
                foundval = found.substring(splitPos + 1);
                found = found.substring(0, splitPos);
            }
            if (found == 'THEME') {
                foundval = THEME_NAME;
            } else if (found in process.env && process.env[found] !== '') {
                foundval = process.env[found];
            }
            return foundval;
        });
    }
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(result));
    return result;
}

updateConfig();