// stores/modules/counter.js
import { defineStore } from 'pinia';
import { ref, computed, Ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count: Ref<number> = ref(0);
    const isOpen = ref(false)
    const isOpenPhoto = ref(false)
    const wallID: Ref<number> = ref(0)
    function increment() {
        count.value++;
    }
    function changeWallID(id: number) {
        wallID.value = id
    }
    function changeIsOpen(bool: boolean) {
        isOpen.value = bool
    }

    return { isOpen, count, increment, changeIsOpen, changeWallID, wallID, isOpenPhoto };

});
export const useCounterStore2 = defineStore('counter2', {

    state: () => {
        return {
            count: 0,
        }
    },
    getters: {},
    actions: {
        increment() {
            this.count++;
        }
    },

});
