// Control de gastos mensuales

let IngresosMensuales = 0;
let exit = false;
let presupuesto = 500000;

const gastos = [
  { nombre: "Alimentación", monto: 0 },
  { nombre: "Alquiler", monto: 0 },
  { nombre: "Transporte", monto: 0 },
  { nombre: "Entretenimiento", monto: 0 }
];

while (!exit) {
  let opcion = parseInt(prompt(
    'Seleccione una opción:\n' +
    '1. Ingresar salario\n' +
    '2. Agregar gasto\n' +
    '3. Calcular total\n' +
    '4. Salir'
  ));

  switch (opcion) {
    case 1:
      agregarSalario();
      break;
    case 2:
      agregarGasto();
      break;
    case 3:
      calcularTotal();
      break;
    case 4:
      exit = true;
      alert('Saliendo del Programa...');
      break;
    default:
      alert('Opción inválida. Intente nuevamente.');
  }
}

function agregarSalario() {
  let salario = parseFloat(prompt('Ingrese su salario mensual:'));
  if (!isNaN(salario) && salario > 0) {
    IngresosMensuales = salario;
    alert('Salario agregado correctamente.');
  } else {
    alert('El salario debe ser un número positivo.');
  }
}

function agregarGasto() {
  let alquiler = parseFloat(prompt('Ingrese el gasto de alquiler:'));
  let alimentacion = parseFloat(prompt('Ingrese el gasto de alimentación:'));
  let transporte = parseFloat(prompt('Ingrese el gasto de transporte:'));
  let entretenimiento = parseFloat(prompt('Ingrese el gasto de entretenimiento:'));

  if (
    !isNaN(alquiler) && alquiler >= 0 &&
    !isNaN(alimentacion) && alimentacion >= 0 &&
    !isNaN(transporte) && transporte >= 0 &&
    !isNaN(entretenimiento) && entretenimiento >= 0
  ) {
    gastos[0].monto += alimentacion;
    gastos[1].monto += alquiler;
    gastos[2].monto += transporte;
    gastos[3].monto += entretenimiento;

    alert('Gastos agregados correctamente.');

    // Verificar si cada gasto excede el presupuesto
    gastos.forEach(gasto => {
      if (gasto.monto > presupuesto) {
        console.log(`⚠️ El gasto acumulado de ${gasto.nombre} excede el presupuesto de $${presupuesto}`);
      }
    });

  } else {
    alert('Todos los gastos deben ser números válidos y positivos.');
  }
}

function calcularTotal() {
  let totalGastos = gastos.reduce((suma, gasto) => suma + gasto.monto, 0);
  let saldo = IngresosMensuales - totalGastos;

  console.log("📊 Resumen de gastos:");
  gastos.forEach(gasto => {
    console.log(`${gasto.nombre}: $${gasto.monto}`);
  });

  if (saldo > 0) {
    alert('Su saldo es positivo: $' + saldo);
  } else if (saldo < 0) {
    alert('Su saldo es negativo: $' + saldo);
  } else {
    alert('Su saldo es cero.');
  }
}
1
