const ctx = document.getElementById('myChart');

const api = async () => {
    try {
    const response = await axios('https://api.open-meteo.com/v1/forecast?latitude=4.00&longitude=-73.25&hourly=temperature_2m');
    const data = response.data
    console.log(response)
    return data
    } catch (error){
        console.log(error)
    }
}

const mychart = (data, time) => { 
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: time,
      datasets: [{
        label: 'temperatura Colombia por hora',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

const init = async () => {
    let data = await api();
    let temp = data.hourly.temperature_2m;
    let time = data.hourly.time
    console.log(temp)
    mychart(temp, time);

} 

init();