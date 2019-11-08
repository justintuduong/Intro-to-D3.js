var bars = d3.select("body")
    .selectAll("div")
    .data([24, 16, 18, 12, 22, 16]);

bars.enter().append("div")
    .style("background-color", "red")
    .style("height", function(d){ return d*20+"px"; }); // "height", "80px" would be the example for the first value 4

bars.exit().remove();