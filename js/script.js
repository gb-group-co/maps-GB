let dataFrance = require('../data/france.geojson');
let dataGermany = require('../data/german.geojson');
let dataCanada = require('../data/canada.geojson');
let dataItaly = require('../data/italy.geojson');
let dataWorld = require('../data/export.geojson');
let dataEngland = require('../data/england.geojson');


function initMap() {
  var styledMapType = new google.maps.StyledMapType(
    [
{
"elementType": "geometry",
"stylers": [
{
  "color": "#f5f5f5"
}
]
},
{
"elementType": "labels.icon",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"elementType": "labels.text.fill",
"stylers": [
{
  "color": "#616161"
}
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
{
  "color": "#f5f5f5"
}
]
},
{
"featureType": "administrative",
"stylers": [
{
  "visibility": "on"
}
]
},
{
"featureType": "administrative.country",
"elementType": "geometry",
"stylers": [
{
  "color": "#2c2c2c"
}
]
},
{
"featureType": "administrative.land_parcel",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
{
  "color": "#bdbdbd"
}
]
},
{
"featureType": "administrative.locality",
"stylers": [
{
  "visibility": "simplified"
}
]
},
{
"featureType": "administrative.neighborhood",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "landscape",
"stylers": [
{
  "color": "#eeeeee"
}
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
{
  "color": "#eeeeee"
}
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
{
  "color": "#757575"
}
]
},
{
"featureType": "poi.attraction",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "poi.business",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "poi.government",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "poi.medical",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
{
  "color": "#e1e1e1"
}
]
},
{
"featureType": "poi.park",
"elementType": "labels.text",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
{
  "color": "#9e9e9e"
}
]
},
{
"featureType": "poi.place_of_worship",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "poi.school",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "poi.sports_complex",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "road",
"stylers": [
{
  "color": "#0d0d0d"
}
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
{
  "color": "#ffffff"
}
]
},
{
"featureType": "road",
"elementType": "labels",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
{
  "color": "#cecece"
}
]
},
{
"featureType": "road.arterial",
"elementType": "labels",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "road.arterial",
"elementType": "labels.text.fill",
"stylers": [
{
  "color": "#757575"
}
]
},
{
"featureType": "road.highway",
"stylers": [
{
  "visibility": "simplified"
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
{
  "color": "#c3c3c3"
}
]
},
{
"featureType": "road.highway",
"elementType": "labels",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "road.highway",
"elementType": "labels.text.fill",
"stylers": [
{
  "color": "#616161"
}
]
},
{
"featureType": "road.local",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
{
  "color": "#9e9e9e"
}
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
{
  "color": "#e5e5e5"
}
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
{
  "color": "#eeeeee"
}
]
},
{
"featureType": "water",
"stylers": [
{
  "color": "#ceeaff"
}
]
},
{
"featureType": "water",
"elementType": "labels.text",
"stylers": [
{
  "visibility": "off"
}
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
{
  "color": "#9e9e9e"
}
]
}
],
      {name: 'Styled Map'});

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 46.227638,lng: 2.213749},
    mapTypeControlsOptions: {
      mapTypeId: 'roadmap'
    }
  });
  
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  setMarkers(map)
}

function setMarkers(map) {
  var image = {
    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    scale: 2,
    strokeWeight:2,
    strokeColor:"#B40404"
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  var image = {
    rabe: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 2,
        strokeWeight:1,
        strokeColor:"#0076BD"
    },
    gregoire: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 2,
        strokeWeight:1,
        strokeColor:"#B40404"
    },
    group: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 2,
        strokeWeight:1,
        strokeColor:"#3C3C3B"
    }
  };

  for (var i = 0; i < france.length; i++) {
    var data = france[i];

    const logo = (brand) => {
        if (brand === "rabe") {
           var logo = '<a href="http://www.rabe-gb.de/fr/" target="_blank"><img src="img/rabe.png" alt="Rabe"></a>'
        } else if (brand === "gregoire") {
          logo = '<a href="https://www.gregoire-besson.com/fr" target="_blank"><img src="img/gregoire-besson.png" alt="Gregoire-Besson"></a>'
        } else {
          logo = '<a href="https://www.gregoire-besson.com/fr" target="_blank"><img src="img/gregoire-besson.png" alt="GB-group"></a>&nbsp;&nbsp;<a href="http://www.rabe-gb.de/fr/" target="_blank"><img src="img/rabe.png" alt="Rabe"></a>'
        }
        return logo;
    }

    var content = '<div id="content" class="infowindow">'+
      '<h6 id="firstHeading" class="text-center">' + data.properties.Name + '</h6>'+
      '<p class="infoWindowPara"><strong>Adresse :</strong> ' + data.properties.Adresse1 + ', ' + data.properties.Adresse2 + '</br>'+
      '<strong>Code Postal :</strong> ' + data.properties.Zip_code + '</br>'+
      '<strong>Ville :</strong> ' + data.properties.City + '</br>' +
      '<strong>Pays :</strong> ' + data.properties.Country + ' </br>' +
      '<strong> Marque distribuée : ' + logo(data.properties.Brand) +
      '</p>' +
      '<p class="text-center" style="font-size:11px, padding-bottom:-2px"><strong>Notre Responsable de secteur</strong></p>' +
      '<p class="infoWindowPara">' + 
      '<strong>Nom : </strong>' + data.properties.GBgroup_salesman + '</br>' +
      '<strong>Mail : </strong>' + data.properties.GBgroup_salesman_eMail + '</br>' +
      '<strong>Tel : </strong>' + data.properties.GBgroup_salesman_Phonenumber + '</br>' +
      '</p>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({ 
      content: content,
      maxWidth: 250
    });

    var marker = new google.maps.Marker({
      position: {lat: data.geometry.coordinates[1], lng: data.geometry.coordinates[0]},
      map: map,
      icon: image[data.properties.Brand],
      title: data.properties.Name,
      info: content
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent( this.info );
        infowindow.open(map, this);
    });
  }
 
}

