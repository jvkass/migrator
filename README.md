
### Create migrator

npx typeorm-ts-node-esm migration:create src/database/migration/CreateUserTable

### Run migrator

npx typeorm-ts-node-esm migration:run -- -d 

npx typeorm-ts-node-esm migration:generate ./src/migrations -d ./ormconfig.ts


npx typeorm-ts-node-esm migration:generate 