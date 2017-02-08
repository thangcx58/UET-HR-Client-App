import { Component }         from '@angular/core';
import { MenuComponent}      from './menu/menu.component';
import { ContainerComponent} from './container/container.component';
import { FooterComponent }   from './footer/footer.component';
@Component({
  // moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuComponent,ContainerComponent,FooterComponent]
})
export class AppComponent {
  title = 'app works!';
}
