import { logout } from './auth.js';

export function renderMenu() {
    // Evita renderizar o menu mais de uma vez
    if (document.querySelector('nav')) return;

    const nav = document.createElement('nav');
    nav.className = "w-64 bg-gray-900 text-white min-h-screen p-5 flex flex-col fixed left-0 top-0 shadow-xl";
    nav.innerHTML = `
        <div class="mb-10 text-center">
            <h2 class="text-2xl font-bold text-orange-500">Cozinha Control</h2>
            <p class="text-xs text-gray-400 mt-1 uppercase tracking-widest">Gestão de Estoque</p>
        </div>
        
        <ul class="space-y-4 flex-1">
            <li>
                <a href="dashboard.html" class="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition-all border-b border-gray-800">
                    <span>🏠</span> Dashboard
                </a>
            </li>
            <li>
                <a href="estoque.html" class="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition-all">
                    <span>📦</span> Estoque
                </a>
            </li>
            <li>
                <a href="categorias.html" class="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition-all">
                    <span>📁</span> Categorias
                </a>
            </li>
            <li>
                <a href="fornecedores.html" class="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition-all border-b border-gray-800">
                    <span>🚚</span> Fornecedores
                </a>
            </li>
            <li>
                <a href="alertas.html" class="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition-all">
                    <span>⚠️</span> Alertas
                </a>
            </li>
            <li>
                <a href="compras.html" class="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition-all">
                    <span>🛒</span> Lista de Compras
                </a>
            </li>
        </ul>

        <button id="logoutBtn" class="mt-auto bg-red-500/10 text-red-500 border border-red-500/20 p-3 rounded-lg hover:bg-red-500 hover:text-white transition-all font-bold">
            Sair do Sistema
        </button>
    `;
    document.body.prepend(nav);

    document.getElementById('logoutBtn').addEventListener('click', logout);
}
