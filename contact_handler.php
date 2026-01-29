<!-- if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "v_dorarch@hotmail.com";

    $name    = filter_var(trim($_POST["full_name"]), FILTER_SANITIZE_STRING);
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject_line = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = htmlspecialchars(trim($_POST["message"]));


    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }


    $email_subject = "Vasant Dora Oeuvre: " . $subject_line;

    $email_content = "<html><body>";
    $email_content .= "<h2>New Inquiry from Website</h2>";
    $email_content .= "<p><strong>Name:</strong> {$name}</p>";
    $email_content .= "<p><strong>Email:</strong> {$email}</p>";
    $email_content .= "<p><strong>Subject:</strong> {$subject_line}</p>";
    $email_content .= "<p><strong>Message:</strong><br>{$message}</p>";
    $email_content .= "</body></html>";

    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Website Inquiry <noreply@yourdomain.com>" . "\r\n";
    $headers .= "Reply-To: {$email}" . "\r\n";

    
    if (mail($to, $email_subject, $email_content, $headers)) {

        header("Location: contact.html?status=success");
        echo "Thank you! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}  -->

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // 1. Client receiving email (Hotmail is OK)
    $to = "v_dorarch@hotmail.com";

    // 2. Collect & sanitize input
    $name    = trim($_POST["full_name"] ?? '');
    $email   = trim($_POST["email"] ?? '');
    $subject = trim($_POST["subject"] ?? '');
    $message = trim($_POST["message"] ?? '');

    // Prevent header injection
    $name  = str_replace(["\r", "\n"], '', $name);
    $email = str_replace(["\r", "\n"], '', $email);

    // Sanitize
    $name    = filter_var($name, FILTER_SANITIZE_SPECIAL_CHARS);
    $email   = filter_var($email, FILTER_SANITIZE_EMAIL);
    $subject = filter_var($subject, FILTER_SANITIZE_SPECIAL_CHARS);
    $message = htmlspecialchars($message);

    // 3. Validate required fields
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form correctly.";
        exit;
    }

    // 4. Email subject
    $email_subject = "Website Inquiry – Vasant Dora";

    // 5. Email body (HTML)
    $email_content = "
    <html>
    <body style='font-family: Arial, sans-serif; line-height: 1.6;'>
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Subject:</strong> {$subject}</p>
        <p><strong>Message:</strong><br>{$message}</p>
        <hr>
        <p style='font-size:12px;color:#666;'>
            Sent from the website contact form.
        </p>
    </body>
    </html>";

    // 6. Headers (CRITICAL PART)
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Vasant Dora Website <contact@vasantdora.com>\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 7. Send email
    if (mail($to, $email_subject, $email_content, $headers)) {
        header("Location: contact.html?status=success");
        exit;
    } else {
        http_response_code(500);
        echo "Message could not be sent. Please try again later.";
    }
} else {
    http_response_code(403);
    echo "Invalid request.";
}
?>