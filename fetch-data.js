document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch');
        const users = await response.json();
        
        const container = document.getElementById('api-data');
        container.innerHTML = '';
        const list = document.createElement('ul');
        
        users.forEach(user => {
            const item = document.createElement('li');
            item.textContent = user.name;
            list.appendChild(item);
        });
        
        container.appendChild(list);
    } catch (error) {
        document.getElementById('api-data').textContent = 'Failed to load user data.';
    }
});
