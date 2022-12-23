import swaggerJSDoc from "swagger-jsdoc";

export const swaggerDocument = swaggerJSDoc({
    definition: {
        openapi: '3.0.1',
        info: {
            version: '0.0.1',
            title: 'Score API',
            description: 'This is the Swagger page use for develop and documment the API endpoints',
            termsOfService: 'We currently don\'t have terms of service',
            contact: {
                name: 'Alfonso Villalobos',
                email: 'test@test.com'
            }
        }
    },
    apis: [
        'src/routes/*.ts',
        'src/entity/*.ts'
    ]
});