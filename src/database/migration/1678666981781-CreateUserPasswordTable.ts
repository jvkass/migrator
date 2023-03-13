import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUserPasswordTable1678666981781 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user_password"
                 (
                     id           UUID PRIMARY KEY NOT NULL,
                     user_id      UUID NOT NULL,
                     password     VARCHAR NOT NULL,
                     is_active    BOOL NOT NULL,
                     created_date TIMESTAMP NOT NULL,
                     updated_date TIMESTAMP NULL,
                     deleted_date  TIMESTAMP NULL,
                     CONSTRAINT user_password_fk FOREIGN KEY (user_id) REFERENCES "user"(id)
                 )
                `
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_password" cascade`);
    }

}
