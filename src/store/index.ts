// stores/index.ts
// import { createPinia } from 'pinia';
import { useCounterStore, useCounterStore2 } from './modules/counter';
import { useUserStore } from './modules/user';

export default function useStore() {
    return {
        // 管理两个模块
        counter: useCounterStore(),
        user: useUserStore(),

    }
}

// pinia.use(useCounterStore);

// export default pinia;
