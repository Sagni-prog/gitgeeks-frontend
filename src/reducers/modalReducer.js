const modalReducer = (state,action) => {
    switch(action.type){
        case "OPEN":
           return { isOpen: true }
        case "CLOSE":
            return { isOpen: false }
    }
}

export default modalReducer;