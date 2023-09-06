#!/bin/bash

docker build -t mock-server:0.0.3 -f Dockerfile-dev .

docker run -dit --name server -p 9999:5000 -v ${PWD}:/server:ro mock-server:0.0.3