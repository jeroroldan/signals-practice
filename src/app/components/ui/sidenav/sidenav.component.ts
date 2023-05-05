import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { NavItem } from '../../interfaces/nav-item';
import { ELEMENT_DATA } from 'src/app/database/data';


@Component({
  selector: 'sidenav-component',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy {

  public dataInfo = ELEMENT_DATA

  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];

  menu: NavItem[] = [
    {
      displayName: 'Escritorio',
      iconName: 'desktop_windows',
      route: 'escritorio',
    },
    {
      displayName: 'Entradas GADE',
      iconName: 'ballot',
      route: 'entradasGADE',
    },
    {
      displayName: 'Expedientes',
      iconName: 'description',
      children: [
        {
          displayName: 'Mis Expedientes',
          iconName: 'how_to_reg',
          route: '/misexpedientes',
        },
        {
          displayName: 'Todos',
          iconName: 'waves',
          route: '/todos',
        },
      ],
    },
    {
      displayName: 'Perfiles',
      iconName: 'group',
      children: [
        {
          displayName: 'Búsqueda Perfil',
          iconName: 'search',
          route: '/busquedaperfiles',
        },
      ],
    },
  ];
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun:boolean = true;

}



