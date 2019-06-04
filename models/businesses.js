const db = require('./conn.js');

class Businesses {
    constructor(id, business, address, category){
        this.id = id;
        this.business = business;
        this.address = address;
        this.category = category;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from business`);
            console.log(response);
            return response;
        } catch(err) {
            return err.message;
        }
    }
    
    static async add(business, address, category) {
        const query = `INSERT INTO business (business, address, category) VALUES ('${business}', '${address}', '${category}') `;
        try {
            let response = await db.result(query);
            console.log(response)
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        };
    }
}

module.exports = Businesses;