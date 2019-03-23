'use strict'
module.exports = {
    CRM : {
        host: (process.env.DB_HOST) ?  process.env.DB_HOST : 'localhost',
        port: (process.env.DB_PORT) ?  process.env.DB_PORT : '3306',
        database: (process.env.DB_DB) ?  process.env.DB_DB : 'test',
        user: (process.env.DB_USER) ?  process.env.DB_USER : 'tester',
        password: (process.env.DB_PASSWORD) ?  process.env.DB_PASSWORD : 'password',
        connectTimeout: (process.env.DB_TIMEOUT !== undefined) ? process.env.DB_TIMEOUT : 50000,
        connectionLimit: (process.env.DB_CONNECTION_LIMIT !== undefined) ? process.env.DB_CONNECTION_LIMIT : 8,
        rowsAsArray: (process.env.DB_OUTPUT_IS_ARRAY !== undefined) ?
        process.env.DB_OUTPUT_IS_ARRAY : false,
        timezone: (process.env.DB_TIMEZONE !== undefined) ? process.env.DB_TIMEZONE : 'local',
        dateStrings: true
    }
}