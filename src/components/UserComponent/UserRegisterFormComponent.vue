<template>
  <div>
    <div class="DivUserRegisterForm">
      <form @submit.prevent="RegisterUserEvent" class="UserRegisterForm">
        <div class="InputsGroup">
          <TextInputComponent
            InputTitle="Nombre"
            IdInput="UserName"
            class="InputForm"
            @UpdateInputValue="UpdateName"
          />
          <TextInputComponent
            InputTitle="Apellido"
            IdInput="UserLastName"
            class="InputForm"
            @UpdateInputValue="UpdateLastName"
          />
        </div>
        <div class="InputsGroup">
          <TextInputComponent
            InputTitle="Nombre de Usuario"
            IdInput="UserUsername"
            class="InputForm"
            @UpdateInputValue="UpdateUserName"
          />
        </div>
        <div class="InputsGroup">
          <EmailInputComponent
            InputTitle="Correo"
            IdInput="Email"
            class="InputForm"
            @UpdateInputValue="UpdateEmail"
          />
          <PasswordInputComponent
            InputTitle="Contraseña"
            IdInput="Password"
            class="InputForm"
            @UpdateInputValue="UpdatePassword"
          />
        </div>
        <div class="InputsGroup">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'
import TextInputComponent from '../FormComponents/TextInputComponent.vue'
import EmailInputComponent from '../FormComponents/EmailInputComponent.vue'
import PasswordInputComponent from '../FormComponents/PasswordInputComponent.vue'
import RegisterUserService from '../../Services/UserServices/RegistrationUserService'

let Name: Ref = ref('')
let LastName: Ref = ref('')
let UserName: Ref = ref('')
let Email: Ref = ref('')
let Password: Ref = ref('')

function UpdateName(UpdatedValue: String) {
  Name.value = UpdatedValue
}

function UpdateLastName(UpdatedValue: String) {
  LastName.value = UpdatedValue
}

function UpdateUserName(UpdatedValue: String) {
  UserName.value = UpdatedValue
}

function UpdateEmail(UpdatedValue: String) {
  Email.value = UpdatedValue
}

function UpdatePassword(UpdatedValue: String) {
  Password.value = UpdatedValue
}

const AuthUser = async () => {
  const Auth = new RegisterUserService()
  const success = await Auth.RegisterUser(
    Name.value,
    LastName.value,
    UserName.value,
    Email.value,
    Password.value
  )
  if (success) {
    alert('Yeiiii')
  } else {
    alert('Chale :(')
  }
}
const RegisterUserEvent = () => {
  AuthUser()
}
</script>

<style scoped>
.DivUserRegisterForm {
  width: 700px;
  height: 500px;
}

.UserRegisterForm {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.InputsGroup {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.InputForm {
  width: 90%;
}
</style>
