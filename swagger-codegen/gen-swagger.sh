#!/bin/bash

java -jar swagger-codegen-cli.jar generate -i swagger-input.yml -l typescript-angular -o ../src/app/swagger/
