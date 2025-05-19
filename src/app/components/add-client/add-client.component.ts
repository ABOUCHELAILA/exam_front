import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-add-client',
  templateUrl: './add-client.component.html'
})
export class AddClientComponent {
  client: Client = { id: 0, nom: '', email: '' };

  constructor(private clientService: ClientService, private router: Router) {}

  addClient() {
    this.clientService.addClient(this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
