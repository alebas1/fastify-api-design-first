import fastify from 'fastify'
import openapiGlue, { FastifyOpenapiGlueOptions } from "fastify-openapi-glue";
import path from 'path';
import { fileURLToPath } from "url";
import swaggerUi, { FastifySwaggerUiOptions } from '@fastify/swagger-ui'
import swagger, { FastifyStaticSwaggerOptions } from '@fastify/swagger'
import healthRoutes from './routes/health.js'

const server = fastify({
  logger: true
})

const routes = {
  ...healthRoutes,
}

const dirName = path.dirname(fileURLToPath(import.meta.url))
const openApiSpecification = path.join(dirName, '..', '..', '..', 'docs', 'openapi-spec.yaml');
console.log(openApiSpecification)

const swaggerUiOptions: FastifySwaggerUiOptions = {
  routePrefix: "docs"
}

const swaggerOptions: FastifyStaticSwaggerOptions = {
  mode: 'static',
  specification: {
      path: openApiSpecification,
      baseDir: ''
  }
}

const openapiGlueOptions: FastifyOpenapiGlueOptions = {
  specification: openApiSpecification,
  service: routes
}

server.register(openapiGlue, openapiGlueOptions);
server.register(swagger, swaggerOptions)
server.register(swaggerUi, swaggerUiOptions)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
