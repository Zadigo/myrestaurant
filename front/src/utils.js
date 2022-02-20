var _ = require('lodash')

var getLastId = (items) => {
    var lastItem = _.last(items)
    if (_.isUndefined(lastItem)) {
        return 0
    } else {
        return lastItem.id
    }
}

export {
    getLastId
}
