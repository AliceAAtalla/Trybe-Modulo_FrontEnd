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

const exercise8 = (obj, chave, valor) => {
  if (obj[chave] === valor) {
    return true;
  }
  return false;
} 

//console.log(exercise8(lesson3, 'turno', 'noite'))
//console.log(exercise8(lesson3, 'turno', 'manhã'))

// ----------------BONUS---------------------

const getNumberMathStudents = (obj) => {
  let assistiram = 0;
  const chaves = Object.keys(obj);
  for (i in chaves) {
    if (obj[chaves[i]].materia === 'Matemática') {
      assistiram += obj[chaves[i]].numeroEstudantes;
    }
  } 
  return assistiram;
}

//console.log(getNumberMathStudents(allLessons));

//-------

const getInfo = (obj, nameTeacher) => {
  const allLessons = [];
  let allStudent = 0;
  const valores = Object.values(obj);
  for (i in valores) {
    if (valores[i].professor === nameTeacher) {
    allLessons.push(valores[i].materia)
      allStudent += valores[i].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createRelatorio = (allLessons, nameTeacher) => {
  const relatorio = {};
  relatorio.professor = nameTeacher;
  Object.assign(relatorio, getInfo(allLessons, nameTeacher));
  return relatorio;
}
console.log(createRelatorio(allLessons, 'Maria Clara'));
    
