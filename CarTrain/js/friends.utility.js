(function () {
    angular.module("caravan")
    .factory("Friends", Friends);

    Friends.$inject = ["m2x.feed.follower1", "m2x.feed.follower2", "member.status"];

    function Friends(feed1, feed2, statuses) {
        var friends = [
            {
                "firstName": "Brian",
                "lastName": "O'Connor",
                "phoneNumber": "444-555-6789",
                "vin": "123456781234",
                "image": "/images/profile_brian.png",
                "feed": feed1,
                "fuelUsage": null,
                "fuelUsageType": null,
                "status": statuses.Coupled
            },
            {
                "firstName": "Scott",
                "lastName": "Hankinson",
                "phoneNumber": "444-555-6799",
                "vin": "123456781235",
                "image": "/images/profile_scott.png",
                "feed": feed2,
                "fuelUsage": null,
                "fuelUsageType": null,
                "status": statuses.Pending
            },
            {
                "firstName": "Jordan",
                "lastName": "Wright",
                "phoneNumber": "444-555-6799",
                "vin": "123456781235",
                "image": "/images/profile_jordan.png",
                "feed": feed2,
                "fuelUsage": null,
                "fuelUsageType": null,
                "status": statuses.Pending
            }
        ];
        var friendIndex = 0;
        var getNext = function () {
            if (friendIndex < friends.length) {
                return friends[friendIndex++];
            }
            return friends[friends.length - 1];
        };

        var service = {
            'friends': friends,
            'getNext': getNext
        };

        return service;
    }
})();