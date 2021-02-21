[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![img](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# Aries VCR Client

## Overview

This application implements a user interface (built with Angular) for Aries VCR, calling the API to search and consume data about credentials.

## Running 

Running the web application in development mode can be done simply with the Angular CLI installed. Simply run:

``` 
npm install
``` 

and

``` 
ng serve
```

## Development

With the application running, you can develop against any running Aries VCR instance by configuring the `API_URL` setting in `./src/assets/config.json`. If you have a local instance of Aries VCR, it is likley running on `http://localhost:8081/api` and the configuration will default to this, however you can change this setting at anytime, even while the application is running.

## Themes

Themes can be customized by extending this codebase. Simply create a fork of the repository and start coding!

The following examples showcase cusotmized UIs using this Aries VCR Client as a base:

* [Orgbook BC](https://github.com/bcgov/orgbook-bc-client)
* [Orgbook ON](https://github.com/bcgov/orgbook-on-client)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributing

**Pull requests are always welcome!**

Please see the [Contributions Guide](CONTRIBUTING.md) for the repo.

You may also create an issue if you would like to suggest additional resources to include in this repository.

All contrbutions to this repository should adhere to our [Code of Conduct](./CODE_OF_CONDUCT).

## License

[Apache License Version 2.0](./LICENSE)