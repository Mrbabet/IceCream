# GOIT TEAM PROJECT ISCREAM

## Before you start

Check all dependencies once per project.

```shell
npm ci
```

### Work


Turn on the dev mode.

```shell
npm run dev
```

In your browser, go to [http://localhost:1234](http://localhost:1234).

### Deploy

The code will automatically collect and do deploy the current version of the project to GitHub Pages, v
`gh-pages` branch, whenever changes are made to `main`. For example, after
direct push or after accepting a pull-request. For this to work, we need the `package.json` file
change the `homepage` field and the `build` script, changing `username` and `repository_name` to
own.

```json
"homepage": "https://username.github.io/repository_name",
"scripts": {
  "build": "parcel build src/*.html --public-url /repository_name/"
},
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mirs-me"><img src="https://avatars.githubusercontent.com/u/130767929?v=4" width="100px;" alt="Mir Svetoslavova"/><br /><sub><b>Mir Svetoslavova</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Mrbabet"><img src="https://avatars.githubusercontent.com/u/108229726?v=4" width="100px;" alt="Kamil Wieliczko"/><br /><sub><b>Kamil Wieliczko</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alenfador2"><img src="https://avatars.githubusercontent.com/u/129333585?v=4" width="100px;" alt="Taras Sakhniuk"/><br /><sub><b>Taras Sakhniuk</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Belvegor"><img src="https://avatars.githubusercontent.com/u/132554347?v=4" width="100px;" alt="Igor Socha"/><br /><sub><b>Igor Socha</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KasiaNejman"><img src="https://avatars.githubusercontent.com/u/139686065?v=4" width="100px;" alt="Kasia Nejman"/><br /><sub><b>Kasia Nejman</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Otrzewik"><img src="https://avatars.githubusercontent.com/u/124401978?v=4" width="100px;" alt="Otrzewik"/><br /><sub><b>Otrzewik</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dmgrabski"><img src="https://avatars.githubusercontent.com/u/132050167?v=4" width="100px;" alt="dmgrabski"/><br /><sub><b>dmgrabski</b></sub></a><br /></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/PiotrJasinski1995"><img src="https://avatars.githubusercontent.com/u/45859926?v=4" width="100px;" alt="PiotrJasinski"/><br /><sub><b>Piotr Jasiński</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### [How to add the contributor to the list](https://allcontributors.org/docs/en/bot/usage)

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
