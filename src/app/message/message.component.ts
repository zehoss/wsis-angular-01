import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() type;
  @Input() message;

  // need to be public because we will use it in template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
