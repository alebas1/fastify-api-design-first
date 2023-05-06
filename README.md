# Design-first API

## Introduction

### Design first

The design-first approach for APIs involves creating a detailed API specification (eg [OpenAPI 3](https://swagger.io/specification/)) before writing any code.

The OpenAPI specification becomes the single source of truth for the API.

```mermaid
graph TD;
  A[Design-First Approach] -->|t Design API Contract| B(API Contract);
  B -->|t+1 Generate API Specification| C(API Specification);
  C -->|t+2 Mock API| D(Mock API);
  D -->|t+3 Develop Client Applications| E(Client Applications);
  C -->|t+2 Implement API| F(Implement API);
  F -->|t+3 Test API| G(Test API);
  G -->|t+4 Deploy API| H(Deploy API);
```

- **Design API Contract**: Define the resources, methods, parameters, data types, and other aspects of the API using a tool like OpenAPI, Swagger, or RAML.

- **Generate API Specification**: Create a machine-readable document that describes the API's endpoints, input and output parameters, request and response formats, and other details from the API contract.

- **Mock API**: Simulate the behavior of the real API without performing any operations. This allows client applications to be developed in parallel with the API implementation.

- **Develop Client Applications**: Create software components that use the API to access its functionality using the API specification and mock API.

- **Implement API**: Write server-side code that conforms to the API specification using a programming language, framework, or platform.

- **Test API**: Validate the API's endpoints, input and output parameters, error handling, security, and other aspects of its behavior through manual or automated testing.

- **Deploy API**: Set up the necessary infrastructure, configure the API, and make it available to clients. Monitor and maintain the API over time to ensure its reliability and performance.

## Getting Started

### Prerequisites

Volta is used to manage the Node.js version. Install it from [here](https://volta.sh/).

### Install dependencies

```sh
npm install
```

### Build

```sh
npm run build
```

> This will:
>
> - Validate the OpenAPI specification (linting)
> - Generate the typescript types from the OpenAPI specification
> - Compile the typescript source code for the API

### Run the api

```sh
npm start:api
```

You can now access the API documentation on http://localhost:8080/docs.

## More infos

Typescript types/interfaces are generated from the OpenAPI specification using [swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api). These types are used in the API implementation as a development aid. They are not used at runtime.

However, [fastify-openapi-glue](https://www.npmjs.com/package/fastify-openapi-glue) is used to validate the request and response payloads against the OpenAPI specification at runtime.

Giving us the best of both worlds: a typed API implementation and runtime validation of the request and response payloads against a predefined OpenAPI specification.