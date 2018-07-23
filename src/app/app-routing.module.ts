import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { GrafikaComponent } from './grafika/grafika.component';
import { HeaderComponent } from './header/header.component';
import { IllusztracioComponent } from './illusztracio/illusztracio.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { RendezvenyComponent } from './rendezveny/rendezveny.component';
import { SzolgaltatasComponent } from './szolgaltatas/szolgaltatas.component';
import { WebfejlesztesComponent } from './webfejlesztes/webfejlesztes.component';
import { BemutatkozasComponent } from './bemutatkozas/bemutatkozas.component';
import { ElerhetosegComponent } from './elerhetoseg/elerhetoseg.component';


const routes: Routes = [
  { path: '',
    component: ContentComponent
  },
  { path: 'grafika',
    component: GrafikaComponent
  },
  { path: 'illusztracio',
    component: IllusztracioComponent
  },
  { path: 'kapcsolat',
    component: KapcsolatComponent
  },
  { path: 'rendezveny',
    component: RendezvenyComponent
  },
  { path: 'szolgaltatas',
    component: SzolgaltatasComponent
  },
  { path: 'webfejlesztes',
    component: WebfejlesztesComponent
  },
  { path: 'bemutatkozas',
    component: BemutatkozasComponent
  },
  { path: 'elerhetoseg',
    component: ElerhetosegComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
