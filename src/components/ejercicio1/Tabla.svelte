<script lang="ts">
    import {inventario, obtenerPrecioFinal, nota} from "./Logica.svelte"
    import { Categoria } from "../../core/interfaces/generic.interface";
</script>

<table> 
    <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio Final</th>
                <th>Nota</th>
            </tr>
    </thead>
          
    <tbody>
        {#each inventario as producto}
            <tr>
                <td>{producto.nombre}</td>
                <td>{obtenerPrecioFinal(producto)}</td>
                <td>{nota(producto)}</td>
            </tr>
        {/each} 
    </tbody>
   
</table>
    <p>
        Total: {inventario.reduce((total, producto) => total + obtenerPrecioFinal(producto), 0).toFixed(2)}   
    </p>


<table> 
    <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio Final</th>
                <th>Nota</th>
            </tr>
    </thead>
          
    <tbody>
        {#each inventario.filter((p) => p.categoria === Categoria.ELECTRONICA) as producto}
            <tr>
                <td>{producto.nombre}</td>
                <td>{obtenerPrecioFinal(producto)}</td>
                <td>{nota(producto)}</td>
            </tr>
        {/each} 
    </tbody>
   
</table>
    <p>
        Total: {inventario.filter((p) => p.categoria === Categoria.ELECTRONICA)
        .reduce((total, producto) => total + obtenerPrecioFinal(producto), 0).toFixed(2)}   
    </p>

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