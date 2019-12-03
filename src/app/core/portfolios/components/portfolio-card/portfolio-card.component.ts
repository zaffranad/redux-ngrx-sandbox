import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Portfolio } from '../../model/portfolio';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  @Input()
  portfolio: Portfolio;

  @Output()
  onDelete = new EventEmitter();

  @Output()
  onDetails = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClickOnDelete() {
    this.onDelete.next();
  }

  onClickOnDetails() {
    this.onDetails.next();
  }
}
