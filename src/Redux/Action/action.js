import { type } from "@testing-library/user-event/dist/type"

const increment = ()=>{
    type: 'INCREMENT'
}

const decrement = ()=>{
    type: 'DECREMENT'
}

export {increment, decrement}