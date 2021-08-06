import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd, NavigationStart, NavigationError } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";  

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = []

  constructor(private router: Router, private location: Location,private SpinnerService: NgxSpinnerService,) {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
            SpinnerService.show()
          }
        if (event instanceof NavigationError) {
            SpinnerService.hide()
        }
        if (event instanceof NavigationEnd) {
            this.history.push(event.urlAfterRedirects)
            SpinnerService.hide()
        }
    })
  }

  public back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }
}