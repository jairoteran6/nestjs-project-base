import {MigrationInterface, QueryRunner} from "typeorm";

export class addTodo1648623447697 implements MigrationInterface {
    name = 'addTodo1648623447697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."todo" ("id" SERIAL NOT NULL, "content" character varying(255), "is_done" boolean NOT NULL DEFAULT false, "createdate" TIMESTAMP NOT NULL DEFAULT now(), "updateddate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e87731bafd682f5a84e2449470f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."todo"`);
    }

}