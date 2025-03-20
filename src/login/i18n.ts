/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        "pt": {
            "usernameOrEmail": "",
            "loginTitle": "Acesse sua conta", 
            "doLogIn": "Entrar",
            "username": "Usuário",
            "password": "Senha",
            "rememberMe": "Lembrar de mim",
            "doRegister": "Cadastre-se Agora",
            "noAccount": "Ainda não tem uma conta?",
            "loginAccountTitle": "Minha Conta",
            "identity-provider-login-label": "Ou entre com uma rede social",
            "doForgotPassword": "Esqueceu a senha?",
            "placeholderEmail": "SEU@EMAIL.COM"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
