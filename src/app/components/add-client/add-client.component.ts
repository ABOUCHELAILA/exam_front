import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AddClientComponent {
  client: Client = { nom: '', email: '' };

  constructor(private clientService: ClientService, private router: Router) {}

  ajouterClient() {
    this.clientService.addClient(this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
