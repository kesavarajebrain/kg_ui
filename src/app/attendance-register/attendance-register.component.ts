import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import Swal from 'sweetalert2'
declare var $:any;
@Component({
  selector: 'app-attendance-register',
  templateUrl: './attendance-register.component.html',
  styleUrls: ['./attendance-register.component.css']
})
export class AttendanceRegisterComponent implements AfterViewInit {
  @ViewChild('employeeaddForm', { static: false }) employeeaddForm: NgForm;
  public employeeData = {startDate:"",endDate:"",empName:""}
  fromDate:any;
  toDate:any;
  finalTodate:any;
  test:any
  constructor(private _snackBar: MatSnackBar, private common_service: CommonService, private route: Router) { }
  ngOnInit() {

  }

  ngAfterViewInit(){
    var today = new Date();
    $('#from').datetimepicker({
        format: 'dd-mm-yyyy hh:ii',
        autoclose: true,
        todayBtn: true,
        // startDate : today
    }).on('changeDate', function(ev2){
        $('#to').datetimepicker('setStartDate', ev2.date);
       this.fromDate = ev2.date
       console.log(this.fromDate)
    });
    
    $('#to').datetimepicker({
        format: 'dd-mm-yyyy hh:ii',
        autoclose: true,
        todayBtn: true,
        // startDate : today
    }).on('changeDate', function(ev1){
        $('#from').datetimepicker('setEndDate', ev1.date);
        this.toDate = ev1.date
        console.log(this.toDate)
        this.finalTodate = this.toDate
        console.log(this.finalTodate)
      });
  }

  saveSlot(){
    console.log(this.finalTodate)
    this.employeeData.startDate = this.fromDate
    this.employeeData.endDate = this.toDate
    console.log(this.employeeData)
    console.log(this.fromDate)
    console.log(this.toDate)
  }

}
