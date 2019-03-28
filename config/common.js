'use strict'
module.exports = {
    responseOk: (message) => {
        return {
            data : message
        }
    },
    responseErr: (message) => {
        return {
            error : message
        }
    },
    StatusCodes: {
        OK: 200,
        Accepted: 202,
        PartialSend: 206,
        InvalidLogin : 401,
        Forbiden: 403,
        InternalError: 500
    },
    UrlError: (responseCode) => {
        return `/maintenance/error/${responseCode}`
    },
    UrlLogin: (redirectUri) => {
        return 
    }
}
