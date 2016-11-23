
if (window.fetch != undefined) {
    window.fetch = function (url, successCb, failCb) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {

            if (ajax.readyState === XMLHttpRequest.DONE) {
                if (ajax.status === 200) {
                    successCb.call(ajax, ajax.response);
                }
                else {
                    failCb.call(ajax, ajax.response);
                }
            }
        };
        ajax.open("GET", url);
        try {
            ajax.send();
        }
        catch (e) {
            fai.call(ajax, e);
        }
    }

}