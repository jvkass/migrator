import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUserTable1678666724470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user"
                 (
                     id           UUID PRIMARY KEY NOT NULL,
                     "name"       VARCHAR NOT NULL,
                     last_login   TIMESTAMP NULL,
                     is_active    BOOL NOT NULL,
                     created_date TIMESTAMP NOT NULL,
                     updated_date TIMESTAMP NULL,
                     deleted_date  TIMESTAMP NULL
                 )
                `
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user" cascade`);
    }

}
