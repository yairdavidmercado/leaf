<template>
    <div>
        <div  class="wrapper wrapper-login">
            <div v-if="view === 'login'" class="container container-login animated fadeIn">
                <p class="text-center">
                    <img src="@/assets/img/leaf.jpg" width="100px" alt="">
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
                <h3 class="text-center">Sign Up</h3>
                <div class="login-form">
                    <div class="form-group form-floating-label">
                        <input  id="fullname" name="fullname" type="text" class="form-control input-border-bottom" required>
                        <label for="fullname" class="placeholder">Fullname</label>
                    </div>
                    <div class="form-group form-floating-label">
                        <input  id="email" name="email" type="email" class="form-control input-border-bottom" required>
                        <label for="email" class="placeholder">Email</label>
                    </div>
                    <div class="form-group form-floating-label">
                        <input  id="passwordsignin" name="passwordsignin" type="password" class="form-control input-border-bottom" required>
                        <label for="passwordsignin" class="placeholder">Password</label>
                        <div class="show-password">
                            <i class="flaticon-interface"></i>
                        </div>
                    </div>
                    <div class="form-group form-floating-label">
                        <input  id="confirmpassword" name="confirmpassword" type="password" class="form-control input-border-bottom" required>
                        <label for="confirmpassword" class="placeholder">Confirm Password</label>
                        <div class="show-password">
                            <i class="flaticon-interface"></i>
                        </div>
                    </div>
                    <div class="row form-sub m-0">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" name="agree" id="agree">
                            <label class="custom-control-label" for="agree">I Agree the terms and conditions.</label>
                        </div>
                    </div>
                    <div class="form-action">
                        <a @click="goLogin" href="#" id="show-signin" class="btn btn-danger btn-rounded btn-login mr-3">Cancel</a>
                        <a href="#" class="btn btn-primary btn-rounded btn-login">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data (){
      return{
          view: 'login'
      }
  },
  props: {
    msg: String
  },
  methods: {
    goRegister: function() {
      this.view = 'register'
    },
    goLogin: function() {
      this.view = 'login'
    }
  }
}
</script>