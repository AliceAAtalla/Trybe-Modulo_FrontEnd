const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const exercise1 = (obj, propriedade, valor) => {
  obj[propriedade] = valor;
}

exercise1(lesson2, 'turno', 'manhã');
//console.log(lesson2);

// -------------------------------------

const exercise2 = (obj) => {
  return Object.keys(obj);
}

//console.log(exercise2(lesson1));

// -------------------------------------

const exercise3 = (obj) => {
  return Object.values(obj).length;
}

//console.log(exercise3(lesson1));

// -------------------------------------

const exercise4 = (obj) => {
  return Object.values(obj);
}

//console.log(exercise4(lesson3));

// -------------------------------------

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//console.log(allLessons);

// -------------------------------------

const exercise6 = (obj) => {
  let total = 0;
  let chaves = Object.keys(obj);
  for(i in chaves) {
    total += obj[chaves[i]].numeroEstudantes
  }
  return total
}

//console.log(exercise6(allLessons));

// -------------------------------------

const exercise7 = (obj, n) => Object.values(obj)[n];

//console.log(exercise7(lesson3, 1));

// -------------------------------------


