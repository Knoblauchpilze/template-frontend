
GIT_COMMIT_HASH=$(shell git rev-parse --short HEAD)
NODE_PORT ?= 3001
SERVER_ORIGIN ?= "http://localhost:3001"

setup:
	cp .env-example.local .env.local

install:
	npm install

dev:
	npm run dev -- --open

# https://stackoverflow.com/questions/3931741/why-does-make-think-the-target-is-up-to-date
.PHONY: build
build:
	npm run build

lint:
	npm run lint

docker:
	docker build \
		--build-arg GIT_COMMIT_HASH=${GIT_COMMIT_HASH} \
		--tag totocorpsoftwareinc/template-frontend:${GIT_COMMIT_HASH} \
		-f build/template-frontend/Dockerfile \
		.
