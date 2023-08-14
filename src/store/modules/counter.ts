// stores/modules/counter.js
import { defineStore } from 'pinia';
import { ref, computed, Ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);

    function increment() {
        count.value++;
    }

    return { count, increment };

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
