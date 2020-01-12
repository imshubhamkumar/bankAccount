import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chart = [];
  private accountDetails = [];
  dates = [];
  bal = [];
  dep = [];
  with = [];
  constructor(private accService: AccountService) { }

  ngOnInit() {
    this.accService.getAccountDetails().subscribe(
      data => {
        this.accountDetails = data;
        this.accountDetails.forEach((res) => {
          this.dates.push(res["Date"]);
          this.bal.push(parseInt(res["Balance AMT"], 10));
          this.dep.push(parseInt(res["Deposit AMT"]));
          this.with.push(parseInt(res["Withdrawal AMT"]));
        });
      }
    );

    this.chart = new Chart('balance', {
      type: 'line',

      // The data for our dataset
      data: {
          labels: this.dates,
          datasets: [
            {
              label: 'Balance Amount',
              backgroundColor: '#ffffff',
              borderColor: 'rgb(255, 99, 132)',
              data: this.bal,
              fill: false
            }
        ]
      },
      // Configuration options go here
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });

    this.chart = new Chart('deposit', {
      type: 'bar',

      // The data for our dataset
      data: {
          labels: this.dates,
          datasets: [
            {
              label: 'Deposite Amount',
              backgroundColor: '#A245B1',
              borderColor: '#A245B1',
              data: this.dep,
              fill: true
            },

            {
              label: 'Withdraw Amount',
              backgroundColor: '#C0514B',
              borderColor: '#C0514B',
              data: this.with,
              fill: true
            }
        ]
      },
      // Configuration options go here
      options: {
        legend: {
          display: true
        },
        animation: false,
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
    console.log(this.chart);
  }

}
