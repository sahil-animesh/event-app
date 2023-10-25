import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MESSAGES } from '../../../shared/constant-files/alert-messages';
import { AlertService } from '../../../shared/services/alert.service';
import { SIDEBAR } from '../../../shared/constant-files/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private router: Router,
    private alertService:AlertService
  ) {}

  sidebarMenu: Array<any> = SIDEBAR;
  permissions={}

  ngOnInit() {
  }

  logout() {
    this.alertService.confirmAlert(MESSAGES.ARE_YOU_SURE_YOU_WANT_TO_LOGOUT).then((res: any)=>{
      if(res.isConfirmed){
        localStorage.removeItem('token');
        this.router.navigate(['/auth']);
      }
    }).catch((err: any)=>{
      console.log('Error',err);
    })
  }

  toggleDropDown(index: number, menu: any) {
    this.sidebarMenu.forEach((item,i)=>{
      if (item.children&& i!=index){
        document.querySelector(`#menue${i} a`)?.classList.remove('show');
        document.querySelector(`#menue${i} ul`)?.classList.remove('show');
        document.querySelector(`#menue${i} a`)?.setAttribute('aria-expanded', 'false');
      }
    })
    if (menu.children){
      let aTag = document.querySelector(`#menue${index} a`);
      aTag?.classList.toggle('show');
      if (aTag?.getAttribute('aria-expanded') == 'false') {
        aTag.setAttribute('aria-expanded', 'true');
      } else {
        aTag?.setAttribute('aria-expanded', 'false');
      }
      document.querySelector(`#menue${index} ul`)?.classList.toggle('show');
    }
  }

  hideSidebar(){
    document.querySelector('.sidebar')?.classList.remove('open_sidebar');
    document.querySelector('.content')?.classList.remove('open_sidebar');
  }
}