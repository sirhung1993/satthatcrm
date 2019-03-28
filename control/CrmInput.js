'use strict'
const config = require('../config/config')
const common = require('../config/common')
const schema = require('../config/schema')
const crm = require('../common/dbPool')
const moment = require('moment')

class CrmInput {
    constructor() {
        this.crm = crm.CRM.pool
        this.product = schema.Products
        this.productColumns = schema.getColumnsInArr(schema.Products.columns)
        this.customer = schema.Customers
        this.customerColumns = schema.getColumnsInArr(schema.splitPattern)
        this.status = schema.Status
        this.reason = schema.Reason
        this.contact = schema.Contacts
    }

    getProductById(id) {
        const query = `
        SELECT * FROM ${schema.Products.tableName}
        WHERE Id = ${this.product.Id}
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

    insertCustomer(Name, Phone, Gender
        , date = new moment().format(config.dateFormat)
        , status = this.status.types.Undef
        , reason = this.reason.types.WantBuy
        , product = this.product.types.RAVEN) {
        const query = `
        INSERT INTO ${schema.Customers.tableName} (
            ${this.customer.Name},
            ${this.customer.Phone},
            ${this.customer.Gender},
            ${this.customer.createdAt},
            ${this.customer.status},
            ${this.customer.reason},
            ${this.customer.Product}
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `
        // return query
        return this.crm.query(query, [Name, Phone, Gender, date, status, reason, product])
            .then(rows => {
                return rows
            }).catch(err => {
                console.error(err)
                return err
            })
    }

    insertContact(Name, Phone, Add, source, medium, content) {
       const query = `
        INSERT INTO ${this.contact.tableName}
            (
                ${this.contact.Name},    
                ${this.contact.Phone},    
                ${this.contact.Address},    
                ${this.contact.sourceId},    
                ${this.contact.medium},    
                ${this.contact.content}    
            )
        VALUES (?, ?, ?, ?, ?, ?)
       ` 
    //    console.log(query)
       return this.crm.query(query, [Name, Phone, Add, source, medium, content])
    }

}

module.exports = new CrmInput()