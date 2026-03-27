<script lang="ts">
    import {inventario, obtenerPrecioFinal, nota} from "./Logica.svelte"
</script>

<table> 
    <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio Original</th>
                <th>Precio Final</th>
                <th>Nota</th>
            </tr>
    </thead>
    <tbody>
        {#each inventario as producto}
            <tr>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{obtenerPrecioFinal(producto)}</td>
                <td>{nota(producto)}</td>
            </tr>
        {/each}
    </tbody>
    
</table>
<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #7d1212;
        padding: 8px;
    }
    th {
        background-color: #10892c;
    }
</style>    

