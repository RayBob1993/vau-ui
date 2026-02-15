# VForm

Форма состоит из `v-input`, `v-radio`, `v-checkbox` т.д. С помощью формы вы можете собирать, проверять и отправлять данные.

## Базовое использование
Компонент формы позволяет валидировать данные формы, помогая находить и исправлять ошибки.

Просто добавьте свойство `rules` и директиву `v-model` для `v-form` компонента, опишите правила проверки и установите свойство `prop` для `v-form-item` в качестве определенного ключа указанного в объекте `rules`, который необходимо проверить. 
Дополнительную информацию см. в [async-validator](https://github.com/yiminghe/async-validator).

```vue
<script lang="ts" setup>
  import {
    type IVFormRules,
    type IVFormSubmitEvent,
    VForm,
    VFormItem,
    VInput,
    VRadio,
    VCheckbox,
    VButton
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

  const rules = ref<IVFormRules<FormModel>>({
    name: z.string(),
    gender: z.string(),
    email: z.email(),
    message: z.string()
  });

  function handleSubmit ({ isValid, reset }: IVFormSubmitEvent) {
    if (isValid) {
      console.log('Валидация прошла успешно');

      reset();
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
          GO
        </v-checkbox>

        <v-checkbox 
          v-model="model.hobbies"
          value="node.js"
        >
          GO
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
      <v-checkbox
        v-model="model.policy"
        label="Согласие на обработку данных"
      />
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

