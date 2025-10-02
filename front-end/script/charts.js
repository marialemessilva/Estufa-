// --- Gráfico de Linha (Temperatura nas Últimas 24 Horas) ---

const ctxLine = document.getElementById('myLineChart').getContext('2d');

const myLineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['2h atrás', '', '1h atrás', '', 'Agora'], // Rótulos para o eixo X
        datasets: [{
            label: 'Temperatura Interna (°C)',
            data: [20, 55, 40, 15, 25], // Dados de exemplo para o gráfico
            backgroundColor: 'rgba(46, 125, 50, 0.4)', // Cor de preenchimento da área
            borderColor: 'rgba(46, 125, 50, 1)', // Cor da linha
            borderWidth: 2,
            tension: 0.4, // Suavidade da linha
            pointRadius: 0, // Remove os pontos nos dados
            fill: true, // Preenche a área abaixo da linha
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Permite que a altura do gráfico seja controlada pelo CSS
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    display: false // Esconde as linhas de grade do eixo Y
                },
                ticks: {
                    stepSize: 10,
                    callback: function(value) {
                        return value + '°'; // Adiciona o símbolo de grau nos valores do eixo Y
                    }
                }
            },
            x: {
                grid: {
                    display: false // Esconde as linhas de grade do eixo X
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        }
    }
});
