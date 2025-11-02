<script setup lang="ts">
  import { VForm, VFormItem, type IVFormRules, type IVFormInstance, VButton, VCheckbox, VCheckboxGroup, VInput, VInputNumber } from '@vau/ui';
  import '@vau/themes/src/index.scss';
  import { ref, useTemplateRef } from 'vue';
  import * as z from 'zod';

  const form = useTemplateRef<IVFormInstance>('form');

  type FormModel = {
    name: string;
    age: number
    skills: Array<string>;
  };

  const model = ref<FormModel>({
    name: '',
    age: 0,
    skills: []
  });

  const rules: IVFormRules<FormModel> = {
    name: z.string().min(10),
    age: z.number().min(18),
    skills: z.array(z.string()).min(1),
  };

  async function handleSubmit () {
    const isValid = await form.value?.validate();

    console.log(isValid);
  }
</script>

<template>
  <v-form
    ref="form"
    v-slot="{ isValid }"
    v-model="model"
    :rules="rules"
    @submit.prevent="handleSubmit"
  >
    <v-form-item
      prop="name"
      title="Имя"
    >
      <v-input v-model="model.name"/>
    </v-form-item>

    <v-form-item
      prop="age"
      title="Возраст"
    >
      <v-input-number v-model="model.age"/>
    </v-form-item>

    <v-form-item
      v-slot="{ validationStatus, isRequired }"
      prop="skills"
      title="Навыки"
    >
      {{ validationStatus }}
      isRequired: {{ isRequired }}

      <v-checkbox-group direction="vertical">
        <v-checkbox
          v-model="model.skills"
          value="js"
        >
          js
        </v-checkbox>

        <v-checkbox
          v-model="model.skills"
          value="css"
        >
          css
        </v-checkbox>

        <v-checkbox
          v-model="model.skills"
          value="php"
        >
          php
        </v-checkbox>

        <v-checkbox
          v-model="model.skills"
          value="go"
        >
          go
        </v-checkbox>
      </v-checkbox-group>
    </v-form-item>

    <v-button
      type="submit"
      :disabled="!isValid"
    >
      Отправить
    </v-button>
  </v-form>
</template>
