/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from "typeorm"

export class CoffeeRefactor1690349376672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER Table "coffee" RENAME COLUMN "name" TO "title"`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`
        )
    }

}
