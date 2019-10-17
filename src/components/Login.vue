<template>
    <div>
        <div  class="wrapper wrapper-login">
            <table class="table">
                <tbody v-for="item of tabla" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.login}}</td>
                    <td>{{item.url}}</td>
                </tbody>
            </table>
            <button @click="saveRegister" class="btn btn-success">Ver tabla</button>
            <div v-if="view === 'login'" class="container container-login animated fadeIn">
                <p class="text-center">
                    <img src="@/assets/img/leaf.svg" width="100px" alt="">
                </p>
                <!-- <h3 class="text-center">Iniciar sesion</h3> -->
                <form class="login-form">
                    <div class="form-group form-floating-label">
                        <input id="Correo electrónico" name="Correo electrónico" type="text" class="form-control input-border-bottom" required>
                        <label for="Correo electrónico" class="placeholder">Correo electrónico</label>
                    </div>
                    <div class="form-group form-floating-label">
                        <input id="password" name="password" type="password" class="form-control input-border-bottom" required>
                        <label for="password" class="placeholder">Contraseña</label>
                        <div class="show-password">
                            <i class="flaticon-interface"></i>
                        </div>
                    </div>
                    <div class="row form-sub m-0">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="rememberme">
                            <label class="custom-control-label" for="rememberme">No cerrar sesión</label>
                        </div>
                        
                        <a href="#" class="link float-right">¿ Olvidaste tu contraseña ?</a>
                    </div>
                    <div class="form-action mb-3">
                        <input class="btn btn-secondary btn-rounded btn-login" type="button" value="Iniciar sesion">
                        <!-- <a href="#" class="btn btn-secondary btn-rounded btn-login">Iniciar sesion</a> -->
                    </div>
                    <div class="login-account">
                        <span class="msg">¿ Aún no tengo una cuenta ?</span>
                        <a @click="goRegister" href="#" id="show-signup" class="link"> Regístrate</a>
                    </div>
                </form>
            </div>

            <div v-else-if="view == 'register'" class="container container-signup animated fadeIn">
                <p class="text-center">
                    <img src="@/assets/img/leafs.svg" width="100px" alt="">
                </p>
                <h3 class="text-center">Regístrate</h3>
                <div class="login-form">
                    <div class="form-group form-floating-label">
                        <input  id="id" name="id" type="text" class="form-control input-border-bottom" required>
                        <label for="id" class="placeholder">Número de Identificación</label>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group form-floating-label">
                                <input  id="nombre1" name="nombre1" type="text" class="form-control input-border-bottom" required>
                                <label for="nombre1" class="placeholder">Primer Nombre</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-floating-label">
                                <input  id="nombre2" name="nombre2" type="text" class="form-control input-border-bottom" required>
                                <label for="nombre2" class="placeholder">Segundo Nombre</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-floating-label">
                                <input  id="apellido1" name="apellido1" type="text" class="form-control input-border-bottom" required>
                                <label for="apellido1" class="placeholder">Primer Apellido</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-floating-label">
                                <input  id="apellido2" name="apellido2" type="text" class="form-control input-border-bottom" required>
                                <label for="apellido2" class="placeholder">Segundo Apellido</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group form-floating-label">
                        <input  id="email" name="text" type="email" class="form-control input-border-bottom" required>
                        <label for="email" class="placeholder">Email</label>
                    </div>
                    <div class="form-group form-floating-label">
                        <input  id="password" name="password" type="password" class="form-control input-border-bottom" required>
                        <label for="password" class="placeholder">Contraseña</label>
                        <div class="show-password">
                            <i class="flaticon-interface"></i>
                        </div>
                    </div>
                    <div class="form-group form-floating-label">
                        <input  id="confirmpassword" name="confirmpassword" type="password" class="form-control input-border-bottom" required>
                        <label for="confirmpassword" class="placeholder">Confirmar Contraseña</label>
                        <div class="show-password">
                            <i class="flaticon-interface"></i>
                        </div>
                    </div>
                    <div class="row form-sub m-0">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" name="agree" id="agree">
                            <label class="custom-control-label" for="agree">Acepto los terminos y condiciones.</label>
                        </div>
                    </div>
                    <div class="form-action">
                        <a @click="goLogin" href="#" id="show-signin" class="btn btn-danger btn-rounded btn-login mr-3">Cancelar</a>
                        <a href="#" class="btn btn-secondary btn-rounded btn-login">Regístrate</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import store from '@/store'

export default {
  name: 'login',
  store,
  data (){
      return{
          view: 'login'
      }
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState(['tabla']),
  },
  methods: {
    goRegister: function() {
      this.view = 'register'
    },
    goLogin: function() {
      this.view = 'login'
    },
    ...mapActions(['saveRegister'])
  }
}
</script>