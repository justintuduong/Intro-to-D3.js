var bars = d3.select("body")
    .selectAll("div")
    .data([15, 32, 10, 8, 60, 24]);

bars.enter().append("div")
    .style("width", function (d) {
        return d * 10 + "px";
    })

    .style("background-color",
        function (d) {
            d *= 4;
            // console.log("rgb(0," + d + ",0)")
            return "rgb(0," + d + ",0)"
        })

    .text(function (d) {
        return d;
    });

bars.exit().remove();