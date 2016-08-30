var test = (function() {
    var init = function() {
        for (var i = 0; i < 20; i++) {
            setTimeout(ajax(i), 30000);
        }
    };

    var ajax = function(index) {

        if (knottyLock.add("examplekey")) {
            $("#result").append("Index: " + index + " -  result: Accepted and locked </br>");
            $.ajax({
                url: "http://localhost:3002/ajax/?index=" + index,
                async: true,
                success: function() {
                    knottyLock.remove("examplekey");
                    $("#result").append("Index: " + index + " -  result: Completed and released </br>");
                }
            })
        } else {
            $("#result").append("Index: " + index + " - result: locked </br>");
        }

    };

    return {
        runTest: init
    }
})();

$(document).ready(function() {
    test.runTest();
})