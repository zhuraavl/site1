function initialize(){for(var e=new Array,a={zoom:5,mapTypeId:google.maps.MapTypeId.ROADMAP,center:new google.maps.LatLng(1,1)},n=[[new google.maps.LatLng(0,0),"Marker 1",'<div class="marker-box"><h4>Bagel bin</h4><p>110 S Washington St</p><img src="media/mapmarker.jpg"><p>Bagel Bin a seat at the bar or by the fireplace and start the evening off right with onion rings the size of your face, served on a branding iron, and super-creative pizzas.</p><div class="buttons-row"><a href="">Direction</a><a href="">Website</a></div></div>'],[new google.maps.LatLng(0,1),"Marker 2","Infowindow content for Marker 2"],[new google.maps.LatLng(0,2),"Marker 3","Infowindow content for Marker 3"],[new google.maps.LatLng(1,0),"Marker 4","Infowindow content for Marker 4"],[new google.maps.LatLng(1,1),"Marker 5","Infowindow content for Marker 5"],[new google.maps.LatLng(1,2),"Marker 6","Infowindow content for Marker 6"]],r=new google.maps.Map(document.getElementById("map-canvas"),a),o=new google.maps.InfoWindow,t=0;t<n.length;t++){$("#markers").append('<a class="marker-link" data-markerid="'+t+'" href="#">'+n[t][1]+"</a> ");var i=new google.maps.Marker({position:n[t][0],map:r,title:n[t][1]});google.maps.event.addListener(i,"click",function(e,a){return function(){o.setContent(n[a][2]),o.open(r,e);var t=n[a][1];$(".marker-link").removeClass("active"),$(".marker-link:contains("+t+")").addClass("active")}}(i,t)),e.push(i)}$(".marker-link").on("click",(function(){$(".marker-link").removeClass("active"),$(this).addClass("active"),google.maps.event.trigger(e[$(this).data("markerid")],"click")}))}initialize();