<template>
    <div id="map_ma"></div>
</template>

<script>
export default {
    name: 'google-map',
    components: {},
    data() {
        return {
            center: { lat: 45.508, lng: -73.587 },
            markers: [],
            places: [],
            currentPlace: null
        }
    },
    methods: {
        setPlace(place) {
            this.currentPlace = place
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng()
                }
                this.markers.push({ position: marker })
                this.places.push(this.currentPlace)
                this.center = marker
                this.currentPlace = null
            }
        },
        geolocate: function() {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            })
        }
    },
    mounted() {
        // At this point, the child GmapMap has been mounted, but
        // its map has not been initialized.
        // Therefore we need to write mapRef.$mapPromise.then(() => ...)
        // this.geolocate()
        var Y_point = 35.837143 // Y 좌표
        var X_point = 128.558612 // X 좌표
        var zoomLevel = 18 // 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
        var markerTitle = '대구광역시' // 현재 위치 마커에 마우스를 오버을때 나타나는 정보
        var markerMaxWidth = 300 // 마커를 클릭했을때 나타나는 말풍선의 최대 크기

        // 말풍선 내용
        var contentString =
            '<div>' +
            '<h2>대구남구</h2>' +
            '<p>안녕하세요. 구글지도입니다.</p>' +
            '</div>'
        var myLatlng = new google.maps.LatLng(Y_point, X_point)
        var mapOptions = {
            zoom: zoomLevel,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(
            document.getElementById('map_ma'),
            mapOptions
        )
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: markerTitle
        })
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWizzzdth: markerMaxWidth
        })

        console.log('google', google)
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker)
        })
        infowindow.open(map, marker)
    }
}
</script>
<style scoped>
/* Always set the map height explicitly to define the size of the div
       * element that contains the map. */

#map_ma {
    width: 100%;
    height: 470px;
}
</style>
