window.onload = function () {

    var btn = document.getElementsByClassName("btn")[0]
    var reg = /^[0-9+\-*/]+$/

    btn.addEventListener("click", click)

    var a = "1+1-2"

    /// 11-2
    /// var b = ["1", "1-2"]

    function click() {
        var txt = document.getElementsByClassName("txt")[0]
        var result = reg.test(txt.value)
        if (result == true) {
            var value = txt.value
            var c = true
            for (var i = 0; value.length - 1 > i; i++) {
                var h = value[i]
                var t = value[i + 1]
                if ((h == "+" || h == "-" || h == "/" || h == "*") && (t == "+" || t == "-" || t == "/" || t == "*")) {
                    document.getElementsByClassName("lbl")[0].innerHTML = "invalid"
                    c = false
                    break
                }

            }
            var b = value.length - 1
            if ((value[0] == "+" || value[0] == "*" || value[0] == "/") || (value[b] == "+" || value[b] == "-" || value[b] == "*" || value[b] == "/")) {
                document.getElementsByClassName("lbl")[0].innerHTML = "invalid"
            }
            else if (c == true) {

                var v = []
                for (var i = 0, f = 0; value.length > i; i++) {
                    /// 12+1-2

                    if (value[i] == "+" || value[i] == "-" || value[i] == "*" || value[i] == "/") {
                        // console.log(i)
                        v.push(Number(value.substring(f, i)))
                        v.push(value[i])
                        f = i + 1
                        // console.log(f)


                    }



                }
                v.push(Number(value.substring(f)))
                /// 12+1-2
                /// [12, "+", 1, "-", 2]
                for (var i = 0; i < v.length; i++) {
                    if (v[i + 1] == "/") {
                        v.splice(i, 3, v[i] / v[i + 2])
                        i--
                    }
                }
                for (var i = 0; i < v.length; i++) {
                    if (v[i + 1] == "*") {
                        v.splice(i, 3, v[i] * v[i + 2])
                        i--
                    }
                }


                for (var i = 0; i < v.length; i++) {
                    if (v[i + 1] == "+") {
                        v.splice(i, 3, v[i] + v[i + 2])
                        i--
                    }
                }
                for (var i = 0; i < v.length; i++) {
                    if (v[i + 1] == "-") {
                        v.splice(i, 3, v[i] - v[i + 2])
                        i--
                    }
                }
                if (v[0] == -Infinity || v[0] == Infinity) {
                    document.getElementsByClassName("lbl")[0].innerHTML = "undefined"
                }
                else {
                    document.getElementsByClassName("lbl")[0].innerHTML = v[0]
                }
                console.log(v)

            }
            /// i=0,[13,-,2]
            /// i=1
            /// 

        }
        else {
            document.getElementsByClassName("lbl")[0].innerHTML = "Enter a number"
        }

    }

}