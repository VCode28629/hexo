'use strict';

function createComparisonFunction(orderby, order) {
    let cmp = function(a, b) {
        if(a[orderby] < b[orderby]) return -1;
        if(a[orderby] == b[orderby]) return 0;
        return 1;
    }
    return function(a, b) {
        return cmp(a, b) * order;
    }
}

module.exports = createComparisonFunction;
