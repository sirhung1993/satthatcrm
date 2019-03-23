'use strict'
const config = require('../config/config')
const schema = require('../config/schema')
const crm = require('../common/dbPool')

class CrmInput {
    constructor() {
        this.crm = crm.CRM.pool
        this.productColumns = schema.Products.columns.split(schema.splitPattern)
    }

    getProductById(id) {
        const query = `
        SELECT * FROM ${schema.Products.tableName}
        WHERE Id = ?
        `
        return this.crm
        .query(query, [id])
        .then(rows => {
            return rows
        }).catch(err => {
            console.error(err)
            return err
        })
    }

}

module.exports = new CrmInput()