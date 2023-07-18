# API Data License

## Description

This file is for those who want to know the license of the data provided by calling this API.

## License

![CC BY-NC-SA 4.0](https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1)![CC BY-NC-SA 4.0](https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1)![CC BY-NC-SA 4.0](https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1)![CC BY-NC-SA 4.0](https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1)

The data provided by calling this API are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

For more information, please refer to [CC BY-NC-SA 4.0 Legal Code](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode).

## Data

The following data are stored in this repository and served. Both server and fansite models are stored as an array.

- [server.model.ts](https://github.com/Secret-Society-Braid/imas-cord-hub-backend/blob/main/src/server/model/server.model.ts)
  - internal ID (used only in this API)
  - Discord server name
  - targeting IP (Brand)
  - targeting idol (i.e. waifu, tantou)
  - original description provided by the information submitter
  - Discord server invite link
- [fansite.model.ts](https://github.com/Secret-Society-Braid/imas-cord-hub-backend/blob/main/src/fansite/model/fansite.model.ts)
  - the name of the fansite
  - targeting idol (i.e. waifu, tantou)
  - original description provided by the information submitter
  - fansite URL (link)
