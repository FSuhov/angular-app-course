import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DuelComponent } from './duel/duel.component';
import { GladiatrixComponent } from './gladiatrix/gladiatrix.component';
import { FormsModule } from '@angular/forms';
import { GirlComponent } from './girl/girl.component';
import { PoolComponent } from './pool/pool.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DuelComponent,
    GladiatrixComponent,
    GirlComponent,
    PoolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
