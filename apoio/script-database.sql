-- Table: public.usuarios

-- DROP TABLE IF EXISTS public.usuarios;

CREATE TABLE IF NOT EXISTS public.usuarios
(
    id smallint NOT NULL DEFAULT nextval('usuarios_id_seq'::regclass),
    nome character varying(100) COLLATE pg_catalog."default" NOT NULL,
    email character varying(70) COLLATE pg_catalog."default" NOT NULL,
    senha character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp(6) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(6) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp(6) without time zone,
    CONSTRAINT "PK_usuarios" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuarios
    OWNER to root;
	
-- Table: public.produtos

-- DROP TABLE IF EXISTS public.produtos;

CREATE TABLE IF NOT EXISTS public.produtos
(
    id smallint NOT NULL DEFAULT nextval('produtos_id_seq'::regclass),
    nome character varying(100) COLLATE pg_catalog."default" NOT NULL,
    valor integer NOT NULL,
    quantidade integer NOT NULL,
    descricao character varying(255) COLLATE pg_catalog."default" NOT NULL,
    categoria character varying(100) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp(6) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(6) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp(6) without time zone,
    "usuarioId" integer,
    CONSTRAINT "PK_produtos" PRIMARY KEY (id),
    CONSTRAINT "FK_usuarioId" FOREIGN KEY ("usuarioId")
        REFERENCES public.usuarios (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.produtos
    OWNER to root;

-- Table: public.produto_caracteristicas

-- DROP TABLE IF EXISTS public.produto_caracteristicas;

CREATE TABLE IF NOT EXISTS public.produto_caracteristicas
(
    id smallint NOT NULL DEFAULT nextval('produto_caracteristicas_id_seq'::regclass),
    nome character varying(100) COLLATE pg_catalog."default" NOT NULL,
    descricao character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "produtoId" integer,
    CONSTRAINT "PK_produto_caracteristicas" PRIMARY KEY (id),
    CONSTRAINT "FK_produto_caracteristicas_produtoId" FOREIGN KEY ("produtoId")
        REFERENCES public.produtos (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.produto_caracteristicas
    OWNER to root;
	
-- Table: public.produto_imagens

-- DROP TABLE IF EXISTS public.produto_imagens;

CREATE TABLE IF NOT EXISTS public.produto_imagens
(
    id smallint NOT NULL DEFAULT nextval('produto_imagens_id_seq'::regclass),
    url character varying(100) COLLATE pg_catalog."default" NOT NULL,
    descricao character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "produtoId" integer,
    CONSTRAINT "PK_produto_imagens" PRIMARY KEY (id),
    CONSTRAINT "FK_produto_imagens_produtoId" FOREIGN KEY ("produtoId")
        REFERENCES public.produtos (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.produto_imagens
    OWNER to root;
