# VForm

## Базовое использование
Компонент формы позволяет валидировать данные формы, помогая находить и исправлять ошибки.

```vue
<script lang="ts" setup>
  import {
    type IVFormRules,
    type IVFormSubmitEvent,
    VForm,
    VFormItem,
    VInput,
    VRadioGroup,
    VRadio,
    VCheckboxGroup,
    VCheckbox,
    VButton,
    defineFormRules
  } from 'vau';
  import { ref } from 'vue';
  import { z } from 'zod';

  interface FormModel {
    name: string;
    gender: string;
    email: string;
    message: string;
    hobbies: Array<string>;
    policy: boolean
  }

  const model = ref<FormModel>({
    name: '',
    gender: '',
    email: '',
    message: '',
    hobbies: [],
    policy: false
  });

  const rules = defineFormRules<FormModel>({
    name: z.string().nonempty({
      error: 'Поле обязательно для заполнения'
    }),
    gender: z.string().nonempty({
      error: 'Поле обязательно для заполнения'
    }),
    email: z.email({
      error: 'Не верный формат email адреса'
    }),
    message: z.string().nonempty({
      error: 'Поле обязательно для заполнения'
    }),
    hobbies: z.array(z.string()).nonempty({
      error: 'Поле обязательно для заполнения'
    }),
    policy: z.literal(true, {
      error: 'Поле обязательно для выбора'
    })
  });

  function handleSubmit ({ isValid, reset }: IVFormSubmitEvent) {
    if (isValid) {
      console.log('Валидация прошла успешно');

      reset();
    } else {
      console.log('Валидация не прошла');
    }
  }
</script>

<template>
  <v-form
    v-model="model"
    :rules="rules"
    @submit="handleSubmit"
    v-slot="{ isValid }"
  >
    <v-form-item 
      title="Имя"
      name="name"
    >
      <v-input v-model="model.name"/>
    </v-form-item>

    <v-form-item 
      title="Email"
      name="email"
    >
      <v-input
        v-model="model.email"
        native-type="email"
      />
    </v-form-item>

    <v-form-item 
      title="Выберите пол"
      name="gender"
    >
      <v-radio-group direction="vertical">
        <v-radio
          v-model="model.gender"
          value="male"
        >
          Мужчина
        </v-radio>

        <v-radio
          v-model="model.gender"
          value="female"
        >
          Женщина
        </v-radio>
      </v-radio-group>
    </v-form-item>

    <v-form-item 
      title="Увлечения"
      name="hobbies"
    >
      <v-checkbox-group direction="vertical">
        <v-checkbox
          v-model="model.hobbies"
          value="js"
        >
          JS
        </v-checkbox>

        <v-checkbox 
          v-model="model.hobbies"
          value="go"
        >
          GO
        </v-checkbox>

        <v-checkbox
          v-model="model.hobbies"
          value="php"
        >
          PHP
        </v-checkbox>

        <v-checkbox
          v-model="model.hobbies"
          value="node.js"
        >
          Node.js
        </v-checkbox>
      </v-checkbox-group>
    </v-form-item>

    <v-form-item 
      title="Сообщение"
      name="message"
    >
      <v-input
        v-model="model.message"
        type="textarea"
      />
    </v-form-item>

    <v-form-item name="policy">
      <v-checkbox v-model="model.policy">
        Согласие на обработку данных
      </v-checkbox>
    </v-form-item>

    <v-button 
      type="submit" 
      :disabled="!isValid"
    >
      Отправить
    </v-button>
  </v-form>
</template>
```

## API

### Свойства
| Имя                     | Описание                                     | Тип                                | Значения | Значение по умолчанию | Обязательно | 
|-------------------------|----------------------------------------------|------------------------------------|----------|-----------------------|-------------|
| `v-model`               | Модель данных                                | `IVFormModel`                      | —        | `undefined`           | `true`      |
| `rules`                 | Правила валидации формы                      | `IVFormRules`                      | —        | `undefined`           | `false`     |
| `disabled`              | Блокировка формы и всех полей, кнопок внутри | `boolean`                          | —        | `false`               | `false`     |
| `scrollToError`         | Скролл к полю с ошибкой валидации            | `boolean`, `ScrollIntoViewOptions` | —        | `undefined`           | `false`     |

### Слоты
| Имя       | Описание                          | Scope свойства         |
|-----------|-----------------------------------|------------------------|
| `default` | Настроить содержимое по умолчанию | `{ isValid: boolean }` |

### События
| Имя      | Описание               | Параметры           |
|----------|------------------------|---------------------|
| `submit` | Событие отправки формы | `IVFormSubmitEvent` |

### Методы
| Имя             | Описание                                                                                                       | Параметры         | Возвращаемое значение | 
|-----------------|----------------------------------------------------------------------------------------------------------------|-------------------|-----------------------|
| `validate`      | Запустить валидирование формы. Если передан флаг `silent` равный `true`, то валидация не вызовет вывод ошибок  | `silent: boolean` | `Promise<boolean>`    |
| `clearValidate` | Очистить валидацию формы                                                                                       | —                 | —                     |
| `reset`         | Сбросить значения модели формы к изначальным                                                                   | —                 | —                     |
