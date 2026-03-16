import { supabase } from './supabaseClient.js';

export async function carregarEstoque() {
    const { data: produtos, error } = await supabase
        .from('produtos')
        .select('*, categorias(nome), fornecedores(nome)');

    if (error) return console.error(error);

    const tabela = document.getElementById('corpoTabelaEstoque');
    tabela.innerHTML = '';

    produtos.forEach(p => {
        // Lógica de cores do Status
        let statusCor = 'bg-green-500'; // OK
        let statusTexto = 'Estoque OK';

        if (p.quantidade_atual <= p.quantidade_minima) {
            statusCor = 'bg-red-500'; // Crítico
            statusTexto = 'Abaixo do Mínimo';
        } else if (p.quantidade_atual <= p.quantidade_minima * 1.2) {
            statusCor = 'bg-yellow-500'; // Alerta
            statusTexto = 'Próximo ao Mínimo';
        }

        tabela.innerHTML += `
            <tr class="border-b hover:bg-gray-50">
                <td class="p-3">${p.nome}</td>
                <td class="p-3">${p.categorias?.nome || 'Sem categoria'}</td>
                <td class="p-3 font-bold">${p.quantidade_atual} ${p.unidade}</td>
                <td class="p-3 text-gray-500">${p.quantidade_minima} ${p.unidade}</td>
                <td class="p-3">
                    <span class="${statusCor} text-white text-xs px-2 py-1 rounded-full font-bold">
                        ${statusTexto}
                    </span>
                </td>
                <td class="p-3">
                    <button onclick="editarProduto('${p.id}')" class="text-blue-600 hover:underline">Editar</button>
                </td>
            </tr>
        `;
    });
}
