export function renderMenu() {
    const nav = document.createElement('nav');
    nav.className = "w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col fixed";
    nav.innerHTML = `
        <h2 class="text-xl font-bold mb-8 text-orange-400">Cozinha Control</h2>
        <ul class="space-y-2 flex-1">
            <li><a href="dashboard.html" class="block p-2 hover:bg-gray-700 rounded">Dashboard</a></li>
            <li><a href="estoque.html" class="block p-2 hover:bg-gray-700 rounded">Estoque</a></li>
            <li><a href="categorias.html" class="block p-2 hover:bg-gray-700 rounded">Categorias</a></li>
            <li><a href="fornecedores.html" class="block p-2 hover:bg-gray-700 rounded">Fornecedores</a></li>
            <li><a href="alertas.html" class="block p-2 hover:bg-gray-700 rounded">Alertas</a></li>
            <li><a href="compras.html" class="block p-2 hover:bg-gray-700 rounded">Lista de Compras</a></li>
        </ul>
        <button id="logoutBtn" class="mt-auto bg-red-600 p-2 rounded hover:bg-red-700">Sair</button>
    `;
    document.body.prepend(nav);
}
