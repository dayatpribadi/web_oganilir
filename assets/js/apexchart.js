// Chart Pertama 
    var options = {
        series: [{
        name: 'TNI/Polri',
        data: [44, 55, 41, 37, 22, 43, 21, 49, 45]
      }, {
        name: 'Guru/Dosen',
        data: [53, 32, 33, 52, 13, 43, 32, 56, 52]
      }, {
        name: 'PNS Selain TNI/Polri',
        data: [12, 17, 11, 9, 15, 11, 20, 18, 16]
      }, {
        name: 'Karayawan Swasta',
        data: [9, 7, 5, 8, 6, 9, 4, 7, 5]
      }, {
        name: 'Wiraswasta',
        data: [25, 12, 19, 32, 25, 24, 10, 12, 19]
      }, {
        name: 'Petani/Pekebun',
        data: [25, 12, 19, 32, 25, 24, 10, 12, 19]
      }, {
        name: 'Pedagang',
        data: [25, 12, 19, 32, 25, 24, 10, 12, 19]
      }, {
        name: 'Nelayan',
        data: [25, 12, 19, 32, 25, 24, 10, 12, 19]
      }, {
        name: 'Sopir/Masinis',
        data: [25, 12, 19, 32, 25, 24, 10, 12, 19]
      }, {
        name: 'Tidak Bekerja',
        data: [25, 12, 19, 32, 25, 24, 10, 12, 19]
      },
    ],
        chart: {
        type: 'bar',
        height: 450,
        stacked: true,
        stackType: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Statistik Penduduk Kabupaten Ogan Ilir Berdasarkan Pekerjaan',
        align: 'center',
      },
      xaxis: {
        categories: ['Kecamatan Sungai Pinang', 'Kecamatan Payaraman','Kecamatan Tanjung Batu', 'Kecamatan Tanjung Raja', 'Kecamatan Rantau Panjang', 'Kecamatan Rantau Alai', 'Kecamatan Indralaya', 'Kecamatan Indralaya Selatan', 'Indralaya Utara'],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Jiwa"
          }
        }
      },
      fill: {
        opacity: 1
      
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetX: 40
      }
      };

    var chart = new ApexCharts(document.querySelector("#chartJobs"), options);
    chart.render();

// Chart Kedua
    var options = {
    series: [
    {
      data: [
        {
          x: 'Total Penduduk',
          y: 218.241
        },
        {
          x: 'Kecamatan Sungai Pinang',
          y: 149
        },
        {
          x: 'Kecamatan Payaraman',
          y: 184
        },
        {
          x: 'Kecamatan Tanjung Batu',
          y: 55
        },
        {
          x: 'Kecamatan Tanjung Raja',
          y: 84
        },
        {
          x: 'Kecamatan Rantau Panjang',
          y: 31
        },
        {
          x: 'Kecamatan Rantau Alai',
          y: 70
        },
        {
          x: 'Kecamatan Indralaya',
          y: 30
        },
        {
          x: 'Kecamatan Indralaya Selatan',
          y: 44
        },
        {
          x: 'Kecamatan Indralaya Utara',
          y: 68
        },
        {
          x: 'Kecamatan Pemulutan',
          y: 28
        },
        {
          x: 'Kecamatan Pemulutan Barat',
          y: 19
        },
        {
          x: 'Kelurahan Pemulutan Selatan',
          y: 29
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 440,
    type: 'treemap'
  },
  title: {
    text: 'Informasi Kependudukan',
    align: 'center',
  },
  tooltip: {
    y: {
      formatter: function (datas) {
        return datas + " Jiwa"
      }
    }
  },
    };

    var chart = new ApexCharts(document.querySelector("#chartPopulasi"), options);
    chart.render();

// Chart Ketiga
    var options = {
        series: [{
        name: 'Laki-Laki',
        data: [44, 55, 41, 67, 22, 43, 21, 49, 45]
    }, {
        name: 'Perempuan',
        data: [13, 23, 20, 8, 13, 27, 33, 12, 19]
    }],
        chart: {
        type: 'bar',
        height: 450,
        stacked: true,
        stackType: '100'
    },
    title: {
        text: 'Populasi Penduduk Berdasarkan Jenis Kelamin',
        align: 'center',
    },
    tooltip: {
        y: {
        formatter: function (value) {
            return value + " Jiwa"
        }
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
        legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
        }
        }
    }],
    xaxis: {
        categories: ['Kecamatan Sungai Pinang', 'Kecamatan Payaraman','Kecamatan Tanjung Batu', 'Kecamatan Tanjung Raja', 'Kecamatan Rantau Panjang', 'Kecamatan Rantau Alai', 'Kecamatan Indralaya', 'Kecamatan Indralaya Selatan', 'Indralaya Utara'],
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
    },
    };

    var chart = new ApexCharts(document.querySelector("#chartJK"), options);
    chart.render();

// Chart Keempat
    var options = {
        series: [{
        name: 'S3',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'S2',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tamat S1',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'DIII',
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: 'DII',
        data: [25, 12, 19, 32, 25, 24, 10]
    }, {
        name: 'DI',
        data: [25, 12, 19, 32, 25, 24, 10]
    }, {
        name: 'SMA Sederajat',
        data: [25, 12, 19, 32, 25, 24, 10]
    }, {
        name: 'SMP',
        data: [25, 12, 19, 32, 25, 24, 10]
    }, {
        name: 'SD',
        data: [25, 12, 19, 32, 25, 24, 10]
    }, {
        name: 'Tidak Sekolah',
        data: [25, 12, 19, 32, 25, 24, 10]
    }],
        chart: {
        type: 'bar',
        height: 450,
        stacked: true,
    },
    plotOptions: {
        bar: {
        horizontal: true,
        dataLabels: {
            total: {
            enabled: true,
            offsetX: 0,
            style: {
                fontSize: '13px',
                fontWeight: 900
            }
            }
        }
        },
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    title: {
        text: 'Populasi Penduduk Berdasarkan Tingkat Pendidikan',
        align: 'center',
    },
    xaxis: {
        categories: ['Kecamatan Sungai Pinang', 'Kecamatan Payaraman','Kecamatan Tanjung Batu', 'Kecamatan Tanjung Raja', 'Kecamatan Rantau Panjang', 'Kecamatan Rantau Alai', 'Kecamatan Indralaya', 'Kecamatan Indralaya Selatan', 'Indralaya Utara'],
        labels: {
        formatter: function (val) {
            return val + " Jiwa"
        }
        }
    },
    yaxis: {
        title: {
        text: undefined
        },
    },
    tooltip: {
        y: {
        formatter: function (count) {
            return count + " Jiwa"
        }
        }
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetX: 40
    }
    };

    var chart = new ApexCharts(document.querySelector("#chartEdu"), options);
    chart.render();

// Chart Kelima
const data = {
    nodes: [
    // Data Kecamatan
      {id: 'Kecamatan Indralaya', title: 'Kecamatan Indralaya'},
      {id: 'Kecamatan Indralaya Utara', title: 'Kecamatan Indralaya Utara'},
      {id: 'Kecamatan Indralaya Selatan', title: 'Kecamatan Indralaya Selatan'},
      {id: 'Kecamatan Pemulutan', title: 'Kecamatan Pemulutan'},
      {id: 'Kecamatan Pemulutan Barat', title: 'Kecamatan Pemulutan Barat'},
      {id: 'Kecamatan Pemulutan Selatan', title: 'Kecamatan Pemulutan Selatan'},
      {id: 'Kecamatan Kandis', title: 'Kecamatan Kandis'},
      {id: 'Kecamatan Lubuk Keliat', title: 'Kecamatan Lubuk Keliat'},
      {id: 'Kecamatan Muara Kuang', title: 'Kecamatan Muara Kuang'},
      {id: 'Kecamatan Payaraman', title: 'Kecamatan Payaraman'},
      {id: 'Kecamatan Rambang Kuang', title: 'Kecamatan Rambang Kuang'},
      {id: 'Kecamatan Rantau Alai', title: 'Kecamatan Rantau Alai'},
      {id: 'Kecamatan Rantau Panjang', title: 'Kecamatan Rantau Panjang'},
      {id: 'Kecamatan Sungai Pinang', title: 'Kecamatan Sungai Pinang'},
      {id: 'Kecamatan Tanjung Batu', title: 'Kecamatan Tanjung Batu'},
      {id: 'Kecamatan Tanjung Raja', title: 'Kecamatan Tanjung Raja'},
    // Data Pendidikan
      {id: 'Tamat S3', title: 'Tamat S3'},
      {id: 'Tamat S2', title: 'Tamat S2'},
      {id: 'Tamat S1', title: 'Tamat S1'},
      {id: 'Tamat D3', title: 'Tamat D3'},
      {id: 'Tamat D1_2', title: 'Tamat D1_2'},
      {id: 'Tamat SMA', title: 'Tamat SMA'},
      {id: 'Tamat SMP', title: 'Tamat SMP'},
      {id: 'Tamat SD', title: 'Tamat SD'},
      {id: 'Tidak Sekolah', title: 'Tidak Sekolah'},
    ],
    edges: [
      {source: 'Kecamatan Indralaya', target: 'Tamat SMA', value: 3023},
      {source: 'Kecamatan Indralaya', target: 'Tamat S1', value: 654},
      {source: 'Kecamatan Indralaya', target: 'Tamat SMP', value: 1789},
      {source: 'Kecamatan Indralaya', target: 'Tamat D1_2', value: 2987},
      {source: 'Kecamatan Indralaya', target: 'Tamat S2', value: 1876},
      {source: 'Kecamatan Indralaya', target: 'Tamat S3', value: 39},
      {source: 'Kecamatan Indralaya', target: 'Tamat SD', value: 4502},
      {source: 'Kecamatan Indralaya', target: 'Tidak Sekolah', value: 2000},
      {source: 'Kecamatan Indralaya Utara', target: 'Tamat SMA', value: 1456},
      {source: 'Kecamatan Indralaya Utara', target: 'Tamat S1', value: 1523},
      {source: 'Kecamatan Indralaya Utara', target: 'Tamat SMP', value: 239},
      {source: 'Kecamatan Indralaya Utara', target: 'Tamat D1_2', value: 1523},
      {source: 'Kecamatan Indralaya Utara', target: 'Tamat S2', value: 239},
      {source: 'Kecamatan Indralaya Utara', target: 'Tamat S3', value: 239},
      {source: 'Kecamatan Indralaya Utara', target: 'Tamat SD', value: 1523},
      {source: 'Kecamatan Indralaya Utara', target: 'Tidak Sekolah', value: 1523},
      {source: 'Kecamatan Indralaya Selatan', target: 'Tamat SMA', value: 1523},
      {source: 'Kecamatan Indralaya Selatan', target: 'Tamat S1', value: 239},
      {source: 'Kecamatan Indralaya Selatan', target: 'Tamat SMP', value: 1523},
      {source: 'Kecamatan Indralaya Selatan', target: 'Tamat D1_2', value: 239},
      {source: 'Kecamatan Indralaya Selatan', target: 'Tamat S2', value: 1523},
      {source: 'Kecamatan Indralaya Selatan', target: 'Tamat S3', value: 239},
      {source: 'Kecamatan Indralaya Selatan', target: 'Tamat SD', value: 1523},
      {source: 'Kecamatan Indralaya Selatan', target: 'Tidak Sekolah', value: 1523},
      {source: 'Kecamatan Pemulutan', target: 'Tamat SMA', value: 1523},
      {source: 'Kecamatan Pemulutan', target: 'Tamat S1', value: 1523},
      {source: 'Kecamatan Pemulutan', target: 'Tamat SMP', value: 1523},
      {source: 'Kecamatan Pemulutan', target: 'Tamat D1_2', value: 1523},
      {source: 'Kecamatan Pemulutan', target: 'Tamat S2', value: 1523},
      {source: 'Kecamatan Pemulutan', target: 'Tamat S3', value: 1523},
      {source: 'Kecamatan Pemulutan', target: 'Tamat SD', value: 1523},
      {source: 'Kecamatan Pemulutan', target: 'Tidak Sekolah', value: 1523},
    ],
  };
  const graphOptions = {
    nodeWidth: 20,
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 600,
    edgeOpacity: 0.2,
    canvasStyle: 'border: 0px solid #caced0',
  };
  const s = new ApexSankey(document.getElementById('svg-sankey'), graphOptions);
  s.render(data);


// Chart Keenam
var options = {
    series: [{
      name: 'Kecamatan Sungai Pinang',
      data: [0, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Kecamatan Payaraman',
      data: [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Kecamatan Tanjung Batu',
      data: [0, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Kecamatan Tanjung Raja',
      data: [0, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Keamatan Rantau Panjang',
      data: [0, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Kecamatan Rantau Alai',
      data: [0, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Kecamatan Indralaya',
      data: [0, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Kecamatan Indralaya Selatan',
      data: [0, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Keamatan Indralaya Utara',
      data: [0, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0]
    }
  ],
    chart: {
    height: 450,
    type: 'heatmap',
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.2,
      radius: 4,
      useFillColorAsStroke: false,
      colorScale: {
        ranges: [{
            from: -30,
            to: 1,
            name: 'GK',
            color: '#00A100'
          },
          {
            from: 2,
            to: 2,
            name: 'GKM',
            color: '#128FD9'
          },
          {
            from: 3,
            to: 3,
            name: 'GKNM',
            color: '#FFB200'
          },
          {
            from: 4,
            to: 4,
            name: 'Extreme',
            color: '#FF0000'
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    y: {
        formatter: function (dod) {
            return dod + " KK"
        }
    }
},
  stroke: {
    width: 1
  },
  title: {
    text: 'Statistik Data Kemiskinan Ekstrem',
    align: 'center',
  },
  };

  var chart = new ApexCharts(document.querySelector("#charte"), options);
  chart.render();

