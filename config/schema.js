'use strict'
module.exports = {
    splitPattern: / *, */,
    getColumnsInArr: (str = '') => {
        return new String().split(this.splitPattern)
    },
    Products : {
        tableName: 'Products',
        columns: 'Id,Note',
        Id: 'Id',
        Note: 'Note',
        types: {
            Undef : 0,
            RAVEN : 1,
        }
    },
    Customers: {
        tableName: 'Creeds',
        columns: 'Id,ProductId,Name,Phone,GenderId,createdAt,statusId,reasonId',
        Id: 'Id',
        Product: 'ProductId',
        Name: 'Name',
        Phone: 'Phone',
        Gender: 'GenderId',
        createdAt: 'createdAt',
        status: 'statusId',
        reason: 'reasonId'
    },
    Gender: {
        tableName: 'Products',
        columns: 'Id,Note',
        types: {
            Undef: 0,
            Male: 1,
            Female: 2,
        }
    },
    Reason: {
        tableName: 'Reason',
        columns: 'Id,Note',
        types: {
            Undef: 0,
            NoBuy: 1,
            HavePhone: 2,
            WantBuy: 3,
            DidBuy: 4
        }
    },
    Status: {
        tableName: 'Status',
        columns: 'Id,Note',
        types: {
            Undef: 0,
            NoBuy: 1,
            HavePhone: 2,
            WantBuy: 3,
            DidBuy: 4
        }
    },
    Contacts: {
        tableName: 'Contacts',
        columns: 'Id,Name,Phone,Address,sourceId,medium,content,createdAt',
        Name: 'Name',
        Phone: 'Phone',
        Address: 'Address',
        sourceId: 'sourceId',
        medium: 'medium',
        content: 'content',
        createdAt: 'createdAt'
    }
}