[English version](./README.md)

# Site web de Foacs Next.js

Nouveau site wbe de Foacs website écrit avec [Next.js](https://nextjs.org)

## Licence

Ce projet est sous les termes de la licence **CeCILL**.

> Vous pouvez accéder aux détails de la licence [ici](./LICENSE.md).

## Liens

[![Foacs](https://img.shields.io/badge/Foacs-%23ffffff.svg?&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xNDQuNzM0IDIyLjA0Yy01LjYxLS4wMzUtMTEuMTYzLjEyLTE2LjYzNC40NTYtNDMuNzcgMi43LTgyLjkwNCAxNy4wMDMtMTAzLjg2MiA0NC45OTYtNy41MDYgMTAuMDI3LTUuNjgyIDIzLjkxIDIuOTUgMzEuNDIgOC42MzUgNy41MSAyMy4wMDQgOC4wNTMgMzYuMjM0LS41MiAyMi44NC0xNC44MDUgNDcuOTMzLTkuNTcyIDY0LjI3IDYuMTcyIDE2LjM0IDE1Ljc0NSAyMy43MzYgNDEuNDUzIDcuNTQgNzEuMTQ1LTE5LjE3IDM1LjE0My0zMi43MTYgOTYuMTUzLTIwLjE0NiAxNTYuNTI2IDEyLjU3IDYwLjM3NCA1Mi45NjggMTE5Ljc2IDEzOS43MjggMTQ1Ljc3MiAzMy40NzYgMTAuMDM2IDc4LjgyNSAxNi43NSAxMjEuNjQ1IDcuNjY2IDQ0LjUwNy04Ljc4OCA5NS44NS0zNC43NTggMTA2Ljg5Mi02My4xMS05LjI1IDguODg1LTE5LjQ0IDE1LjE0LTMwLjIwMiAxOS43OSAxOC4zMDYtMjAuOTIgMzEuNzM1LTQ5LjczMiAzNi43OS04OC4xNzRsMi41My0xOS4yNC0xNi4zMjIgMTAuNDk2Yy0xMC41MDMgNi43NTUtMjAuNTg1IDEzLjQwMy0zMC4wOTMgMTguMzk2IDIuNjM4LTUuODcyIDUuMDM4LTEzLjIyIDcuNzMtMjIuNzc3LTExLjA5NyAxNS4xOS0yMy43MyAyNS4zNTUtMzguNTk4IDMxLjQ3Mi05LjIzNC0uNTAzLTE4LjM1My00Ljg2Ny0yOS4yMS0xNi4wOTctMTEuMzU4LTExLjc0Ny0xOC4xMi0zMi4wOTUtMjIuNDYzLTU3LjY2Ni00LjM0NC0yNS41NzItNi40Ni01NS45MjctMTAuNjY4LTg2Ljg3Ny04LjQyLTYxLjkwMi0yNS45MTItMTI3Ljg3My04OS43NC0xNjEuMDM1LTM2Ljk1NS0xOS4yLTc5LjA5Mi0yOC41NzctMTE4LjM3Mi0yOC44MTN6bS0uMTIzIDE4LjAxYzM2LjQ2Mi4yNTUgNzYuMTEgOS4wNjUgMTEwLjE5NyAyNi43NzQgNTYuMzkzIDI5LjMgNzEuOTk0IDg3LjE0IDgwLjIwMyAxNDcuNDg4IDQuMTA0IDMwLjE3NSA2LjE4NiA2MC41NTQgMTAuNzU4IDg3LjQ2NSAxLjMxNiA3Ljc1MyAyLjgzNSAxNS4yNDIgNC42OTMgMjIuMzg1LTE1LjQ0OC4wNC0yNy4yNTQtOC4zMDctNDEuNzA0LTI0LjcxNyA3LjM4NSAzMC40MSAxMS45OSAzNi41MzQgMjUuNzA1IDU1LjU1LTI4LjIyLTguMjM1LTYwLjY0LTM0Ljc0LTgwLjk1LTY0LjA2My0zLjI3NCA0MC4wNDcgMjAuMjIzIDcxLjU3NCAzMy4yNzUgODMuOTMtMjUuMTc2LTE0LjE5Ni02MC43MTMtNDEuNTM2LTg0LjYyMy04OC42NTUtMS4wMTYgNDEuNDI2IDExLjkzIDg3LjczMiAzNi40NSAxMTYuNDY1LTM0LjUxNS0xMS41MzYtNjQuOTctOTkuNDcyLTg1LjQyLTEyNy42MzMtMTMuMDQgMzMuMjE3LTIuOTQ4IDg5LjA4NSAxNi4wNzIgMTMwLjEyMi0xOS42MjgtMjIuODM4LTMwLjg4Ny00OS4zNzUtMzYuNTU1LTc2LjU5Ni0xMS41MjQtNTUuMzQyIDEuNzUtMTEzLjg0NyAxOC4zMjUtMTQ0LjIzOCAxOS41NS0zNS44NDIgMTAuOTE1LTcxLjc1LTEwLjg1LTkyLjcyNi0yMS43NjgtMjAuOTc2LTU2Ljg1NC0yNy41NjQtODYuNTU0LTguMzE1LTguNTYgNS41NS0xMi42ODggMy43MzItMTQuNjI2IDIuMDQ1LTEuOTQtMS42ODctMi43Ni0zLjg0LS4zNTYtNy4wNTMgMTYuMTA2LTIxLjUxNCA1MC4xMzUtMzUuMzI0IDkwLjU2LTM3LjgxNyA1LjA1Mi0uMzEyIDEwLjE5NS0uNDUgMTUuNDAzLS40MTR6Ii8+PC9zdmc+)](https://foacs.ovh/)
[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/VWX9pybWvT)
[![Travis CI](https://img.shields.io/badge/Travis%20CI-%232B2F33.svg?&style=for-the-badge&logo=travis)](https://travis-ci.com/github/Foacs)
[![SonarCloud](https://img.shields.io/badge/SonarCloud-%23F3702A.svg?&style=for-the-badge&logo=sonarcloud&logoColor=white)](https://sonarcloud.io/organizations/foacs)
