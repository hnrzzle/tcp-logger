const app = require('../lib/app');
const net = require('net');
const assert = require('assert');
// const serverStart = require('../server');

describe('e2e test', () => {

    const PORT = 15678;

    beforeEach(done => {
        app.listen(PORT, done);
    });

    let client1 = null;
    beforeEach(done => {
        client1 = net.connect(PORT, () => {
            console.log('new connection on ', PORT);
            client1.setEncoding('utf8');
            done();
        });
    });

    afterEach (() => {
        app.close();
    });

    afterEach(() => {
        client1.destroy();
    });

    it('server connected', () => {
        const message = 'hello there';
        client1.on('data', data => {
            console.log('stuff recieved', data);
        });
        
        
        client1.write('tacos');
    });

});