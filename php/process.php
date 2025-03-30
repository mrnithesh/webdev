<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);

    echo "<h1>Thank You, $name!</h1>";
    echo "<p>We have received your message and will contact you at $email soon.</p>";
    echo "<a href='index.php'>Go Back</a>";
} else {
    header("Location: contact.php");
    exit();
}
?>
