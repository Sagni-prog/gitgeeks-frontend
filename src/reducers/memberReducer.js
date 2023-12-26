const memberReducer = (state,action) => {
    switch(action.type){
        case 'TOGGLE': 
           return {isOpen: !state.isOpen}
        case 'OPEN':
            return  {isOpen: true}
        case 'CLOSE':
            return  {isOpen: false}    
        case 'SET':
            return {isOpen : action.payload}
           
    }
}

export default memberReducer;