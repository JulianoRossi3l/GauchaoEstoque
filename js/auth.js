import { supabase } from './supabaseClient.js';

// Função de Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) alert("Erro: " + error.message);
        else window.location.href = 'dashboard.html';
    });
}

// Função para verificar sessão (Proteger páginas)
export async function verificarSessao() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session && !window.location.pathname.includes('index.html')) {
        window.location.href = 'index.html';
    }
    return session;
}

// ESTA É A FUNÇÃO QUE ESTAVA FALTANDO OU COM ERRO:
export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) alert("Erro ao sair");
    window.location.href = 'index.html';
}
