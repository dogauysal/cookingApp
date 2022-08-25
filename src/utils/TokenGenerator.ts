class TokenGenerator {

    generateToken = () => {
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
        var b = [];
        for (var i = 0; i < 45; i++) {
            var j = (Math.random() * (a.length - 1)).toFixed(0)
            b[i] = a[Number(j)];
        }
        return b.join("")
    }

}

export default new TokenGenerator();