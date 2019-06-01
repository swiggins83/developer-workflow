#!/bin/bash

EPOCH=$(date +%s)

docker build --file ./build/Dockerfile -t hi:$EPOCH .

kubectl set image deployment/hello-node hi=hi:$EPOCH

kubectl logs -lapp=hello-node -f
