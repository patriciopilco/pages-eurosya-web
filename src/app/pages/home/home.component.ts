import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { SummaryComponent } from "../../components/summary/summary.component";
import { SnippetsComponent } from "../../components/snippets/snippets.component";
import { FeaturesComponent } from "../../components/features/features.component";
import { StatsComponent } from "../../components/stats/stats.component";
import { CustomersComponent } from "../../components/customers/customers.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavbarComponent, HeroComponent, SummaryComponent, SnippetsComponent, FeaturesComponent, StatsComponent, CustomersComponent, ContactComponent]
})
export class HomeComponent {

}
