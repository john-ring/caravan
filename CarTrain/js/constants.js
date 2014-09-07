(function () {
    angular.module("caravan")

    .constant("Ericsson.service.header.authorization", "Basic cHJvdmlkZXI6MTIzNA==")

    .constant("Ericsson.service.status.url", "http://car5.hack.att.io:5000/luigi/v1/service/vehicle_status")
    .constant("Ericsson.service.emulate.url", "http://car5.hack.att.io:5000/luigi/v1/emulate/:field")

    .constant("Ericsson.service.emulate.fields", {
        SteeringWheelAngle: "steering_wheel_angle",
        RPM: "rpm",
        Speed: "speed"
    })

    .constant("m2x.key.master", "91c8a00b5cb7e6cc27c31d55a1e46fca")
    .constant("m2x.service.status.url", "https://api-m2x.att.com/v1/feeds/e69d0f5b75ae4ed23dd0f7f8b91c12c2/streams/:stream/values")
    .constant("m2x.key.feed", "e69d0f5b75ae4ed23dd0f7f8b91c12c2")
    .constant("m2x.key.api", "caeaff124a605a897c5f4d5b215a4db7")
    .constant("m2x.service.status.streams", {
        SteeringWheelAngle: "steering_wheel_angle",
        RPM: "rpm",
        Speed: "speed"
    })
})();