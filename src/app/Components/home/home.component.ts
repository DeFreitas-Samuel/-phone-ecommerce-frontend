import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SandBoxService as SandBoxService } from 'src/app/services/sandbox.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sandbox: SandBoxService) { }

  ngOnInit(): void {
  }

  testSession():void {
    this.sandbox.SessionTest().subscribe(console.log)
  }

}
