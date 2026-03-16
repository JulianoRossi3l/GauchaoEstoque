import { supabase } from './supabaseClient.js';

const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Tenta fazer o login no Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            alert("Erro ao entrar: " + error.message);
        } else {
            // Se logar com sucesso, salva a sessão e vai para o dashboard
            window.location.href = 'dashboard.html';
        }
    });
}

// Proteção de página: Se o usuário não estiver logado, redireciona para index.html
// (Coloque este trecho no topo de todos os seus arquivos .js das outras páginas)
export async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        window.location.href = 'index.html';
    }
    return session;
}
