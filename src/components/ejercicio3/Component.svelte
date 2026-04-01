<script lang="ts">    
    import { email } from 'astro:schema';
import { onMount } from 'svelte';
    let usuarios = $state<any[]>([])

    onMount(async () => {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        usuarios = await respuesta.json()
    }) 

</script>

<table class="w-full"> 
    <thead class="bg-gray-400 text-black">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
    </thead>
          
    <tbody class="bg-gray-200 flex-1">
        {#each usuarios as user}
            <tr class="p-1 hover:bg-gray-300">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        {/each} 
    </tbody>
</table>