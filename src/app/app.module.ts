import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WebfejlesztesComponent } from './webfejlesztes/webfejlesztes.component';
import { GrafikaComponent } from './grafika/grafika.component';
import { IllusztracioComponent } from './illusztracio/illusztracio.component';
import { RendezvenyComponent } from './rendezveny/rendezveny.component';
import { SzolgaltatasComponent } from './szolgaltatas/szolgaltatas.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { BemutatkozasComponent } from './bemutatkozas/bemutatkozas.component';
import { ElerhetosegComponent } from './elerhetoseg/elerhetoseg.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    WebfejlesztesComponent,
    GrafikaComponent,
    IllusztracioComponent,
    RendezvenyComponent,
    SzolgaltatasComponent,
    KapcsolatComponent,
    BemutatkozasComponent,
    ElerhetosegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
