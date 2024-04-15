import { series } from './data';

function mostrarSeries() {
    const tabla = document.createElement('table');
    tabla.classList.add('table');

    // Encabezados de la tabla
    const encabezados = ["ID", "Nombre", "Canal", "Temporadas", "Descripción"];
    const encabezadosRow = document.createElement('tr');
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        encabezadosRow.appendChild(th);
    });
    tabla.appendChild(encabezadosRow);

    // Filas de datos de series
    series.forEach(serie => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
            <td>${serie.description}</td>
        `;
        tabla.appendChild(fila);
    });

    // Agregar tabla al documento
    document.body.appendChild(tabla);
}

function mostrarSeriesConPromedio() {
    mostrarSeries();

    // Calcular el promedio de temporadas
    const totalTemporadas = series.reduce((total, serie) => total + serie.seasons, 0);
    const promedio = totalTemporadas / series.length;

    // Crear y agregar la fila de promedio
    const tabla = document.querySelector('.table');
    if (tabla) {
        const filaPromedio = document.createElement('tr');
        filaPromedio.innerHTML = `
            <td colspan="3">Promedio de temporadas</td>
            <td>${promedio.toFixed(2)}</td>
            <td></td>
        `;
        tabla.appendChild(filaPromedio);
    } else {
        console.error("No se encontró la tabla en el documento.");
    }
}

// Llamar a la función para mostrar las series con el promedio de temporadas
mostrarSeriesConPromedio();
