'use strict'
const chai = require('chai')
const expect = chai.expect

const crm = require('../control/CrmInput')
const config = require('../config/config')

describe('Check Job class', async function() {
    it('Check getProductById', async function() {
        const product = await crm.getProductById(1)
        console.log(product)
        expect(product).to.be.an('array')
    })
})