import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUserEmailTable1678667048390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user_mail"
                 (
                     id           UUID PRIMARY KEY NOT NULL,
                     user_id      UUID NOT NULL,
                     mail         VARCHAR NOT NULL,
                     is_active    BOOL NOT NULL,
                     created_date TIMESTAMP NOT NULL,
                     updated_date TIMESTAMP NULL,
                     deleted_date  TIMESTAMP NULL,
                     CONSTRAINT user_email_fk FOREIGN KEY (user_id) REFERENCES "user"(id)
                 )
                `
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_mail" cascade`);
    }

}
