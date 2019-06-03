<!DOCTYPE html>
<html>
  <?php
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Credentials: true")
      header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
      header('Content-type: application/json');
      readfile('data/dealers.geojson');
  ?>
  <head>
  
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">    
      <link rel="icon" href="../favicon.ico">
  
      <title>GB Group - Soil preparation equipment &amp; services for farmers - Grégoire Besson, Rabe, Agriway</title>
      <meta name="description" content="Discover the GB Group: brands, subsidiaries, product ranges, and team. Contact us to become a dealer, supplier, part of the team or a customer.">
      <meta name="author" content="GB Group">
  
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">
      <link href="css/bootstrap.min.css" rel="stylesheet">
      <link href="css/style.css" rel="stylesheet">
  
      <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
      <link rel="manifest" href="../manifest.json">
      <link rel="mask-icon" href="../safari-pinned-tab.svg" color="#3b3b3c">
      <meta name="theme-color" content="#ffffff">
  
      <!-- Schema.org markup for Google+ -->
      <meta itemprop="name" content="GB group, concessionnaire en France, Belgique, Suisse">
      <meta itemprop="description" content="Trouvez le concessionnaire de nos marques, gregoire BEsson et/ou Rabe le plus proche">
      <meta itemprop="image" content="https://gb-group.co/img/banner.jpg">
  
      <!-- Twitter Card data -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:site" content="@gbgroup_">
      <meta name="twitter:title" content="GB group, concessionnaire en France, Belgique, Suisse">
      <meta name="twitter:description" content="Trouvez le concessionnaire de nos marques, gregoire BEsson et/ou Rabe le plus proche">
      <meta name="twitter:creator" content="@gbgroup_">
      <meta name="twitter:image:src" content="https://gb-group.co/img/banner.jpg">
  
      <!-- Open Graph data -->
      <meta property="og:title" content="GB group, concessionnaire en France, Belgique, Suisse" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://gb-group.co/" />
      <meta property="og:image" content="https://gb-group.co/img/banner.jpg" />
      <meta property="og:description" content="Trouvez le concessionnaire de nos marques, gregoire BEsson et/ou Rabe le plus proche." />
      <meta property="og:site_name" content="France, concessionnaire" />
      <meta property="article:published_time" content="2017-11-01T08:00:00+01:00" />
      <meta property="fb:admins" content="1477915959172473" />
      
      <meta name="google-site-verification" content="hrROoa8VkBfFabDjdt0nb6Nd2OAY6Y10_YNS30nSUS0" />
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130035950-3"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-130035950-3');
      </script>
                
  </head>
  <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#"><img src="img/logo-gb-group.png" height="50px"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
            &nbsp;
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="https://parts.gb-group.co" target="_blank">Parts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://marketing.gb-group.co" target="_blank">Marketing</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="https://www.gregoire-besson.com/fr" target="_blank">
                      <img src="img/logo-gregoire-besson-white-oncolor.png" width="35px">
                  </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.rabe-gb.de/fr/" target="_blank">
                    <img src="img/logo-rabe-white-oncolor.png" width="35px">
                </a>
            </li>
            </ul>
          </div>
        </nav>
        <div class="titre">
          <div class="container">
            <div class="row">
              <div class="col-3"></div>
              <div class="col-6">
                  <h3 class="text-center">Find your nearest dealer</h3>
              </div>
              <div class="col-1">
                <button onclick="initMap()" class="btn btn-GB">All</button>
              </div>
              <div class="col-1">
                <button onclick="initMap('gregoire')" class="btn btn-Gregoire">Gregoire <br>Besson</button>
              </div>
              <div class="col-1">
                <button onclick="initMap('rabe')" class="btn btn-Rabe">Rabe</button>
              </div>
            </div>
          </div>
        </div>
    <!--The div element for the map -->
    <div id="map"></div>

    <div class="cookies" id="bandeau-cookies">
      <div class="row">
        <div class="col-md-8 col-sm-6">
            <small><p>By continuing your visit to this site, you accept the use of cookies to perform statistics, analyze your navigation, customize your route, offer targeted advertising tailored to your interests, communications and personalized content, and carry out direct commercial prospecting actions (email, SMS ...)</p></small>
        </div>
        <div class="col-md-2 responsive text-center">
            <button class="btn btn-GB" id="cookies" onClick="infoRemove()">OK</button>
        </div>
        <div class="col-md-2 responsive text-center">
            <a href="http://marketing.cellar.services.clever-cloud.com/Legal_information/Data%20protection%20policy%20of%20the%20website.pdf" target="_blank" class="btn btn-GB">Plus d'info</a>
        </div>
      
      </div>
    </div>

    <script src="js/banner.js"></script>
    <script src="js/jquery-3.2.1.slim.min.js"></script>
    <script src="js/oms.min.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/src/markerclusterer.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <script src="js/script.js"></script>
    
    </script>
    <!--Load the API from the specified URL
    * The async attribute allows the browser to render the page while the API loads
    * The key parameter will contain your own API key (which is not needed for this tutorial)
    * The callback parameter executes the initMap() function
    -->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnVrN5f_hnVMr-IqbC-KCLVEaxxxSS4nc&callback=initMap">
    </script>
  </body>
</html>