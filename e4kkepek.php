<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E4K eredmenyeim</title>
    <style>
        img {
            width: 200px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <nav>
        <a href="index.html">Főoldal</a>
        <a href="gallery.php">Képgaléria</a>
    </nav>
    <h1>Képgaléria</h1>
    <div>
        <?php
        $dirname = "e4kkepek/";
        $images = glob($dirname . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);

        foreach($images as $image) {
            echo '<img src="' . $image . '">';
        }
        ?>
    </div>
</body>
</html>
