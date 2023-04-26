const swagger_auto_gen = require('swagger-autogen');
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

const docs = {
    info: {
        version: "1.0.0",
        title: "Fábrica de Aplicativos",
        description: "API da Fábrica de Aplicativos"
    },
    host: "localhost:8182",
    schemes: ['http'],
};

swagger_auto_gen(outputFile, endpointsFiles, docs);

//ok