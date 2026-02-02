IPPBLOCK Payment Gateway Integration

Sistema de integración de pagos con PayPal para la plataforma IPPBLOCK.
Este módulo permite a los usuarios recargar créditos de manera segura, verificando primero su existencia en la base de datos de la plataforma.

🚀 Características

Validación de Base de Datos:

Verifica que el correo ingresado exista realmente en la base de datos users antes de permitir el pago.

Previene pagos de usuarios no registrados o erróneos.

Integración PayPal Smart Buttons:

Uso del SDK oficial de PayPal.

Procesamiento seguro de pagos en USD.

Sistema de Notificaciones Automáticas:

📩 Al Cliente: Envía un recibo digital confirmando el pago y la próxima asignación de créditos.

🔔 Al Administrador: Envía una alerta inmediata con los detalles del usuario y el monto para la asignación manual o automática de créditos.

🛠 Tecnologías

Frontend: HTML5, CSS3 (Estilo corporativo IPPBLOCK), JavaScript.

Backend: Node.js, Express.

Base de Datos: MySQL (mysql2).

Email: Nodemailer (SMTP).

⚙️ Instalación y Uso

Clonar el repositorio:

git clone [https://github.com/tu-usuario/ippblock-pagos.git](https://github.com/tu-usuario/ippblock-pagos.git)


Instalar dependencias:

npm install


Configurar variables de entorno:

Renombrar el archivo .env.example a .env.

Llenar los datos de conexión a MySQL y credenciales de correo.

Ejecutar el servidor:

npm start


Abrir en el navegador: http://localhost:3000

Desarrollado para IPPBLOCK.
