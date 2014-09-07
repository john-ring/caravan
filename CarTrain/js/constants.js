(function () {
    angular.module("caravan")

    .constant("Ericsson.service.headers.authorization", "Basic cHJvdmlkZXI6MTIzNA==")
    .constant("Ericsson.service.diagnostics.url", "http://car5.hack.att.io:5000/luigi/v1/service/vehicle_diagnostics")
    .constant("Ericsson.service.status.url", "http://car5.hack.att.io:5000/luigi/v1/service/vehicle_status")
    .constant("Ericsson.service.emulate.url", "http://car5.hack.att.io:5000/luigi/v1/emulate/:field")

    .constant("Ericsson.service.emulate.fields", {
        SteeringWheelAngle: "steering_wheel_angle",
        RPM: "rpm",
        Speed: "speed",
        FuelUsage: "fuelUsage"
    })

    .constant("m2x.key.master", "91c8a00b5cb7e6cc27c31d55a1e46fca")
    .constant("m2x.service.status.url", "https://api-m2x.att.com/v1/feeds/:feed/streams/:stream/values")
    .constant("m2x.feed.leader", "e69d0f5b75ae4ed23dd0f7f8b91c12c2")
    .constant("m2x.feed.follower1", "c2f6362f23984502c750a5377e51fe01")
    .constant("m2x.feed.follower2", "860ff4464436ba6c2cdfa3e93040dee7")
    .constant("m2x.service.status.streams", {
        SteeringWheelAngle: "steering_wheel_angle",
        RPM: "rpm",
        Speed: "speed",
        FuelUsage: "fuel_usage",
        Longitude: "longitude",
        Latitude: "latitude"
    })
    .constant("m2x.service.status.followerStreams", {
        FuelUsage: "fuel_usage",
        Longitude: "longitude",
        Latitude: "latitude"
    })

    .constant("member.status", {
        Leader: "leader",
        Pending: "pending",
        Coupling: "coupling",
        Coupled: "coupled"
    })
})();