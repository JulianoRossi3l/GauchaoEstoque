import { supabase } from './supabaseClient.js';

export async function salvarFornecedor(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dados = Object.fromEntries(formData.entries());

    const { error } = await supabase.from('fornecedores').insert([dados]);

    if (error) {
        alert("Erro ao salvar: " + error.message);
    } else {
        alert("Fornecedor cadastrado!");
        location.reload();
    }
}
