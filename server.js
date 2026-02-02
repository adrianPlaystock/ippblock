{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red202\green202\blue202;\red23\green24\blue24;\red212\green212\blue212;
\red113\green192\blue131;\red183\green111\blue247;\red109\green115\blue120;\red54\green192\blue160;\red246\green124\blue48;
\red238\green46\blue56;}
{\*\expandedcolortbl;;\cssrgb\c83137\c83137\c83137;\cssrgb\c11765\c12157\c12549;\cssrgb\c86275\c86275\c86275;
\cssrgb\c50588\c78824\c58431;\cssrgb\c77255\c54118\c97647;\cssrgb\c50196\c52549\c54510;\cssrgb\c23922\c78824\c69020;\cssrgb\c98039\c56471\c24314;
\cssrgb\c95686\c27843\c27843;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 require\cf4 \strokec4 (\cf5 \strokec5 'dotenv'\cf4 \strokec4 ).\cf2 \strokec2 config\cf4 \strokec4 ();\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 const\cf2 \strokec2  express \cf4 \strokec4 =\cf2 \strokec2  require\cf4 \strokec4 (\cf5 \strokec5 'express'\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\cf6 \cb3 \strokec6 const\cf2 \strokec2  mysql \cf4 \strokec4 =\cf2 \strokec2  require\cf4 \strokec4 (\cf5 \strokec5 'mysql2'\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\cf6 \cb3 \strokec6 const\cf2 \strokec2  nodemailer \cf4 \strokec4 =\cf2 \strokec2  require\cf4 \strokec4 (\cf5 \strokec5 'nodemailer'\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\cf6 \cb3 \strokec6 const\cf2 \strokec2  path \cf4 \strokec4 =\cf2 \strokec2  require\cf4 \strokec4 (\cf5 \strokec5 'path'\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\cf6 \cb3 \strokec6 const\cf2 \strokec2  app \cf4 \strokec4 =\cf2 \strokec2  express\cf4 \strokec4 ();\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 app\cf4 \strokec4 .\cf2 \strokec2 use\cf4 \strokec4 (\cf2 \strokec2 express\cf4 \strokec4 .\cf2 \strokec2 json\cf4 \strokec4 ());\cf2 \cb1 \strokec2 \
\cb3 app\cf4 \strokec4 .\cf2 \strokec2 use\cf4 \strokec4 (\cf2 \strokec2 express\cf4 \strokec4 .\cf6 \strokec6 static\cf4 \strokec4 (\cf5 \strokec5 'public'\cf4 \strokec4 ));\cf2 \strokec2  \cf7 \strokec7 // Sirve el archivo index.html\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // --- 1. CONFIGURACI\'d3N BASE DE DATOS ---\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 const\cf2 \strokec2  db \cf4 \strokec4 =\cf2 \strokec2  mysql\cf4 \strokec4 .\cf2 \strokec2 createConnection\cf4 \strokec4 (\{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3     host\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 DB_HOST\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3     user\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 DB_USER\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3     password\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 DB_PASS\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3     database\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 DB_NAME\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4 \});\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 db\cf4 \strokec4 .\cf2 \strokec2 connect\cf4 \strokec4 (\cf2 \strokec2 err \cf4 \strokec4 =>\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3     \cf6 \strokec6 if\cf2 \strokec2  \cf4 \strokec4 (\cf2 \strokec2 err\cf4 \strokec4 )\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3         console\cf4 \strokec4 .\cf2 \strokec2 error\cf4 \strokec4 (\cf5 \strokec5 'Error conectando a la BD:'\cf4 \strokec4 ,\cf2 \strokec2  err\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\cb3         \cf6 \strokec6 return\cf4 \strokec4 ;\cf2 \cb1 \strokec2 \
\cb3     \cf4 \strokec4 \}\cf2 \cb1 \strokec2 \
\cb3     console\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf5 \strokec5 'Conectado a la Base de Datos MySQL'\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4 \});\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // --- 2. CONFIGURACI\'d3N DE CORREO (SMTP) ---\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 const\cf2 \strokec2  transporter \cf4 \strokec4 =\cf2 \strokec2  nodemailer\cf4 \strokec4 .\cf2 \strokec2 createTransport\cf4 \strokec4 (\{\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3     service\cf4 \strokec4 :\cf2 \strokec2  \cf5 \strokec5 'gmail'\cf4 \strokec4 ,\cf2 \strokec2  \cf7 \strokec7 // O configura host/port si usas otro proveedor\cf2 \cb1 \strokec2 \
\cb3     auth\cf4 \strokec4 :\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3         user\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 EMAIL_USER\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3         pass\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 EMAIL_PASS\cf2 \cb1 \strokec2 \
\cb3     \cf4 \strokec4 \}\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4 \});\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // --- RUTA A: VERIFICAR USUARIO ---\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 app\cf4 \strokec4 .\cf2 \strokec2 post\cf4 \strokec4 (\cf5 \strokec5 '/api/check-user'\cf4 \strokec4 ,\cf2 \strokec2  \cf4 \strokec4 (\cf2 \strokec2 req\cf4 \strokec4 ,\cf2 \strokec2  res\cf4 \strokec4 )\cf2 \strokec2  \cf4 \strokec4 =>\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \strokec2  email \cf4 \strokec4 \}\cf2 \strokec2  \cf4 \strokec4 =\cf2 \strokec2  req\cf4 \strokec4 .\cf2 \strokec2 body\cf4 \strokec4 ;\cf2 \cb1 \strokec2 \
\cb3     \cb1 \
\cb3     \cf7 \strokec7 // Consulta simple: \'bfExiste este email en la tabla 'users'?\cf2 \cb1 \strokec2 \
\cb3     \cf7 \strokec7 // No importa el dominio, solo que est\'e9 en la DB.\cf2 \cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  query \cf4 \strokec4 =\cf2 \strokec2  \cf5 \strokec5 'SELECT * FROM users WHERE email = ?'\cf4 \strokec4 ;\cf2 \cb1 \strokec2 \
\cb3     \cb1 \
\cb3     db\cf4 \strokec4 .\cf2 \strokec2 query\cf4 \strokec4 (\cf2 \strokec2 query\cf4 \strokec4 ,\cf2 \strokec2  \cf4 \strokec4 [\cf2 \strokec2 email\cf4 \strokec4 ],\cf2 \strokec2  \cf4 \strokec4 (\cf2 \strokec2 err\cf4 \strokec4 ,\cf2 \strokec2  results\cf4 \strokec4 )\cf2 \strokec2  \cf4 \strokec4 =>\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3         \cf6 \strokec6 if\cf2 \strokec2  \cf4 \strokec4 (\cf2 \strokec2 err\cf4 \strokec4 )\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3             console\cf4 \strokec4 .\cf2 \strokec2 error\cf4 \strokec4 (\cf2 \strokec2 err\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\cb3             \cf6 \strokec6 return\cf2 \strokec2  res\cf4 \strokec4 .\cf2 \strokec2 status\cf4 \strokec4 (\cf9 \strokec9 500\cf4 \strokec4 ).\cf2 \strokec2 json\cf4 \strokec4 (\{\cf2 \strokec2  error\cf4 \strokec4 :\cf2 \strokec2  \cf5 \strokec5 'Error de servidor'\cf2 \strokec2  \cf4 \strokec4 \});\cf2 \cb1 \strokec2 \
\cb3         \cf4 \strokec4 \}\cf2 \cb1 \strokec2 \
\cb3         \cb1 \
\cb3         \cf7 \strokec7 // Si results.length > 0, significa que el usuario existe\cf2 \cb1 \strokec2 \
\cb3         \cf6 \strokec6 if\cf2 \strokec2  \cf4 \strokec4 (\cf2 \strokec2 results\cf4 \strokec4 .\cf2 \strokec2 length \cf4 \strokec4 >\cf2 \strokec2  \cf9 \strokec9 0\cf4 \strokec4 )\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3             res\cf4 \strokec4 .\cf2 \strokec2 json\cf4 \strokec4 (\{\cf2 \strokec2  existe\cf4 \strokec4 :\cf2 \strokec2  \cf6 \strokec6 true\cf2 \strokec2  \cf4 \strokec4 \});\cf2 \cb1 \strokec2 \
\cb3         \cf4 \strokec4 \}\cf2 \strokec2  \cf6 \strokec6 else\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3             res\cf4 \strokec4 .\cf2 \strokec2 json\cf4 \strokec4 (\{\cf2 \strokec2  existe\cf4 \strokec4 :\cf2 \strokec2  \cf6 \strokec6 false\cf2 \strokec2  \cf4 \strokec4 \});\cf2 \strokec2  \cf7 \strokec7 // Correo no encontrado\cf2 \cb1 \strokec2 \
\cb3         \cf4 \strokec4 \}\cf2 \cb1 \strokec2 \
\cb3     \cf4 \strokec4 \});\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4 \});\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // --- RUTA B: PROCESAR PAGO Y ENVIAR ALERTAS ---\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 app\cf4 \strokec4 .\cf2 \strokec2 post\cf4 \strokec4 (\cf5 \strokec5 '/api/payment-success'\cf4 \strokec4 ,\cf2 \strokec2  \cf4 \strokec4 (\cf2 \strokec2 req\cf4 \strokec4 ,\cf2 \strokec2  res\cf4 \strokec4 )\cf2 \strokec2  \cf4 \strokec4 =>\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \strokec2  email\cf4 \strokec4 ,\cf2 \strokec2  amount\cf4 \strokec4 ,\cf2 \strokec2  orderID\cf4 \strokec4 ,\cf2 \strokec2  payerName \cf4 \strokec4 \}\cf2 \strokec2  \cf4 \strokec4 =\cf2 \strokec2  req\cf4 \strokec4 .\cf2 \strokec2 body\cf4 \strokec4 ;\cf2 \cb1 \strokec2 \
\
\cb3     console\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf5 \strokec5 `Pago recibido de \cf4 \strokec4 $\{\cf2 \strokec2 email\cf4 \strokec4 \}\cf5 \strokec5  por \cf10 \cb3 \strokec10 $\cf4 \cb3 \strokec4 $\{\cf2 \strokec2 amount\cf4 \strokec4 \}\cf5 \strokec5 `\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\
\cb3     \cf7 \strokec7 // 1. Correo al Administrador (T\'da)\cf2 \cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  mailOptionsAdmin \cf4 \strokec4 =\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3         \cf6 \strokec6 from\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 EMAIL_USER\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3         to\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 EMAIL_ADMIN\cf4 \strokec4 ,\cf2 \strokec2  \cb1 \
\cb3         subject\cf4 \strokec4 :\cf2 \strokec2  \cf5 \strokec5 `\uc0\u55357 \u56496  PAGO RECIBIDO: Asignar cr\'e9ditos a \cf4 \strokec4 $\{\cf2 \strokec2 email\cf4 \strokec4 \}\cf5 \strokec5 `\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3         text\cf4 \strokec4 :\cf2 \strokec2  \cf5 \strokec5 `Hola Admin,\\n\\nSe ha confirmado un pago.\\n\\nUsuario: \cf4 \strokec4 $\{\cf2 \strokec2 email\cf4 \strokec4 \}\cf5 \strokec5 \\nMonto: \cf10 \cb3 \strokec10 $\cf4 \cb3 \strokec4 $\{\cf2 \strokec2 amount\cf4 \strokec4 \}\cf5 \strokec5  USD\\nID PayPal: \cf4 \strokec4 $\{\cf2 \strokec2 orderID\cf4 \strokec4 \}\cf5 \strokec5 \\nPagado por: \cf4 \strokec4 $\{\cf2 \strokec2 payerName\cf4 \strokec4 \}\cf5 \strokec5 \\n\\nPor favor ingresa al panel y asigna los cr\'e9ditos correspondientes.`\cf2 \cb1 \strokec2 \
\cb3     \cf4 \strokec4 \};\cf2 \cb1 \strokec2 \
\
\cb3     \cf7 \strokec7 // 2. Correo al Cliente\cf2 \cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  mailOptionsClient \cf4 \strokec4 =\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3         \cf6 \strokec6 from\cf4 \strokec4 :\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 EMAIL_USER\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3         to\cf4 \strokec4 :\cf2 \strokec2  email\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3         subject\cf4 \strokec4 :\cf2 \strokec2  \cf5 \strokec5 'Confirmaci\'f3n de Pago - IPPBLOCK'\cf4 \strokec4 ,\cf2 \cb1 \strokec2 \
\cb3         html\cf4 \strokec4 :\cf2 \strokec2  \cf5 \strokec5 `\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5             <h1 style="color:#D32F2F;">\'a1Pago Exitoso!</h1>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             <p>Hola,</p>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             <p>Hemos recibido tu pago de <strong>\cf10 \cb3 \strokec10 $\cf4 \cb3 \strokec4 $\{\cf2 \strokec2 amount\cf4 \strokec4 \}\cf5 \strokec5  USD</strong> correctamente.</p>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             <p>Tus cr\'e9ditos est\'e1n siendo asignados a tu cuenta y los ver\'e1s reflejados en breve.</p>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             <p>ID de Transacci\'f3n: \cf4 \strokec4 $\{\cf2 \strokec2 orderID\cf4 \strokec4 \}\cf5 \strokec5 </p>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             <br>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5             <p>Atentamente,<br>El equipo de IPPBLOCK</p>\cf2 \cb1 \strokec2 \
\cf5 \cb3 \strokec5         `\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3     \cf4 \strokec4 \};\cf2 \cb1 \strokec2 \
\
\cb3     \cf7 \strokec7 // Enviar ambos correos\cf2 \cb1 \strokec2 \
\cb3     transporter\cf4 \strokec4 .\cf2 \strokec2 sendMail\cf4 \strokec4 (\cf2 \strokec2 mailOptionsAdmin\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\cb3     transporter\cf4 \strokec4 .\cf2 \strokec2 sendMail\cf4 \strokec4 (\cf2 \strokec2 mailOptionsClient\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\
\cb3     res\cf4 \strokec4 .\cf2 \strokec2 json\cf4 \strokec4 (\{\cf2 \strokec2  status\cf4 \strokec4 :\cf2 \strokec2  \cf5 \strokec5 'success'\cf2 \strokec2  \cf4 \strokec4 \});\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4 \});\cf2 \cb1 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 const\cf2 \strokec2  \cf8 \strokec8 PORT\cf2 \strokec2  \cf4 \strokec4 =\cf2 \strokec2  process\cf4 \strokec4 .\cf2 \strokec2 env\cf4 \strokec4 .\cf8 \strokec8 PORT\cf2 \strokec2  \cf4 \strokec4 ||\cf2 \strokec2  \cf9 \strokec9 3000\cf4 \strokec4 ;\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 app\cf4 \strokec4 .\cf2 \strokec2 listen\cf4 \strokec4 (\cf8 \strokec8 PORT\cf4 \strokec4 ,\cf2 \strokec2  \cf4 \strokec4 ()\cf2 \strokec2  \cf4 \strokec4 =>\cf2 \strokec2  \cf4 \strokec4 \{\cf2 \cb1 \strokec2 \
\cb3     console\cf4 \strokec4 .\cf2 \strokec2 log\cf4 \strokec4 (\cf5 \strokec5 `Servidor corriendo en http://localhost:\cf4 \strokec4 $\{\cf8 \strokec8 PORT\cf4 \strokec4 \}\cf5 \strokec5 `\cf4 \strokec4 );\cf2 \cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 \strokec4 \});\cf2 \cb1 \strokec2 \
}