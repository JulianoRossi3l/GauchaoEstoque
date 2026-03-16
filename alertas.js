import { supabase } from './supabaseClient.js';

export async function gerarAlertas() {
    const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const hojeIndex = new Date().getDay();
    const hojeNome = diasSemana[hojeIndex];

    const { data: produtos } = await supabase
        .from('produtos')
        .select('*, fornecedores(nome, dia_pedido, telefone)');

    const alertas = [];

    produtos.forEach(p => {
        // Alerta por Quantidade
        if (p.quantidade_atual <= p.quantidade_minima) {
            alertas.push({
                tipo: 'CRÍTICO',
                mensagem: `${p.nome} está abaixo do mínimo!`,
                cor: 'red'
            });
        }

        // Alerta por Dia de Pedido
        if (p.fornecedores && p.fornecedores.dia_pedido.includes(hojeNome)) {
            alertas.push({
                tipo: 'PEDIDO HOJE',
                mensagem: `Hoje é dia de pedido para ${p.nome} (${p.fornecedores.nome})`,
                cor: 'blue'
            });
        }
    });

    return alertas;
}
