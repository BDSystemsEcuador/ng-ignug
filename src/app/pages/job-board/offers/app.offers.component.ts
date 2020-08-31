import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {JobBoardServiceService} from '../../../services/job-board/job-board-service.service';
import {Offer, totalOffer} from '../../../models/job-board/models.index';

@Component({
  selector: 'app-offers',
  templateUrl: './app.offers.component.html',
  styleUrls: ['./app.offers.component.css']
})
export class AppOffersComponent implements OnInit {
  displayUser: boolean;
  selectedOffer:Offer;
  offers:Array<Offer>;

  contadorEmpresas: number;
  contadorPostulantes: number;
  contadorOfertas: number;

  items: MenuItem[];
constructor(private jobBoardService:JobBoardServiceService){
  this.selectedOffer=new Offer();
  this.offers=new Array<Offer>();
}
  ngOnInit() {
    this.contadorEmpresas = 0;
    this.contadorPostulantes = 0;
    this.contadorOfertas = 0;
    this.contarOfertas();
    this.contarEmpresas();
    this.contarPostulantes();
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'User', icon: 'pi pi-fw pi-user-plus' },
            { label: 'Filter', icon: 'pi pi-fw pi-filter' }
          ]
        },
        { label: 'Open', icon: 'pi pi-fw pi-external-link' },
        { separator: true },
        { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];

  }
  contarOfertas(){
  /* const parameters = '?'; */
  this.jobBoardService.getTotals('offers/totalOffers').subscribe(
    (response) => {
      this.contadorOfertas = response['totalOffers'];

    },
  (error)=>{
      console.log(error)
    }
  )
}
contarEmpresas(){
  /* const parameters = '?'; */
  this.jobBoardService.getTotals('offers/totalCompanies').subscribe(
    (response) => {
      this.contadorOfertas = response['totalCompanies'];

    },
  (error)=>{
      console.log(error)
    }
  )
}
contarPostulantes(){
  /* const parameters = '?'; */
  this.jobBoardService.getTotals('offers/totalPostulants').subscribe(
    (response) => {
      this.contadorOfertas = response['totalPostulants'];

    },
  (error)=>{
      console.log(error)
    }
  )
}
masinformacion(){
  this.displayUser = true;
}
}