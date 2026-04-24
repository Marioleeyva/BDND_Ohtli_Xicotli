/*
 Navicat Premium Dump Script

 Source Server         : Mongo 8.2
 Source Server Type    : MongoDB
 Source Server Version : 80206 (8.2.6)
 Source Host           : localhost:27017
 Source Schema         : VideoGame_Othli_Xicotli

 Target Server Type    : MongoDB
 Target Server Version : 80206 (8.2.6)
 File Encoding         : 65001

 Date: 23/04/2026 17:54:15
*/


// ----------------------------
// Collection structure for promociones
// ----------------------------
db.getCollection("promociones").drop();
db.createCollection("promociones",{
    validator: {
        $jsonSchema: {
            properties: {
                clave: {
                    bsonType: "string",
                    title: "Clave",
                    description: "Identificador único asignado a cada registro dentro de una tabla. Este campo permite diferenciar un registro de otro y asegurar la integridad de los datos. Generalmente corresponde a la clave primaria y puede estar compuesto por uno o más atributos, los cuales no deben repetirse ni contener valores nulos."
                }
            },
            required: [
                "clave"
            ]
        }
    },
    validationLevel: "strict",
    validationAction: "error"
});

// ----------------------------
// Documents of promociones
// ----------------------------
db.getCollection("promociones").insert([ {
    _id: ObjectId("69dfca35c88592fe450d9c71"),
    clave: "promo_bienvenida_001",
    nombre: "Espíritu Othli",
    descripcion: "Recompensa inicial con monedas y energía para comenzar la aventura",
    costo: 15,
    estatus: "Activa",
    inicio: "2026-01-01 00:00:00"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69dfccb8c88592fe450d9c72"),
    clave: "promo_cafe_001",
    costo: 40,
    descripcion: "Bonus de frutas de café y energía en pistas de cafetales",
    nombre: "Ruta del Cafetal",
    vigencia: "2026-05-30 23:59:59",
    estatus: "Programada",
    inicio: "2026-05-01 00:00:00"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69dfcec6c88592fe450d9c73"),
    clave: "promo_velocidad_001",
    costo: 35,
    descripcion: "Boost de velocidad en carreras por tiempo limitado",
    inicio: "2026-04-21 00:00:00",
    nombre: "Viento de la Sierra",
    vigencia: "2026-04-30 23:59:59",
    estatus: "Activa"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69e8009a590c0b3bef090e41"),
    clave: "promo_frutas_001",
    costo: 50,
    descripcion: "Pack de frutas recolectables con mayor puntuación",
    nombre: "Cosecha Silvestre",
    estatus: "Programada",
    inicio: "2026-05-10 00:00:00",
    vigencia: "2026-06-15 23:59:59"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69e80130590c0b3bef090e42"),
    clave: "promo_ruta_001",
    costo: 70,
    descripcion: "Desbloquea una pista especial con obstáculos unicos ",
    estatus: "Programada",
    nombre: "Sendero Oculto",
    inicio: "2026-06-15 00:00:00",
    vigencia: "2026-07-01 23:59:59"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69e80184590c0b3bef090e43"),
    clave: "promo_personaje_001",
    costo: 120,
    descripcion: "Desbloquea personajes con mayor velocidad y agilidad",
    estatus: "Activa",
    nombre: "Espíritu Aguililla",
    inicio: "2026-01-1 00:00:00"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69e801d4590c0b3bef090e44"),
    clave: "promo_energia_001",
    costo: 25,
    descripcion: "Energía extra para carreras continuas",
    estatus: "Programada",
    nombre: "Energía de la Tierra",
    inicio: "2026-05-01 00:00:00",
    vigencia: "2026-05-20 23:59:59"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69e80289590c0b3bef090e45"),
    clave: "promo_evento_001",
    costo: 60,
    descripcion: "Evento especial con multiplicador de recompensas",
    estatus: "Activa",
    nombre: "Lluvia de Recompensas",
    inicio: "2026-04-22 00:00:00",
    vigencia: "2026-04-28 23:59:59"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69e802c5590c0b3bef090e46"),
    clave: "promo_temporada_001",
    costo: 90,
    descripcion: "Paquete temático con recursos exclusivos del entorno natural",
    estatus: "Finalizada",
    nombre: "Festival Año Nuevo",
    inicio: "2026-01-31 00:00:00",
    vigencia: "2026-01-01 23:59:59"
} ]);
db.getCollection("promociones").insert([ {
    _id: ObjectId("69e80336590c0b3bef090e47"),
    clave: "promo_vip_001",
    costo: 150,
    descripcion: "Menbresia con beneficos diarios y recompensas exclusivas",
    estatus: "Activa",
    nombre: "Guardián Othli",
    inicio: "2026-01-01 00:00:00"
} ]);

// ----------------------------
// Collection structure for ticket_soporte
// ----------------------------
db.getCollection("ticket_soporte").drop();
db.createCollection("ticket_soporte",{
    validator: {
        $jsonSchema: {
            properties: {
                usuario: {
                    bsonType: "string",
                    title: "Nickname del jugador",
                    description: "Identificador digital único y personalizado que representa a una persona, marca o personaje en redes sociales, juegos y plataformas en línea."
                }
            },
            required: [
                "usuario"
            ]
        }
    },
    validationLevel: "strict",
    validationAction: "error"
});

// ----------------------------
// Documents of ticket_soporte
// ----------------------------
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e80fda590c0b3bef090e50"),
    usuario: "MiniShadow",
    problema: "No me llegaron las 500 de cacao que compré",
    categoria: "monetizacion",
    prioridad: "alta",
    estado: "abierto",
    compra_id: "MP-44882910",
    monto: 99,
    fecha: "2026-04-22T09:01:00Z",
    notas: "Jugador adjunto comprobante. Verificar webhook de Mercado Pago."
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e81009590c0b3bef090e51"),
    categoria: "monetizacion",
    compra_id: "MP-66112233",
    estado: "abierto",
    fecha: "2026-04-22T11:05:00Z",
    monto: 49,
    notas: "Verificar estado en dashboard de Mercado Pago.",
    prioridad: "alta",
    problema: "Compré 300 de granos de café y no llegaron a mi cuenta",
    usuario: "LunaPlay"
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e81047590c0b3bef090e52"),
    categoria: "tecnico",
    compra_id: null,
    estado: "abierto",
    fecha: "2026-04-22T11:20:00Z",
    monto: null,
    notas: "Usuario iOS 17, iPhone 13. Solicitar logs de crash.",
    prioridad: "media",
    problema: "El juego se cierra al cargar el capítulo 4",
    usuario: "KidWolf"
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e8107f590c0b3bef090e53"),
    categoria: "cuenta",
    compra_id: null,
    estado: "en_proceso",
    fecha: "2026-04-22T11:45:00Z",
    monto: null,
    notas: "Revisar vinculación OAuth y estado de sesión.",
    prioridad: "alta",
    problema: "No puedo entrar con mi cuenta de Google",
    usuario: "IceKid"
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e8109d590c0b3bef090e54"),
    categoria: "monetizacion",
    compra_id: "MP-77223344",
    estado: "abierto",
    fecha: "2026-04-22T12:10:00Z",
    monto: 99,
    notas: "Compra realizada hace <24h. Elegible según política.",
    prioridad: "media",
    problema: "Compré cacao por error, quiero reembolso",
    usuario: "IceKid"
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e810cd590c0b3bef090e55"),
    categoria: "contenido",
    compra_id: null,
    estado: "abierto",
    fecha: "2026-04-22T12:35:00Z",
    monto: null,
    notas: "Verificar progreso en servidor y trigger de recompensa.",
    prioridad: "media",
    problema: "Terminé la misión del Jaguar pero no me dan la skin",
    usuario: "NightMiniX"
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e810f7590c0b3bef090e56"),
    categoria: "tecnico",
    compra_id: null,
    estado: "abierto",
    fecha: "2026-04-22T13:00:00Z",
    monto: null,
    notas: "Reporte desde zona rural. Revisar optimización de red.",
    prioridad: "baja",
    problema: "Mucho lag en el evento de Xicotepec en línea",
    usuario: "DarkMiniX"
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e81121590c0b3bef090e57"),
    categoria: "monetizacion",
    compra_id: "MP-88334455",
    estado: "en_proceso",
    fecha: "2026-04-22T13:25:00Z",
    monto: 149,
    notas: "Confirmar duplicado en provider. Preparar reembolso + compensación.",
    prioridad: "critica",
    problema: "Me cobraron dos veces el mismo paquete de cacao",
    usuario: "CyberKidX"
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e81159590c0b3bef090e58"),
    categoria: "cuenta",
    compra_id: null,
    estado: "abierto",
    fecha: "2026-04-22T13:50:00Z",
    monto: null,
    notas: "Verificar si el progreso está vinculado a cuenta cloud.",
    prioridad: "alta",
    problema: "Cambié de celular y no aparece mi progreso",
    usuario: "LunarKid"
} ]);
db.getCollection("ticket_soporte").insert([ {
    _id: ObjectId("69e8117b590c0b3bef090e59"),
    categoria: "monetizacion",
    compra_id: null,
    estado: "abierto",
    fecha: "2026-04-22T14:15:00Z",
    monto: null,
    notas: "Validar vigencia del código y límite de canje por usuario.",
    prioridad: "baja",
    problema: "El código XICO2026 no me da los 100 de maíz gratis",
    usuario: "PixelBoss"
} ]);

// ----------------------------
// Collection structure for valoraciones
// ----------------------------
db.getCollection("valoraciones").drop();
db.createCollection("valoraciones");

// ----------------------------
// Documents of valoraciones
// ----------------------------
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e814b0590c0b3bef090e5a"),
    usuario: "NeoKid",
    calificacion: 5,
    categoria: "juego",
    comentario: "Me encanta la historia y los elementos de Xicotepec. ¡Muy auténtico!",
    fecha: "2026-04-22T15:00:00Z",
    plataforma: "mobile_android",
    version_juego: "1.0.0",
    estado: "aprobado",
    tags: [
        "historia",
        "cultura",
        "recomendado"
    ]
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e81519590c0b3bef090e5b"),
    calificacion: 4,
    categoria: "juego",
    comentario: "Muy bonito visualmente, pero a veces se traba en mi celular",
    estado: "aprobado",
    fecha: "2026-04-22T15:10:00Z",
    plataforma: "mobile_android",
    tags: [
        "graficos",
        "rendimiento",
        "feedback"
    ],
    usuario: "FireMini",
    version_juego: "1.0.0"
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e8153b590c0b3bef090e5c"),
    calificacion: 5,
    categoria: "soporte",
    comentario: "Me resolvieron rápido el problema del cacao. ¡Gracias!",
    estado: "aprobado",
    fecha: "2026-04-22T15:25:00Z",
    plataforma: "mobile_ios",
    tags: [
        "soporte",
        "rapidez",
        "satisfaccion"
    ],
    usuario: "IronKid",
    version_juego: "1.0.0"
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e81561590c0b3bef090e5d"),
    calificacion: 3,
    categoria: "compra",
    comentario: "Los precios están bien, pero me gustaría más opciones de pago",
    estado: "aprobado",
    fecha: "2026-04-22T15:40:00Z",
    plataforma: "mobile_android",
    tags: [
        "monetizacion",
        "pagos",
        "sugerencia"
    ],
    usuario: "SilverKid",
    version_juego: "1.0.0"
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e81572590c0b3bef090e5e"),
    calificacion: 5,
    categoria: "evento",
    comentario: "El evento de Xicotepec está increíble. Se siente muy nuestro",
    estado: "aprobado",
    fecha: "2026-04-22T16:00:00Z",
    plataforma: "mobile_android",
    tags: [
        "evento",
        "xicotepec",
        "cultura",
        "orgullo"
    ],
    usuario: "VenomMini",
    version_juego: "1.0.0"
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e815a8590c0b3bef090e5f"),
    calificacion: 2,
    categoria: "juego",
    comentario: "Las misiones se repiten mucho, necesita más variedad",
    estado: "aprobado",
    fecha: "2026-04-22T16:20:00Z",
    plataforma: "mobile_ios",
    tags: [
        "gameplay",
        "repetitivo",
        "mejora"
    ],
    usuario: "MysticKid",
    version_juego: "1.0.0"
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e815d8590c0b3bef090e60"),
    calificacion: 4,
    categoria: "juego",
    comentario: "",
    estado: "aprobado",
    fecha: "2026-04-22T16:45:00Z",
    plataforma: "mobile_android",
    tags: [
        "sin_comentario"
    ],
    usuario: "AlphaKid",
    version_juego: "1.0.0"
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e815f6590c0b3bef090e61"),
    calificacion: 1,
    categoria: "soporte",
    comentario: "Nadie me contesta, muy mal servicio",
    estado: "pendiente",
    fecha: "2026-04-22T17:05:00Z",
    plataforma: "mobile_android",
    tags: [
        "soporte",
        "queja",
        "moderacion"
    ],
    usuario: "LunarMini",
    version_juego: "1.0.0"
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e8161b590c0b3bef090e62"),
    calificacion: 4,
    categoria: "juego",
    comentario: "Los subtítulos ayudan mucho. Falta opción para daltonicos",
    estado: "aprobado",
    fecha: "2026-04-22T17:30:00Z",
    plataforma: "mobile_ios",
    tags: [
        "accesibilidad",
        "subtitulos",
        "sugerencia"
    ],
    usuario: "ObsidianKid",
    version_juego: "1.0.0"
} ]);
db.getCollection("valoraciones").insert([ {
    _id: ObjectId("69e81638590c0b3bef090e63"),
    calificacion: 5,
    categoria: "juego",
    comentario: "Se lo recomendé a toda mi familia. Orgullo de Xicotepec",
    estado: "aprobado",
    fecha: "2026-04-22T17:55:00Z",
    plataforma: "mobile_android",
    tags: [
        "recomendacion",
        "familia",
        "orgullo",
        "viral"
    ],
    usuario: "InfernoKid",
    version_juego: "1.0.0"
} ]);
