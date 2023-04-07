# POE Experiments!!

This is a little monorepo, currently containing a Next.js app and a python app.

---

Prerequisites:

- [Poetry](https://python-poetry.org/docs/)
- [node.js LTS](https://nodejs.org/en/download)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- nx CLI: (after installing yarn) `yarn global add nx`

Once all of the above are installed, run `yarn` at the root of the repo to install the project dependencies.

---

## poe-web

`nx serve poe-web` will run next.js using webpack and serve the app at https://localhost:4200

`nx test poe-web` runs unit tests

---

## pyapp

Generated with a 3rd party plugin, more info here: https://betterprogramming.pub/poetry-python-nx-monorepo-5750d8627024

Run `poetry install` in `apps/pyapp` and then the following commands will work from anywhere in the repo:

`nx build pyapp`

`nx lint pyapp`

`nx test pyapp`
