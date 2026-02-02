require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public')); // Sirve el archivo index.html

// --- 1. CONFIGURACIÓN BASE DE DATOS ---
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la BD:', err);
        return;
    }
    console.log('Conectado a la Base de Datos MySQL');
});

// --- 2. CONFIGURACIÓN DE CORREO (SMTP) ---
const transporter = nodemailer.createTransport({
    service: 'gmail', // O configura host/port si usas otro proveedor
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// --- RUTA A: VERIFICAR USUARIO ---
app.post('/api/check-user', (req, res) => {
    const { email } = req.body;
    
    // Consulta simple: ¿Existe este email en la tabla 'users'?
    // No importa el dominio, solo que esté en la DB.
    const query = 'SELECT * FROM users WHERE email = ?';
    
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error de servidor' });
        }
        
        // Si results.length > 0, significa que el usuario existe
        if (results.length > 0) {
            res.json({ existe: true });
        } else {
            res.json({ existe: false }); // Correo no encontrado
        }
    });
});

// --- RUTA B: PROCESAR PAGO Y ENVIAR ALERTAS ---
app.post('/api/payment-success', (req, res) => {
    const { email, amount, orderID, payerName } = req.body;

    console.log(`Pago recibido de ${email} por $${amount}`);

    // 1. Correo al Administrador (TÚ)
    const mailOptionsAdmin = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_ADMIN, 
        subject: `💰 PAGO RECIBIDO: Asignar créditos a ${email}`,
        text: `Hola Admin,\n\nSe ha confirmado un pago.\n\nUsuario: ${email}\nMonto: $${amount} USD\nID PayPal: ${orderID}\nPagado por: ${payerName}\n\nPor favor ingresa al panel y asigna los créditos correspondientes.`
    };

    // 2. Correo al Cliente
    const mailOptionsClient = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmación de Pago - IPPBLOCK',
        html: `
            <h1 style="color:#D32F2F;">¡Pago Exitoso!</h1>
            <p>Hola,</p>
            <p>Hemos recibido tu pago de <strong>$${amount} USD</strong> correctamente.</p>
            <p>Tus créditos están siendo asignados a tu cuenta y los verás reflejados en breve.</p>
            <p>ID de Transacción: ${orderID}</p>
            <br>
            <p>Atentamente,<br>El equipo de IPPBLOCK</p>
        `
    };

    // Enviar ambos correos
    transporter.sendMail(mailOptionsAdmin);
    transporter.sendMail(mailOptionsClient);

    res.json({ status: 'success' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
