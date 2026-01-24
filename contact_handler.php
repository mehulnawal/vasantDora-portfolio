<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "v_dorarch@hotmail.com";

    // 2. Collect and sanitize form data
    $name    = filter_var(trim($_POST["full_name"]), FILTER_SANITIZE_STRING);
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject_line = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = htmlspecialchars(trim($_POST["message"]));

    // 3. Validate data
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // 4. Prepare Email Content
    $email_subject = "Vasant Dora Oeuvre: " . $subject_line;

    $email_content = "<html><body>";
    $email_content .= "<h2>New Inquiry from Website</h2>";
    $email_content .= "<p><strong>Name:</strong> {$name}</p>";
    $email_content .= "<p><strong>Email:</strong> {$email}</p>";
    $email_content .= "<p><strong>Subject:</strong> {$subject_line}</p>";
    $email_content .= "<p><strong>Message:</strong><br>{$message}</p>";
    $email_content .= "</body></html>";

    // 5. Set Email Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Website Inquiry <noreply@yourdomain.com>" . "\r\n";
    $headers .= "Reply-To: {$email}" . "\r\n";

    // 6. Send Email
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
}
