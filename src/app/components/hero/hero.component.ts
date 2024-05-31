import { Component } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public supabase!: SupabaseClient;

  constructor(){
  //this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  //this.getNews()
  }

  async getNews() {
    try{
    const { data, error } = await this.supabase.from('clients').select('*')
    console.log('*************************************')
    console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }

}
