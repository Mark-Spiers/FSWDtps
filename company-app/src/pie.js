google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    data = document.getElementById('tableData').innerHTML.split("<li ")
    data.shift()
    for(var i = 0; i < data.length; i++){
        data[i] = data[i].split(">")[1]
        data[i] = data[i].split("<")[0]
    }
    names = new Set(data)
    names = Array.from(names);
    totals = [['abc','def']]
    for(var i = 0; i < names.length; i++){
        var total = 0;
        for(var j = 0; j < data.length; j++){
            if(data[j] == names[i]){
                total++;
            }
        }
        totals[i+1] = [names[i], total];
    }

    var data = google.visualization.arrayToDataTable(totals);

    var options = {
    title: 'Staff per department'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}