import { logout } from './auth.js';

export function renderMenu() {
    if (document.querySelector('nav')) return;

    const nav = document.createElement('nav');
    nav.className = "w-64 bg-gray-900 text-white min-h-screen p-5 flex flex-col fixed left-0 top-0 z-50";
    nav.innerHTML = `
        <div class="mb-10 text-center">
            <h2 class="text-2xl font-bold text-orange-500">Cozinha Control</h2>
        </div>
        <ul class="space-y-4 flex-1">
            <li><a href="dashboard.html" class="block p-3 hover:bg-gray-800 rounded">🏠 Dashboard</a></li>
            <li><a href="estoque.html" class="block p-3 hover:bg-gray-800 rounded">📦 Estoque</a></li>
            <li><a href="categorias.html" class="block p-3 hover:bg-gray-800 rounded">📁 Categorias</a></li>
            <li><a href="fornecedores.html" class="block p-3 hover:bg-gray-800 rounded">🚚 Fornecedores</a></li>
            <li><a href="alertas.html" class="block p-3 hover:bg-gray-800 rounded">⚠️ Alertas</a></li>
            <li><a href="compras.html" class="block p-3 hover:bg-gray-800 rounded">🛒 Compras</a></li>
        </ul>
        <button id="logoutBtn" class="mt-auto bg-red-600 p-3 rounded font-bold hover:bg-red-700 transition">Sair</button>
    `;
    document.body.prepend(nav);

    document.getElementById('logoutBtn').addEventListener('click', logout);
}
