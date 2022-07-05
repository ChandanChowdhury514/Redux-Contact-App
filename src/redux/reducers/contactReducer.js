const initialState = [
  { id: 0, 
    name:"Siva", 
    email: "siva@gmail.com", 
    phone: 459687123, 
    sales: 5,
  },
    //  { id: 0, name: "Panda", email: "panda@test.com", phone: 4567891230, sales: 10 },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_CONTACT":
      state = [...state, action.payload]
      return state;
      case "UPDATE_CONTACT":
        const updateState = state.map(contact => contact.id === action.payload. id? action.payload : contact);
        state = updateState;
        return state;
        case "DELETE_CONTACT":
          const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
          state = filterContacts;
          return state;
    default:
      return state;
  }
};


export default contactReducer;
