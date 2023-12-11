const toggleReducer = (state,action) => {
    switch(action.type){
        case 'OPEN_TOGGLE': 
        return {
            ...state,toggle: !state.toggle
        }
        case 'GET_TOGGLE': 
        return {
            toggle: state.toggle
        }
        case 'NIGHT_MODE':
            return{
                ...state,nightmode : !state.nightmode
            }
    }
  
} 

export default toggleReducer 