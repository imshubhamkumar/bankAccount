import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { AccountService } from '../account.service';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, AfterViewInit {
  elements: any = [];
  previous: any = [];
  searchText: string = '';

  headElements = ['Account No', 'Date', 'Transaction Details', 'Value Date', 'Withdrawal AMT', 'Deposit AMT', 'Balance AMT'];
  private accountDetails = [];

  constructor(private accService: AccountService, private cdRef: ChangeDetectorRef) {}

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @HostListener('input') oninput() {this.searchItems(); }





  ngOnInit() {
    this.accService.getAccountDetails().subscribe(
      data => {
        this.accountDetails = data;
        this.mdbTable.setDataSource(this.accountDetails);
        this.elements = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      }
    );

  }

  ngAfterViewInit(): void {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

    searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.accountDetails = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.accountDetails = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }


}
