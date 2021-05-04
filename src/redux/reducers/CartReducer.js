const cartDefault = {
    bookingCombo: [
        { id: '01', name: 'Single', price: 80000, photo: '../../assets/img/97cathay_cineplexes.jpeg' },
        { id: '02', name: 'Couple', price: 100000, photo: '../../assets/img/popcorn.jpeg' },
        { id: '03', name: 'Groups', price: 120000, photo: '../../assets/img/download.jpeg' },
        { id: '04', name: 'Family', price: 150000, photo: '../../assets/img/download(1).jpeg' },
    ]
}
export const CartReducer = (state = cartDefault, action) => {
//     switch (action.type) {
//     //     case 'ADD_CART': {
//     //         const cartUpdate = [...state.cart];
//     //         let index = cartUpdate.findIndex(cartItem => cartItem.id === action.id);
//     //         if (index !== -1) {
//     //             cartUpdate[index].number += 1;
//     //         } else {
//     //             cartUpdate.push(action.cartItems)
//     //         }
//     //         state.cart = cartUpdate;
//     //         return { ...state }

//     //     } break;
//     //     case 'CHANGING_NUMBER': {
//     //         const cartUpdate = [...state.cart];
//     //         let index = cartUpdate.findIndex(cartItem = cartItem.id === action.id);
//     //         if (index !== -1) {
//     //             cartUpdate[index].number += action.number;
//     //             if (cartUpdate[index].number <= 0) {
//     //                 alert('The Number of the product is not allowed!')
//     //                 cartUpdate[index.number] -= action.number;
//     //             }
//     //         }
//     //         state.cart = cartUpdate;
//     //         return { ...state }
//     //     } break;
//     //     case 'DEL_ITEM': {
//     //         // const cartUpdate = [...state.cart];
//     //         // let index = cartUpdate.findIndex(cartItem = cartItem.id == action.id);
//     //         // cartUpdate.splice(index, 1);
//     //         // state.cart = cartUpdate;
//     //         // return { ...state };
//     //     }
//     // }
//     // return { ...state }
// }
}

