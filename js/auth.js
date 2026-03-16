import { supabase } from './supabaseClient.js';

const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Pegando os valores diretamente pelo ID
        const emailValue = document.getElementById('email').value;
        const passwordValue = document.getElementById('password').value;

        console.log("Tentando logar com:", emailValue);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: emailValue,
            password: passwordValue
        });

        if (error) {
            alert("Erro ao entrar: " + error.message);
            console.error(error);
        } else {
            console.log("Sucesso!", data);
            window.location.href = 'dashboard.html';
        }
    });
}
