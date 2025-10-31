<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect inputs safely
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $subjectInput = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

    // Validate email
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "invalid_email";
        exit;
    }

    $to = "info@kindhaven.net";

    // Determine which form was submitted
    if (empty($name) && empty($phone) && empty($message)) {
        // Newsletter
        $subject = "New Newsletter Subscription";
        $body = "A new user subscribed to the newsletter:\n\nEmail: $email\n";
    } else {
        // Contact form (either version)
        $subject = !empty($subjectInput) ? "Contact Form: $subjectInput" : "New Contact Form Submission from $name";
        $body = "You have received a new message from your website contact form:\n\n" .
                "Name: $name\n" .
                "Email: $email\n";

        if (!empty($phone)) {
            $body .= "Phone: $phone\n";
        }

        if (!empty($subjectInput)) {
            $body .= "Subject: $subjectInput\n";
        }

        if (!empty($message)) {
            $body .= "\nMessage:\n$message\n";
        }
    }

    // Set headers (better deliverability)
    $headers = "From: KindHaven Website <no-reply@kindhaven.net>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "invalid";
}
?>
