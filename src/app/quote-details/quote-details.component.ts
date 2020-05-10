import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';
import { oks } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {


  @Input() quote: Quote;
  @Output() isCreated = new EventEmitter<boolean>();

  quoteCreated(created:boolean){
    this.isCreated.emit(created);
  }
  
 

  constructor() { }

  ngOnInit(): void {
  }

}
