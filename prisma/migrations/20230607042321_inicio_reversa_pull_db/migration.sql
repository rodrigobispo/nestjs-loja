-- CreateTable
CREATE TABLE "produto_caracteristicas" (
    "id" SMALLSERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "produtoId" INTEGER,

    CONSTRAINT "PK_produto_caracteristicas" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto_imagens" (
    "id" SMALLSERIAL NOT NULL,
    "url" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,
    "produtoId" INTEGER,

    CONSTRAINT "PK_produto_imagens" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" SMALLSERIAL NOT NULL,
    "usuario_id" VARCHAR(100) NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "valor" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "categoria" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "PK_produtos" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SMALLSERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "PK_usuarios" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "produto_caracteristicas" ADD CONSTRAINT "FK_produto_caracteristicas_produtoId" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto_imagens" ADD CONSTRAINT "FK_produto_imagens_produtoId" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
