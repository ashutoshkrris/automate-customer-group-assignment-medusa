# How to Automate Customer Group Assignment in Medusa

This repository is the codebase of tutorial [How to Automate Customer Group Assignment in Medusa](tutorial-link).

[Medusa Documentation](https://docs.medusajs.com/) | [Medusa Website](https://medusajs.com/) | [Medusa Repository](https://github.com/medusajs/medusa)

## Medusa Version

This tutorial uses Medusa v1.7.2. It is not guaranteed that it will work with future releases.

## Prerequisites

- [Node.js at least v14](https://docs.medusajs.com/tutorial/set-up-your-development-environment#nodejs)
- [Git](https://docs.medusajs.com/tutorial/set-up-your-development-environment/#git)
- [Medusa CLI](https://docs.medusajs.com/tutorial/set-up-your-development-environment#medusa-cli)
- [Redis](https://docs.medusajs.com/tutorial/set-up-your-development-environment/#redis)

## How to Install

_You may change these steps per your article._

1. Clone this repository:

    ```bash
    git clone https://github.com/ashutoshkrris/automate-customer-group-assignment-medusa.git my-medusa-store
    ```

2. Change directory and install dependencies:

    ```bash
    cd my-medusa-store
    npm install
    ```

3. Run the following command to create a `.env` file:
    ```bash
    mv .env.template .env
    ```

4. Seed the data:
    ```bash
    medusa seed -f ./data/seed.json
    ```

5. Build the project:

    ```bash
    npm run build
    ```

6. Start Server:

    ```bash
    medusa develop
    ```

## Other Resources

- [How to create a subscriber in Medusa](https://docs.medusajs.com/advanced/backend/subscribers/create-subscriber)
- [Events References](https://docs.medusajs.com/advanced/backend/subscribers/events-list)
- [Demo Video](https://youtu.be/KsKMLQHhf0k)
