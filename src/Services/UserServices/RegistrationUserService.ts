import { type Ref, ref } from 'vue'

class RegisterUserService {
  private error: Ref<string>
  constructor() {
    this.error = ref('')
  }
  getError(): Ref<string> {
    return this.error
  }
  async RegisterUser(
    Name: String,
    LastName: String,
    Username: String,
    Email: String,
    Password: String
  ) {
    try {
      console.log(Name, LastName, Username, Email, Password)
      const res = await fetch('http://127.0.0.1:7000/User/Save', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          nameUser: Name,
          lastNameUser: LastName,
          userNameUser: Username,
          emailUser: Email,
          passwordUser: Password,
          registerDateUser: 'hoy',
          requestsUser: 'cero',
          idRoleUser: {
            idRole: 1,
            nameRole: 'Usuario',
            permissionsRole: []
          },
          idUserStateUser: {
            idUserState: 1,
            nameUserState: 'Activo'
          }
        })
      })
      const response = await res.json()
      if ('errors' in response) {
        console.log(response)
        this.error.value = 'Login Failed'
        return false
      } else {
        console.log(response)
        return true
      }
    } catch (error) {
      this.error.value = 'Login Failed'
      return false
    }
  }
}

export default RegisterUserService
