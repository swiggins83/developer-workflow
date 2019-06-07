#!/bin/bash

EPOCH=$(date +%s)

docker build --file ./build/Dockerfile -t hi:$EPOCH . &&

if [[ $(kubectl get pods -lapp=hello-node) == "No resources found." ]]; then
    kc apply -f ../deploy/deployment.yaml
    sleep 5
fi

kubectl set image deployment/hello-node hi=hi:$EPOCH
