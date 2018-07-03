/**
 * Updates the donut chart's percent number and the CSS positioning of the progress bar.
 * Also allows you to set if it is a donut or pie chart
 * @param  {string}  el      The selector for the donut to update. '#thing'
 * @param  {number}  percent Passing in 22.3 will make the chart show 22%
 * @param  {boolean} donut   True shows donut, false shows pie
 */
$(allInView);


function allInView() {
    setTimeout(function(){ 
    updateDonutChart('#70SPSP', 53, true);
    updateDonutChart('#70SVPS', 73, true);
    updateDonutChart('#70SRR', 2, true);
    updateDonutChart('#60APSP', 55, true);
    updateDonutChart('#60AVPS', 68, true);
    updateDonutChart('#60ARR', 3, true);
    updateDonutChart('#SI35PSP', 65, true);
    updateDonutChart('#SI35VPS', 68, true);
    updateDonutChart('#SI35RR', 14, true);
    updateDonutChart('#SI15PSP', 60, true);
    updateDonutChart('#SI15VPS', 47, true);
    updateDonutChart('#SI15RR', 8, true);
     }, 300);
}






function updateDonutChart (el, percent, donut) {
    percent = Math.round(percent);
    if (percent > 100) {
        percent = 100;
    } else if (percent < 0) {
        percent = 0;
    }
    var deg = Math.round(360 * (percent / 100));

    if (percent > 50) {
        $(el + ' .pie').css('clip', 'rect(auto, auto, auto, auto)');
        $(el + ' .right-side').css('transform', 'rotate(180deg)');
    } else {
        $(el + ' .pie').css('clip', 'rect(0, 1em, 1em, 0.5em)');
        $(el + ' .right-side').css('transform', 'rotate(0deg)');
    }
    if (donut) {
        $(el + ' .right-side').css('border-width', '0.1em');
        $(el + ' .left-side').css('border-width', '0.1em');
        $(el + ' .shadow').css('border-width', '0.1em');
    } else {
        $(el + ' .right-side').css('border-width', '0.5em');
        $(el + ' .left-side').css('border-width', '0.5em');
        $(el + ' .shadow').css('border-width', '0.5em');
    }
    //$(el + ' .num').text(percent);
    $(el + ' .left-side').css('transform', 'rotate(' + deg + 'deg)');
}


