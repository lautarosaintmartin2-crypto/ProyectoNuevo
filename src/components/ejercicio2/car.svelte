<script lang="ts">
    import type {Coche,  VehiculoResumen} from "../../core/interfaces/ejercicio2.interface.ts";
    import { actualizarPropiedad } from "./logica.svelte.ts";

    const coche: Coche = $state({
        id: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2020,
        puertas: 4
    });

    const vehiculoresumen: VehiculoResumen = $state({
        marca: "Honda",
        modelo: "Civic"
    })
</script>

<div>
    <h2 class="text-red-500">Detalles del Coche</h2>
    <p>Marca: {coche.marca}</p>
    <p>Modelo: {coche.modelo} </p>
    <p>Año: {coche.año} </p>
    <p>Puertas: {coche.puertas} </p>

    <!-- <button onclick={() => actualizarPropiedad(coche, 'año', 2024)}>
        Cambiar a año 2024 
    </button> -->
    <label for="año">Cambiar año:</label>
    <input bind:value={coche.año} type="text">

</div>

<div> 
    <h2>Resumen del Vehiculo</h2>
    <p>Marca: {vehiculoresumen.marca}</p>
    <p>Modelo: {vehiculoresumen.modelo} </p>

    <!-- <button onclick={() => actualizarPropiedad(vehiculoresumen, 'modelo', 'Accura')}>   
        Cambiar a modelo Accura
    </button> -->
    <label for="modelo">Cambiar modelo:</label>
    <input bind:value={vehiculoresumen.modelo} type="text">
</div>