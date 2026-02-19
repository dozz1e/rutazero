<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $name = strip_tags(trim($_POST["nombre"]));
    $company = strip_tags(trim($_POST["empresa"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["telefono"]));
    $message = strip_tags(trim($_POST["mensaje"]));

    // Validate data
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Por favor complete los campos obligatorios."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Dirección de correo no válida."]);
        exit;
    }

    // Recipient email
    $recipient = "contacto@rutazero.cl";
    $subject = "Nueva solicitud de cotización - RutaZero: $name";

    // Email content
    $email_content = "Has recibido una nueva solicitud desde el sitio web de RutaZero.\n\n";
    $email_content .= "Nombre: $name\n";
    $email_content .= "Empresa: $company\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Teléfono: $phone\n\n";
    $email_content .= "Detalle del Requerimiento:\n$message\n";

    // Email headers
    $headers = "From: RutaZero Web <no-reply@rutazero.cl>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($recipient, $subject, $email_content, $headers)) {
        echo json_encode(["status" => "success", "message" => "Mensaje enviado correctamente."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Hubo un error al enviar el mensaje. Intente más tarde."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Acceso no autorizado."]);
}
?>
