import { type Ref, ref } from 'vue';

export type IUseToggle = [Ref<boolean>, (payload: boolean) => void, VoidFunction];

/**
 * @description `useToggle` — это пользовательский хук, который предназначен для управления состоянием булевой переменной с возможностью её переключения.
 *
 * @param {boolean} [initial=false] - Начальное значение состояния. По умолчанию false.
 *
 * @returns {IUseToggle} Массив, содержащий:
 * @returns {Ref<boolean>} state - Ссылка на текущее состояние (булевое значение).
 * @returns {Function} setState - Функция для установки значения состояния.
 * @returns {Function} toggleState - Функция для переключения значения состояния.
 *
 * @example
 * <template>
 *   <v-button @click="setState(false)">Скрыть</v-button>
 *   <v-button @click="setState(true)">Показать</v-button>
 *   <v-button @click="toggleState">Переключить</v-button>
 *
 *   <p v-if="state">Текст</p>
 * </template>
 *
 * <script lang="ts" setup>
 *   const [state, setState, toggleState] = useToggle();
 * </script>
 */
export function useToggle (initial: boolean = false): IUseToggle {
  const state = ref<boolean>(initial);

  function setState (value: boolean) {
    state.value = value;
  }

  function toggleState () {
    state.value = !state.value;
  }

  return [
    state,
    setState,
    toggleState
  ];
}
