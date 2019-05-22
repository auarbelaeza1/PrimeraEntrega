const fs = require('fs');

const courses=[
    {   
        curso: 'excel financiero' ,  
        duracion: '16h' , 
        valor: '125.000', 
        id: '00001'
    },
    {   
        curso: 'node js',
        duracion: '32h',
        valor:'gratuito',
        id:'00002'
    },
    {
        curso:'psicografología', 
        duracion:'24h' , 
        valor: '210.000',
        id:'00003'
    },
    {
        curso: 'prueba grafico proyectiva wartegg 8 campos', 
        duracion:'24h',
        valor:'210.000',
        id:'00004'
    }
];

const options = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'cc'
    }
};

const argv = require('yargs')
    .command('inscribir', 'Agregar persona al curso', options)
    .argv;

let Info = () => {
    setTimeout(function() {
        console.log(`ID : ${courses[0].id} - Nombre Curso: ${courses[0].curso} - Duracion: ${courses[0].duracion} - Valor: ${courses[0].valor}`);
    }, 2000);
    setTimeout(function() {
        console.log(`ID : ${courses[1].id} - Nombre Curso: ${courses[1].curso} - Duracion: ${courses[1].duracion} - Valor: ${courses[1].valor}`);
    }, 4000);
    setTimeout(function() {
        console.log(`ID : ${courses[2].id} - Nombre Curso: ${courses[2].curso} - Duracion: ${courses[2].duracion} - Valor: ${courses[2].valor}`);
    }, 6000);
};

let File = () => {
    let course = courses.find(item => item.id == argv.id);

    if (course) {
        let texto = 'La persona ' + argv.n + '\n' +
            'con Cedula ' + argv.cc + '\n' +
            'Se ha matriculado en el curso ' + course.curso + '\n' +
            'Con duracion de ' + course.duracion + '\n' +
            'Y un valor de ' + course.valor;
        fs.writeFile('inscripcion.txt', texto, (err) => {
            if (err) throw (err);
            console.log('Se ha creado el archivo');
        });
    } else {
        console.log("No se encontro el curso")
    }

}

let sinError = () => {
    if (typeof argv.id === 'undefined') {
        Info();
    } else {
        File();
    }
};

sinError();