import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AddClientComponent {
  client: Client = {
    nom: '',
    email: ''
  };

  constructor(private clientService: ClientService, private router: Router) {}

  ajouterClient() {
    this.clientService.createClient(this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
