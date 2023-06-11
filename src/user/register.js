import "./Register.css";

import React from 'react';

const Register = () => {
    return (
        <div className="register">
            <h1>Registrarse</h1>
                <form method="get" action="javascript: void(0);" id="login-form" className="register-form" autocomplete="off" role="main">
                    <h1 class="a11y-hidden">Login Form</h1>
                    <div>
                    <label class="label-name">
                        <input type="name" class="text" name="name" placeholder="Nombre" tabindex="1" required />
                        <span class="required">Nombre</span>
                    </label>
                    <label class="label-last">
                        <input type="name" class="text" name="last" placeholder="Apellido" tabindex="1" required />
                        <span class="required">Apellido</span>
                    </label>
                    <label class="label-alias">
                        <input type="name" class="text" name="alias" placeholder="Alias" tabindex="1" required />
                        <span class="required">Alias</span>
                    </label>
                    </div>
                    <input type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
                    <label class="label-show-password" for="show-password">
                    <span>Show Password</span>
                    </label>
                    <div>
                    <label class="label-password">
                        <input type="text" class="text" name="password" placeholder="Password" tabindex="2" required />
                        <span class="required">Contraseña</span>
                    </label>
                    </div>
                    <input type="submit" value="Log In" />
                    <div class="email">
                   </div>        
                </form>
        </div>
    );
}

export default Register;
