  CREATE  TABLE  IF  NOT  EXISTS  public.usuarios
  (
  id SMALLSERIAL,
  nome character varying(100) COLLATE pg_catalog."default"  NOT NULL,
  email character varying(70) COLLATE pg_catalog."default"  NOT NULL,
  senha character varying(255) COLLATE pg_catalog."default"  NOT NULL,
  created_at timestamp without time zone  NOT NULL  DEFAULT  now(),
  updated_at timestamp without time zone  NOT NULL  DEFAULT  now(),
  deleted_at timestamp without time zone,
  CONSTRAINT  "PK_usuarios"  PRIMARY KEY (id)
  );
  --TABLESPACE pg_default;
  ALTER  TABLE  IF  EXISTS  public.usuarios  OWNER  to  root;

  CREATE  TABLE  IF  NOT  EXISTS  public.produtos
  (
  id SMALLSERIAL,
  usuario_id character varying(100) COLLATE pg_catalog."default"  NOT NULL,
  nome character varying(100) COLLATE pg_catalog."default"  NOT NULL,
  valor integer  NOT NULL,
  quantidade integer  NOT NULL,
  descricao character varying(255) COLLATE pg_catalog."default"  NOT NULL,
  categoria character varying(100) COLLATE pg_catalog."default"  NOT NULL,
  created_at timestamp without time zone  NOT NULL  DEFAULT  now(),
  updated_at timestamp without time zone  NOT NULL  DEFAULT  now(),
  deleted_at timestamp without time zone,
  CONSTRAINT  "PK_produtos"  PRIMARY KEY (id)
  );
  --TABLESPACE pg_default;
  ALTER  TABLE  IF  EXISTS  public.produtos  OWNER  to  root;

  CREATE  TABLE  IF  NOT  EXISTS  public.produto_caracteristicas
  (
  id SMALLSERIAL,
  nome character varying(100) COLLATE pg_catalog."default"  NOT NULL,
  descricao character varying(255) COLLATE pg_catalog."default"  NOT NULL,
  "produtoId" Int,
  CONSTRAINT  "PK_produto_caracteristicas"  PRIMARY KEY (id),
  CONSTRAINT  "FK_produto_caracteristicas_produtoId"  FOREIGN KEY ("produtoId")
  REFERENCES  public.produtos (id) MATCH SIMPLE
  ON  UPDATE CASCADE
  ON DELETE CASCADE
  );
  --TABLESPACE pg_default;
  ALTER  TABLE  IF  EXISTS  public.produto_caracteristicas  OWNER  to  root;

  CREATE  TABLE  IF  NOT  EXISTS  public.produto_imagens
  (
  id SMALLSERIAL,
  url  character varying(100) COLLATE pg_catalog."default"  NOT NULL,
  descricao character varying(100) COLLATE pg_catalog."default"  NOT NULL,
  "produtoId" Int,
  CONSTRAINT  "PK_produto_imagens"  PRIMARY KEY (id),
  CONSTRAINT  "FK_produto_imagens_produtoId"  FOREIGN KEY ("produtoId")
  REFERENCES  public.produtos (id) MATCH SIMPLE
  ON  UPDATE CASCADE
  ON DELETE CASCADE
  );
  --TABLESPACE pg_default;
  ALTER  TABLE  IF  EXISTS  public.produto_imagens  OWNER  to  root;