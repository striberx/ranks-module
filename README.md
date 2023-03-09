# Ranks Module
Module for rank operations for the Striber Discord bot

# Custom Declarations
`Client` is being used in ``.
The `Client` class looks as such:
```Javascript
import HeatSync from 'heatsync';
import { Redis } from 'ioredis';
import { Manager } from 'lavacord';
import { SnowTransfer } from 'snowtransfer';
import { DatabaseController, CommandController } from '.';

export default class Client {
  public applicationId: string;
  public lavalink: Manager | undefined;
  public snow: SnowTransfer;
  public sync: HeatSync;
  public commands: CommandController;
  public db: DatabaseController;
  public cache: Redis;

  public constructor(applicationId: string, snow: SnowTransfer, db: DatabaseController, cache: Redis, commands: CommandController, sync: HeatSync) {
    this.applicationId = applicationId;
    this.snow = snow;
    this.sync = sync;
    this.commands = commands;
    this.db = db;
    this.cache = cache;
  }
}
```

`DatabaseController` is a custom implementation that simplifies Postgres functionalities using the `pg` module.

`CommandController` is a custom implementation of interaction command caching and processes.
