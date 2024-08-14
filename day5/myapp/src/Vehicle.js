function reducer(state = { vehicle: '' }, action) {
    switch (action.type) {
        case "car": {
            return {
                vehicle: action.val
            }
        }
        case "bike": {
            return {
                vehicle: { id: 101, name: 'siyaram', email: 'ramsiya@yahoo.com' }
            }
        }
        default: {
            return {
                vehicle: "No Vehicle"
            }
        }
    }
}

export default reducer;