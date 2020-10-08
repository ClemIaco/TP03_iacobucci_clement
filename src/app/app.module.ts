import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FooterComponent } from './footer/footer.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { NamePatternDirective } from './directives/name-pattern.directive';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { PhonePipePipe } from './phone-pipe.pipe';
import { PostalCodePatternDirective } from './directives/postal-code-pattern.directive';
import { CityPatternDirective } from './directives/city-pattern.directive';
import { EmailPatternDirective } from './directives/email-pattern.directive';
import { CountryPatternDirective } from './directives/country-pattern.directive';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FormulaireComponent,
    FooterComponent,
    RecapitulatifComponent,
    NamePatternDirective,
    PasswordPatternDirective,
    MatchPasswordDirective,
    PhonePipePipe,
    PostalCodePatternDirective,
    CityPatternDirective,
    EmailPatternDirective,
    CountryPatternDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
