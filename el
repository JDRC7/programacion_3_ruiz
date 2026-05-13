CREATE DATABASE db_hospital_jr;

CREATE TABLE pacientes(
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
apellido VARCHAR(100) NOT NULL,
edad INTEGER CHECK (edad >= 0),
num_cedula NUMERIC UNIQUE NOT NULL,
sexo VARCHAR (50) CHECK (sexo IN('M', 'F', 'O')),
urgente BOOLEAN DEFAULT FALSE,
sangre_tipo VARCHAR (50) CHECK (sangre_tipo IN('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'OTRO'))
);

CREATE OR REPLACE PROCEDURE registrar_y_revisar_prioridad(
    p_nombre VARCHAR,
    p_apellido VARCHAR,
    p_edad INTEGER,
    p_cedula NUMERIC,
    p_sexo VARCHAR,
    p_sangre VARCHAR,
    p_contacto VARCHAR
)
LANGUAGE plpgsql
AS $$
DECLARE
    v_urgente BOOLEAN := FALSE; -- Variable local
BEGIN
    -- Lógica condicional: Si es adulto mayor, es urgente por protocolo
    IF p_edad >= 65 THEN
        v_urgente := TRUE;
        RAISE NOTICE '¡ATENCIÓN! Paciente de la tercera edad registrado. Prioridad asignada.';
    ELSE
        RAISE NOTICE 'Paciente registrado correctamente en el sistema.';
    END IF;

    -- Realizamos el INSERT con la decisión tomada
    INSERT INTO pacientes (nombre, apellido, edad, num_cedula, sexo, urgente, sangre_tipo, num_contacto)
    VALUES (p_nombre, p_apellido, p_edad, p_cedula, p_sexo, v_urgente, p_sangre, p_contacto);

END;
$$;

CREATE TABLE productos (
ID SERIAL PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
precio DECIMAL (10,2) NOT NULL,
stock INT DEFAULT 0,
activo BOOLEAN DEFAULT true
);

INSERT INTO productos (nombre,apellido,precio,stock,activo) 
VALUES 
('Eduardo','Perez',25.50,3,true),
('Yoko','Iwanaga',25.50,3,true),
('David','Iwanaga',25.50,3,true);

SELECT * FROM productos;

UPDATE productos SET apellido='Iwanaga' WHERE id=1;

DELETE FROM productos WHERE id=3;

SELECT * FROM productos;

CREATE OR REPLACE FUNCTION saludar()
RETURNS TEXT AS $$
BEGIN
RETURN 'Hola, desde postgresql';
END;
$$ LANGUAGE plpgsql;

SELECT saludar();

CREATE OR REPLACE FUNCTION clasificar_producto(p_precio DECIMAL)
RETURNS TEXT AS $$
BEGIN
IF p_precio < 50 THEN
RETURN 'Barato';
ELSIF p_precio < 200 THEN
RETURN 'Medio';
ELSE 	
RETURN 'Caro';
END IF;
END;
$$ LANGUAGE plpgsql;

SELECT clasificar_producto(75);

CREATE OR REPLACE FUNCTION suficiente_stock(
p_id_producto INT,
p_cantidad INT
)
RETURNS BOOLEAN AS $$
DECLARE 
v_stock INT;
BEGIN
SELECT stock INTO v_stock 
FROM productos WHERE id= p_id_producto;

IF v_stock >= p_cantidad THEN
RETURN true;
ELSE
RETURN false;
END IF;
END;
$$ LANGUAGE plpgsql;

SELECT suficiente_stock(1, 3);


CREATE OR REPLACE FUNCTION impuesto_por_precio(p_precio DECIMAL)
RETURNS DECIMAL(10,2) AS $$
DECLARE
tasa DECIMAL(10,2);
BEGIN
tasa:= CASE
WHEN p_precio <= 100 THEN 1.05
WHEN p_precio <= 500 THEN 1.12
ELSE 1.19
END;
RETURN p_precio * tasa;
END;
$$ LANGUAGE plpgsql;


SELECT impuesto_por_precio(150);


CREATE OR REPLACE FUNCTION es_barato(p_precio DECIMAL)
RETURNS BOOLEAN AS $$
BEGIN
IF p_precio < 50 THEN
RETURN true;
ELSE 
RETURN false;
END IF;
END;
$$ LANGUAGE plpgsql;

SELECT es_barato(40);
SELECT es_barato(70); 


CREATE OR REPLACE FUNCTION tiene_stock_suficiente(
p_id_producto INT,
p_cantidad INT
)
RETURNS BOOLEAN AS $$
DECLARE 
v_stock INT;
BEGIN
SELECT stock INTO v_stock
FROM productos WHERE id=p_id_producto;
IF v_stock >= p_cantidad THEN 
RETURN true;
ELSE 
RETURN false;
END IF;
END;
$$ LANGUAGE plpgsql;

SELECT tiene_stock_suficiente(1,5);

CREATE OR REPLACE FUNCTION activo_y_con_stock(p_id_producto INT)
RETURNS BOOLEAN AS $$
DECLARE 
v_stock INT;
v_activo BOOLEAN;
BEGIN
SELECT stock,activo INTO v_stock,v_activo
FROM productos WHERE id=p_id_producto;
IF v_activo = true AND v_stock > 0 THEN
RETURN true;
ELSE 
RETURN false;
END IF;
END;
$$ LANGUAGE plpgsql;

SELECT activo_y_con_stock(1);

CREATE OR REPLACE FUNCTION categoria_precio_if(p_precio DECIMAL)
RETURNS TEXT AS $$
BEGIN 
IF p_precio < 50 THEN
RETURN 'Barato';
ELSIF p_precio <200 THEN
RETURN 'Medio';
ELSE 
RETURN 'Caro';
END IF;
END;
$$ LANGUAGE plpgsql;

SELECT categoria_precio_if(75);

CREATE OR REPLACE FUNCTION aplicar_descuento_extra(
p_id_producto INT
)
RETURNS DECIMAL(10,2) AS $$
DECLARE 
v_precio INT;
v_stock INT;
BEGIN
SELECT stock,precio INTO v_stock,v_precio FROM productos
WHERE id=p_id_producto;

IF v_stock >= 20 THEN 
RETURN v_precio * 0.90;
ELSE 
RETURN v_precio;
END IF;
END;
$$ LANGUAGE plpgsql;

SELECT aplicar_descuento_extra(1);

----------------------------------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION categoria_precio(p_precio DECIMAL)
RETURNS TEXT AS $$
BEGIN
RETURN CASE
WHEN p_precio < 50 THEN 'Barato'
WHEN p_precio < 200 THEN 'Medio'
ELSE 'Caro'
END;
END;
$$ LANGUAGE plpgsql;

SELECT categoria_precio(75);

CREATE OR REPLACE FUNCTION nivel_stock(v_stock INT)
RETURNS TEXT AS $$
BEGIN 
RETURN CASE
WHEN v_stock < 20 THEN 'Poco'
WHEN v_stock < 100 THEN 'Suficiente'
ELSE 'Bastante'
END;
END;
$$ LANGUAGE plpgsql;


SELECT nivel_stock(12);

CREATE OR REPLACE FUNCTION impuesto_precio(p_precio DECIMAL)
RETURNS DECIMAL(10,2) AS $$
BEGIN
RETURN p_precio * (
	CASE
		WHEN p_precio <= 100 THEN 1.05
		WHEN p_precio <= 200 THEN 1.12
		ELSE 1.19
	END
);
END;
$$ LANGUAGE plpgsql;

SELECT impuesto_por_precio(150);

CREATE OR REPLACE FUNCTION estado_producto(
p_precio DECIMAL,
p_stock INT
)
RETURNS TEXT AS $$
BEGIN
RETURN CASE
WHEN p_precio < 50 AND p_stock > 10 THEN 'Barato y stock Alto'
WHEN p_precio < 50 AND p_stock > 0 THEN 'Barato y stock bajo'
WHEN p_precio >= 50 AND p_stock = 0 THEN 'Barato y sin stock'
ELSE 'Normal'
END;
END;
$$ LANGUAGE plpgsql;

SELECT estado_producto(40, 15);

CREATE OR REPLACE FUNCTION precio_final_con_mensaje(p_precio DECIMAL)
RETURNS TEXT AS $$
DECLARE 
    v_impuesto DECIMAL(10,2);
    v_precio_total DECIMAL(10,2);
    v_clase TEXT;   -- ahora es TEXT, no INT
BEGIN
    -- 1) calcula el impuesto según el precio
    v_impuesto := CASE
        WHEN p_precio <= 100 THEN 1.05
        WHEN p_precio <= 200 THEN 1.12
        ELSE 1.19
    END;

    -- 2) calcula el precio total con impuesto
    v_precio_total := p_precio * v_impuesto;

    -- 3) clasifica el producto según EL VALOR del precio final
    v_clase := CASE 
        WHEN v_precio_total <= 100 THEN 'Económico'    -- error tuyo: "Economico" → 'Económico'
        WHEN v_precio_total <= 500 THEN 'Medio'
        ELSE 'Premium'
    END;

    -- 4) devuelve texto formateado
    RETURN v_clase || ' - $' || v_precio_total::TEXT;
END;
$$ LANGUAGE plpgsql;

SELECT precio_final_con_mensaje(120);

--funciones crud

CREATE OR REPLACE FUNCTION fn_insertar_productos(
p_nombre TEXT,
p_stock INT,
p_precio DECIMAL(10,2))
RETURNS INT AS $$
DECLARE 
v_id INT;
BEGIN
INSERT INTO productos (nombre,stock,precio)
VALUES (p_nombre,p_stock,p_precio)
RETURNING id INTO v_id;
RETURN v_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION up_productos(
p_id_producto INT,
p_nombre TEXT,
p_precio DECIMAL(10,2))
RETURNS BOOLEAN AS $$
DECLARE 
v_actualizado INT;

CREATE OR REPLACE FUNCTION fn_insertar_productos(
p_nombre TEXT,
p_apellido TEXT,
p_precio DECIMAL(10,2)
)
RETURNS TEXT AS $$
BEGIN
INSERT INTO productos (nombre,apellido,precio)
VALUES (p_nombre,p_apellido,p_precio);
RETURN 'Producto Creado';
END;
$$ LANGUAGE plpgsql;

SELECT fn_insertar_productos('Laptop', 'ACER', 800.00);

CREATE OR REPLACE FUNCTION fn_actualizar(
p_id INT,
p_nombre TEXT,
p_apellido TEXT,
p_precio DECIMAL(10,2)
)
RETURNS TEXT AS $$
BEGIN
UPDATE productos 
SET
nombre=p_nombre,
apellido=p_apellido,
precio=p_precio WHERE id=p_id;
RETURN 'producto actualizado';
END;
$$ LANGUAGE plpgsql;

SELECT fn_actualizar(1, 'David', 'Iwanaga', 8000);

SELECT * FROM productos;

CREATE OR REPLACE FUNCTION fn_borrar(
p_id Int
)
RETURNS TEXT AS $$
BEGIN
DELETE FROM productos WHERE id=p_id;
RETURN 'Eliminado';
END;
$$ LANGUAGE plpgsql;

SELECT fn_borrar(5);

SELECT * FROM productos;

CREATE OR REPLACE FUNCTION fn_get(
p_id INT
)
RETURNS TEXT AS $$
DECLARE
p_nombre TEXT;
p_apellido TEXT;
p_precio DECIMAL(10,2);
p_stock INT;
p_activo BOOLEAN;
v_info TEXT;
BEGIN
SELECT nombre,apellido,precio,stock,activo 
INTO
p_nombre,
p_apellido,
p_precio,
p_stock,
p_activo
FROM productos 
WHERE id=p_id;

v_info:= p_nombre || ' ' || p_precio::TEXT || ' ' || p_stock::TEXT ;
RETURN v_info;

END;
$$ LANGUAGE plpgsql;


SELECT * FROM productos;

SELECT fn_get(1);

-----------------------------------------
--procedure

CREATE OR REPLACE PROCEDURE pr_saludar()
LANGUAGE plpgsql
AS $$
BEGIN 
RAISE NOTICE 'hola';
END;
$$;

CALL pr_saludar();

CREATE OR REPLACE PROCEDURE revisar_stock(p_stock INT)
LANGUAGE plpgsql
AS $$
BEGIN
IF p_stock> 0 THEN
RAISE NOTICE 'Hay stock';
ELSE
RAISE NOTICE 'No hay stock';
END IF;
END;
$$;

CALL revisar_stock(5);

CREATE OR REPLACE PROCEDURE mostrar_accion(p_accion TEXT)
LANGUAGE plpgsql
AS $$
BEGIN 
CASE p_accion
WHEN 'Insertar' THEN 
RAISE NOTICE 'Vas a insertar';
WHEN 'Actualizar' THEN
RAISE NOTICE 'Vas actualizar';
WHEN 'Borrar' THEN
RAISE NOTICE 'Vas a borrar';
ELSE
RAISE NOTICE 'Accion no reconocida';
END CASE;
END;
$$;

CALL mostrar_accion('Insertar');

CREATE OR REPLACE PROCEDURE insertar_productos(
p_nombre TEXT,
p_apellido TEXT,
p_precio DECIMAL(10,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
INSERT INTO productos (nombre,apellido,precio)
VALUES (p_nombre,p_apellido,p_precio);
END;
$$;


CALL insertar_productoS('Laptop', 'HP', 800.00);

SELECT * FROM productos;


CREATE OR REPLACE PROCEDURE actualizar_producto2(
p_id INT,
p_nombre TEXT,
p_apellido TEXT,
p_precio DECIMAL(10,2),
p_stock INT,
p_activo BOOLEAN
)
LANGUAGE plpgsql
AS $$
BEGIN
UPDATE productos 
SET
nombre=p_nombre,
apellido=p_apellido,
precio=p_precio,
stock=p_stock,
activo=p_activo
WHERE id=p_id;
END;
$$;

SELECT * FROM productos;

CALL actualizar_producto2(1, 'Laptop Gamer', 'ASUS', 900.00,4,true);

CREATE OR REPLACE PROCEDURE borrar_producto2(
p_id INT
)
LANGUAGE plpgsql
AS $$
BEGIN
DELETE FROM productos WHERE id=p_id;
RAISE NOTICE 'Borrado producto';
END;
$$;

CALL borrar_producto2(1);








create table personas(
id serial pri
)
