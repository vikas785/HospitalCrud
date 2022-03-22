const initialState = [
    {
        id:1,
        name:"Abc",
        email:"abc@g.com",
        number:1111111111
    },
    {
        id:2,
        name:"def",
        email:"def@g.com",
        number:1111111112
    }
];

const patientReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_PATIENT":
            state= [...state, action.payload]
            return state;
        case "UPDATE_PATIENT":
            const updateState = state.map((patient)=>
                patient.id === action.payload.id ? action.payload : patient
            )
            state= updateState
            return state;
        case "DELETE_PATIENT":
            const filterPatients = state.filter( (patient) =>
                patient.id !== action.payload && patient
            )
            state = filterPatients
            return state;

        default:
            return state;
    }

};

export default patientReducer