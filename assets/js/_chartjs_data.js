
const ctx = document.getElementById('myChartSex');

new Chart(ctx, {
type: 'bar',
data: {
    labels: ['Kecamatan Tanjung Raja', 'Kecamatan Rantau Panjang', 'Kecamatan Rantau Alai', 'Kecamatan Indralaya', 'Kecamatan Indralaya Selatan', 'Indralaya Utara'],
    datasets: [
        {
            label: 'Laki-laki',
            data: [12, 19, 13, 15, 20, 23],
            borderWidth: 1
        },
        {
            label: 'Perempuan',
            data: [30, 29, 35, 25, 20, 13],
            borderWidth: 1
        },
    ]
},
options: {
    plugins: {
      title: {
        display: true,
        text: 'Data Penduduk Berdasarkan Jenis Kelamin'
      },
    },
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
});

const ctx2 = document.getElementById('myChartEdu');

new Chart(ctx2, {
type: 'bar',
data: {
    labels: ['Kecamatan Tanjung Raja', 'Kecamatan Rantau Panjang', 'Kecamatan Rantau Alai', 'Kecamatan Indralaya', 'Kecamatan Indralaya Selatan', 'Indralaya Utara'],
    datasets: [
        {
            label: 'S3',
            data: [1, 2, 3, 4, 5, 6],
            borderWidth: 1
        },
        {
            label: 'S2',
            data: [30, 29, 35, 25, 20, 13],
            borderWidth: 1
        },
        {
            label: 'S1',
            data: [12, 19, 13, 15, 20, 23],
            borderWidth: 1
        },
        {
            label: 'SMA Sederajat',
            data: [22, 19, 13, 15, 20, 23],
            borderWidth: 1
        },
        {
            label: 'SMP Sederajat',
            data: [45, 29, 35, 25, 20, 13],
            borderWidth: 1
        },
        {
            label: 'SD',
            data: [30, 29, 35, 25, 20, 13],
            borderWidth: 1
        },
        {
            label: 'Tidak Sekolah',
            data: [30, 29, 35, 25, 20, 13],
            borderWidth: 1
        },
    ]
},
options: {
    plugins: {
      title: {
        display: true,
        text: 'Data Penduduk Berdasarkan Jenjang Pendidikan'
      },
    },
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
});

const ctx3 = document.getElementById('myChartJob');

new Chart(ctx3, {
type: 'bar',
data: {
    labels: ['Kecamatan Sungai Pinang', 'Kecamatan Payaraman','Kecamatan Tanjung Batu', 'Kecamatan Tanjung Raja', 'Kecamatan Rantau Panjang', 'Kecamatan Rantau Alai', 'Kecamatan Indralaya', 'Kecamatan Indralaya Selatan', 'Indralaya Utara'],
    color: ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'grey'],
    datasets: [
        {
            label: 'TNI/Polri',
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50],
            borderWidth: 1,
            borderColor: 'red',
            backgroundColor: 'red',
        },
        {
            label: 'Dosen/Guru',
            data: [9, 15, 20, 25, 30, 35, 40, 45, 50],
            borderWidth: 1,
            borderColor: 'blue',
            backgroundColor: 'blue',
            hidden: true,
            fill: '-1',
        },
        {
            label: 'PNS Selain TNI/Polri',
            data: [8, 15, 20, 25, 30, 35, 40, 45, 50],
            borderWidth: 1,
            borderColor: 'green',
            backgroundColor: 'green',
            fill: 1,
        },
        {
            label: 'Wiraswasta',
            data: [17, 15, 20, 25, 30, 35, 40, 45, 50],
            borderWidth: 1,
            borderColor: 'yellow',
            backgroundColor: 'yellow',
            fill: false,
        },
        {
            label: 'Karyawan Swasta',
            data: [21, 19, 22, 25, 30, 35, 40, 45, 50],
            borderWidth: 1,
            borderColor: 'purple',
            backgroundColor: 'purple',
            fill: '-1',

        },
        {
            label: 'Sopir/Masinis',
            data: [17, 15, 20, 25, 30, 35, 40, 45, 50],
            borderWidth: 1,
            borderColor: 'orange',
            backgroundColor: 'orange',
            fill: '-1',
        },
        {
            label: 'Petani/Pekebun',
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50],
            borderWidth: 1,
            borderColor: 'pink',
            backgroundColor: 'pink',
            fill: 1,
        },
        {
            label: 'Nelayan',
            data: [21, 22, 23, 24, 25, 26, 27, 28, 29],
            borderWidth: 1,
            borderColor: 'brown',
            backgroundColor: 'brown',
            fill: '-1',
        },
        {
            label: 'Tidak Bekerja',
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50],
            borderWidth: 1,
            borderColor: 'grey',
            backgroundColor: 'grey',
            fill: '-1',
        },]
    },
    options: {
    plugins: {
        display: true,
        text: 'Data Penduduk Berdasarkan Jenis Pekerjaan',
        filler: {
          propagate: false
        },
        'samples-filler-analyser': {
          target: 'chart-analyser'
        }
      },
      interaction: {
        intersect: false
      }
    },
});

const ctx4 = document.getElementById('myChartJob2');
new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['TNI/Polri', 'Dosen/Guru', 'PNS Selain TNI/Polri', 'Wiraswasta', 'Karyawan Swasta', 'Sopir/Masinis', 'Petani/Pekebun', 'Nelayan', 'Tidak Bekerja'],
        datasets: [
            {
                label: 'label-01',
                data: [10,],
                borderWidth: 1,
                borderColor: 'red',
                backgroundColor: 'red',
            },
        ],
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Pie Chart'
                }
            }
        },
    },
});


