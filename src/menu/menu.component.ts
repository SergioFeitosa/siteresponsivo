import { MenuModule } from './menu.module';
import { 
  ChangeDetectionStrategy, 
  Component, 
  ViewChild 
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatAccordion,
    MatButtonModule,
    MatDatepickerModule,    
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MenuModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [provideNativeDateAdapter()],
})

export class MenuComponent {
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  

  showFiller = false;

}
