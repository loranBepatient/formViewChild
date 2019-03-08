import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { FormulaireComponent } from "./components/formulaire/formulaire.component";
import { FormsService } from "./services/forms.service";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  providers: [FormsService],
  declarations: [HomePage, FormulaireComponent]
})
export class HomePageModule {}
