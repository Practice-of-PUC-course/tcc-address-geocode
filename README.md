# tcc-address-geocode

A geolocation API to support address geocoding.

The goal is to encapsulate the external Geocode API using Node.js for basic operations like getting geographic coordinates from a textual address.

This project is a software component to compose the proof of concept of the PUC graduation process (TCC).

## API Features

I use Postman to test API endpoints, so a test collection has been exported and can be found in the [postman](./postman/postman_collection.json) directory.

My Postman reference version: v7.36.5

#### Location endpoint

 - GET http://&lt;host&gt;:&lt;port&gt;/geocode/v1/location

## Installation

 > prerequisites in the development environment:

- node version v12.18.2
- npm version  6.14.15
- mongodb version 5.0

 > steps:

- clone the project
- npm install
- create and set environment variables, see .env file above
- npm start

### API server configuration

The configuration file called .env must be created in the project root before start the server.

```sh
#.env
NODE_ENV="development"
EXTERNAL_API_URL="https://api.opencagedata.com/geocode/v1"
EXTERNAL_API_TOKEN="ashdlkad8ySDYAsdyASDIOY5a55q5w6"
GOOGLE_API_URL="https://maps.googleapis.com/maps/api/geocode"
GOOGLE_API_KEY="AHGhgJHKSHKAs676a78686a88a89sAS7dS"
GEOAPIFY_API_URL="https://api.geoapify.com/v1/geocode"
GEOAPIFY_API_KEY="abbbb32b3b23b3b223v2323vb2v3b2v3b"
API_LISTEN_PORT="3000"
# *ALL API KEYS HERE ARE UNREAL
```

For this test we use these providers:
 - (OpenCage)[https://opencagedata.com/] free plan (gives the worst results, need more tests).
 - (Geoapify)[https://www.geoapify.com/] free plan.
 - (GoogleAPI)[https://maps.googleapis.com/maps/api/geocode] paid plan (disabled).

## Architecture (backend)

- Data access tier: driver, model
- business tier: handler services and class models
- presentation tier: routers and API endpoints

## What remains to improve?

 - unit tests and another tests;
 - exception handlers;
 - logging levels to file;
 - include swagger-ui-express to better API presentation;
 - Compare the accuracy of Geocode APIs;

## Feedback

If you have any feedback, please reach me at: afacarvalho@yahoo.com.br

## License

See [LICENSE](./LICENSE) file (GNU General Public License).

https://opensource.org/licenses/ISC
