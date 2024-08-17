//Health of Device - IoT Gateways

var BAChartDataValue = [
	45, 
	55, 
	33, 
]; 
var BAChartDataLabel = [
	'Unhealthy', 
	'Healthy', 
	'Unstate',  
];
var BAChartJobErrColors = [
	'rgb(244, 46, 72)',
	'rgb(0, 124, 251)',
	'rgb(254, 176, 25)',
];

var BAChartCountTotal = 0;
if (BAChartDataValue.length > 0) {
	BAChartCountTotal = BAChartDataValue.reduce(function(acc, currentVal, currentIdx, arr){
		return acc + currentVal;
	}, 0);
}

window.addEventListener('load', function(){
	var BAChartCtx = document.getElementById('BA-chart-job-error').getContext('2d');
	var BAChartJobErr = new Chart(BAChartCtx, {
		type: 'doughnut',
		data: {
			labels: BAChartDataLabel,
			datasets: [{
				data: BAChartDataValue,
				backgroundColor: BAChartJobErrColors,
				borderColor: '#fff',
				borderWidth: 2,
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			title: {
				display: true,
				position: 'top',
				fontSize: 28,
				fontColor: '#767676',
        		fontFamily:'Gilroy',
				fontStyle: '600',
				padding: 44,
				// text: 'IoT Gateways	',
			},
			plugins: {
				labels: [
					{
						render: 'label',
						fontColor: 'transparent',
            			fontSize: 24,
            			fontStyle: '600',
				    	padding: 44,
            			margin:10,
            			fontFamily:'Gilroy',
						position: 'outside'
					},
					{
						render: 'value',
						fontColor: '#fff',
            			fontSize: 24,
            			fontStyle: '600',
            			fontFamily:'Gilroy',
					}
				],
				doughnutlabel: {
					labels: [
						{
							text: BAChartCountTotal,
							color:'#767676',
							font: {
								size: 40,
								weight:600,
							}
			  
						}
					]
				}
			},
			legend: {
				display: true,
				"labels": {
					"fontSize": 20,
					"fontFamily" : 'Gilroy',
					 "fontWeight": '600',
				}
			}
			
		}
	});
});


//Health of Device - Meters

var BAChartDataValue1 = [
	31, 
	696, 
	60, 
]; 
var BAChartDataLabel1 = [
	'Unhealthy', 
	'Healthy', 
	'Unstate',  
];
var BAChartJobErrColors1 = [
	'rgb(244, 46, 72)',
	'rgb(0, 124, 251)',
	'rgb(254, 176, 25)',
];

var BAChartCountTotal1 = 0;
if (BAChartDataValue1.length > 0) {
	BAChartCountTotal1 = BAChartDataValue1.reduce(function(acc, currentVal, currentIdx, arr){
		return acc + currentVal;
	}, 0);
}

window.addEventListener('load', function(){
	var BAChartCtx1 = document.getElementById('BA-chart-job-error1').getContext('2d');
	var BAChartJobErr1 = new Chart(BAChartCtx1, {
		type: 'doughnut',
		data: {
			labels: BAChartDataLabel1,
			datasets: [{
				data: BAChartDataValue1,
				backgroundColor: BAChartJobErrColors1,
				borderColor: '#fff',
				borderWidth: 2,
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			title: {
				display: true,
				position: 'top',
				fontSize: 28,
				fontColor: '#767676',
        		fontFamily:'Gilroy',
				fontStyle: '600',
				padding: 44,
				// text: 'Meters',
			},
			plugins: {
				labels: [
					{
						render: 'label',
						fontColor: 'transparent',
            			fontSize: 24,
            			fontStyle: '600',
				    	padding: 44,
            			margin:10,
            			fontFamily:'Gilroy',
						position: 'outside'
					},
					{
						render: 'value',
						fontColor: '#fff',
            			fontSize: 24,
            			fontStyle: '600',
            			fontFamily:'Gilroy',
					}
				],
				doughnutlabel: {
					labels: [
						{
							text: BAChartCountTotal1,
							color:'#767676',
              font: {
                size: 40,
				weight:600,
				color: '#767676',
              }
						}
					]
				}
			},
			legend: {
				display: true,
				"labels": {
					"fontSize": 20,
					"fontFamily" : 'Gilroy',
					 "fontWeight": '600',
				}
			}
			
		}
	});
});


//Health of Device - Discovered Meters

var BAChartDataValue2 = [
	5, 
	15, 
	13, 
]; 
var BAChartDataLabel2 = [
	'Unhealthy', 
	'Healthy', 
	'Unstate',  
];
var BAChartJobErrColors2 = [
	'rgb(244, 46, 72)',
	'rgb(0, 124, 251)',
	'rgb(254, 176, 25)',
];

var BAChartCountTotal2 = 0;
if (BAChartDataValue2.length > 0) {
	BAChartCountTotal2 = BAChartDataValue2.reduce(function(acc, currentVal, currentIdx, arr){
		return acc + currentVal;
	}, 0);
}

window.addEventListener('load', function(){
	var BAChartCtx2 = document.getElementById('BA-chart-job-error2').getContext('2d');
	var BAChartJobErr2 = new Chart(BAChartCtx2, {
		type: 'doughnut',
		data: {
			labels: BAChartDataLabel2,
			datasets: [{
				data: BAChartDataValue2,
				backgroundColor: BAChartJobErrColors2,
				borderColor: '#fff',
				borderWidth: 2,
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			title: {
				display: true,
				position: 'top',
				fontSize: 28,
				fontColor: '#767676',
        		fontFamily:'Gilroy',
				fontStyle: '600',
				padding: 44,
				// text: 'Discovered Meters',
			},
			plugins: {
				labels: [
					{
						render: 'label',
						fontColor: 'transparent',
            			fontSize: 24,
            			fontStyle: '600',
				    	padding: 44,
            			margin:10,
            			fontFamily:'Gilroy',
						position: 'outside'
					},
					{
						render: 'value',
						fontColor: '#fff',
            			fontSize: 24,
            			fontStyle: '600',
            			fontFamily:'Gilroy',
					}
				],
				doughnutlabel: {
					labels: [
						{
							text: BAChartCountTotal2,
							color:'#767676',
								font: {
									size: 40,
									weight:600,
									color: '#767676',
								}
						}
						
					]
				}
			},
			legend: {
				display: true,
				"labels": {
					"fontSize": 20,
					"fontFamily" : 'Gilroy',
					 "fontWeight": '600',
				}
			}
			
		}
	});
});





//Health of Device - DGs

var BAChartDataValue3 = [
	0, 
	1, 
	0, 
]; 
var BAChartDataLabel3 = [
	'Unhealthy', 
	'Healthy', 
	'Unstate',  
];
var BAChartJobErrColors3 = [
	'rgb(244, 46, 72)',
	'rgb(0, 124, 251)',
	'rgb(254, 176, 25)',
];

var BAChartCountTotal3 = 0;
if (BAChartDataValue3.length > 0) {
	BAChartCountTotal3 = BAChartDataValue3.reduce(function(acc, currentVal, currentIdx, arr){
		return acc + currentVal;
	}, 0);
}

window.addEventListener('load', function(){
	var BAChartCtx3 = document.getElementById('BA-chart-job-error3').getContext('2d');
	var BAChartJobErr3 = new Chart(BAChartCtx3, {
		type: 'doughnut',
		data: {
			labels: BAChartDataLabel3,
			datasets: [{
				data: BAChartDataValue3,
				backgroundColor: BAChartJobErrColors3,
				borderColor: '#fff',
				borderWidth: 2,
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			title: {
				display: true,
				position: 'top',
				fontSize: 28,
				fontColor: '#767676',
        		fontFamily:'Gilroy',
				fontStyle: '600',
				padding: 44,
				// text: 'DGs',
			},
			plugins: {
				labels: [
					{
						render: 'label',
						fontColor: 'transparent',
            			fontSize: 24,
            			fontStyle: '600',
				    	padding: 44,
            			margin:10,
            			fontFamily:'Gilroy',
						position: 'outside'
					},
					{
						render: 'value',
						fontColor: '#fff',
            			fontSize: 24,
            			fontStyle: '600',
            			fontFamily:'Gilroy',
					}
				],
				
				doughnutlabel: {
					
					labels: [
						{
							text: BAChartCountTotal3,
							color:'#767676',
							font: {
							  size: 40,
							  weight: 'bold',
							},
						  }
						
					]
					
				}
			},
			legend: {
				display: true,
				"labels": {
					"fontSize": 20,
					"fontFamily" : 'Gilroy',
					 "fontWeight": '600',
				}
			}
			
		}
	});
});