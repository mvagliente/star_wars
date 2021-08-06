import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceshipsService } from './spaceships.service';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.component.html',
  styleUrls: ['./spaceships.component.css']
})
export class SpaceshipsComponent implements OnInit,AfterViewInit  {

  displayedColumns: string[] = ['sw'];
  dataSource = new MatTableDataSource<any>();
  public visible: boolean = false;

  @ViewChild(MatSort,{static: false}) matSort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private dataService: SpaceshipsService,
    private SpinnerService: NgxSpinnerService,
    public dialog: MatDialog) { }
  
  ngOnInit() {
    this.SpinnerService.show(); 
  }

  ngAfterViewInit(): void {
    this.getSpaceships();
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.paginator;
  }


openDialogPilot(url:string) {
  const dialogRef = this.dialog.open(Dialogpilot, {
    width:"50%",
    height:"550px",
    data: url
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

}



getSpaceships(): void {

  this.dataService.getSpaceships().subscribe((res: any[]) => 
  {
    console.log(res["results"]);
    this.visible = true
    this.dataSource.data = res["results"];    
    this.SpinnerService.hide(); 
  },
  (error: any): void => { console.log(error); });
}


}


@Component({
  selector: 'app-pilotdetail',
  templateUrl: 'dialogpilot.html',
  styleUrls: ['./spaceships.component.css']
})
export class Dialogpilot implements OnInit,AfterViewInit {

  public detail: any;
  public visible: boolean = false;
  constructor(
    private dataService: SpaceshipsService,
    private SpinnerService: NgxSpinnerService,
    public dialogRef: MatDialogRef<Dialogpilot>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}


  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    this.SpinnerService.show(); 
    
  
  }

  ngAfterViewInit(): void {
    this.dataService.getPilot(this.data).subscribe((res: any) => 
    {
      console.log(res);
      this.detail = res;
      this.visible = true
      this.SpinnerService.hide(); 
    },
    (error: any): void => {console.log(error);});
  }
  
  

}