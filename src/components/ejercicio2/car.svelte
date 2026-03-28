<script lang="ts">
    import type {Coche,  VehiculoResumen} from "../../core/interfaces/generic.interface.ts";
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
    <h2>Detalles del Coche</h2>
    <p>Marca: {coche.marca}</p>
    <p>Modelo: {coche.modelo} </p>
    <p>Año: {coche.año} </p>
    <p>Puertas: {coche.puertas} </p>

    <button onclick={() => actualizarPropiedad(coche, 'marca', 'Honda')}>
        Cambiar a marca honda
    </button>

</div>

<div> 
    <h2>Resumen del Vehiculo</h2>
    <p>Marca: {vehiculoresumen.marca}</p>
    <p>Modelo: {vehiculoresumen.modelo} </p>

    <button onclick={() => actualizarPropiedad(vehiculoresumen, 'modelo', 'Accura')}>   
        Cambiar a modelo Accura
    </button>
</div>