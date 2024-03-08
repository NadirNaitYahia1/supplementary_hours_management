import { proxy, useSnapshot } from 'valtio'

const state = proxy({ 
    currentPage: 2
})

export default state