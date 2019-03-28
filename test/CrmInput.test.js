'use strict'
const chai = require('chai')
const expect = chai.expect

const crm = require('../control/CrmInput')
const config = require('../config/config')

describe('Check Job class', async function() {
    it('Check getProductById', async function() {
        const product = await crm.getProductById(1)
        // console.log(product)
        expect(product).to.be.an('array')
    })
    it('Check insertCustomer', async function() {
        const product = await crm.insertCustomer('tester', '0000000', 1, null, 0, 0)
        // console.log(product)
        expect(product).to.have.property('affectedRows')
        expect(product).to.have.property('insertId')
        expect(product).to.have.property('warningStatus')
    })
    it('Check insertContact', async function() {
        const product = await crm.insertContact('test', '123456789', 'test', 'test', 'test', 'test')
        // console.log(product)
        expect(product).to.have.property('affectedRows')
        expect(product).to.have.property('insertId')
        expect(product).to.have.property('warningStatus')
    })
})