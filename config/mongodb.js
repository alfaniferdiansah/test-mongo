const {MongoClient} = require('mongodb');

const url = 'mongodb://admin:admin@localhost:27017?authSource:admin';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect()
        console.log('koneksi mongodb success');
    }catch (e) {
        console.log(e);
    }
})();

const db = client.db('test')

module.exports = db
