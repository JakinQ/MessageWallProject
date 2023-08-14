import { defineStore } from 'pinia'
export const useUserStore = defineStore('couter', {
    state: () => {
        return {
            count: 11,
            money: 99999999
        }
    }
})
// export default useCounterStore