import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  today = 'day';

  constructor() { }

  ngOnInit() {

    // 加入图片之后才需要这个
    // this.today = `day${getDate(new Date())}`
  }
}
